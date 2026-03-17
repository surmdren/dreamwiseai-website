# K8s 基础设施架构

## 部署方案：k3s 自托管

k3s 是轻量级 Kubernetes，适合单机或小集群自托管，内置 Traefik Ingress 和 ServiceLB。

## 服务器要求

| 配置 | 最低要求 | 推荐 |
|------|----------|------|
| CPU | 1 核 | 2 核 |
| 内存 | 1 GB | 2 GB |
| 磁盘 | 20 GB | 40 GB |
| 系统 | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

官网为纯静态渲染，资源消耗极低，1C2G VPS 完全足够。

## 组件架构

```
Internet
    ↓
DNS (Namecheap → 服务器 IP)
    ↓
Nginx Ingress Controller（端口 80/443）
    ↓
cert-manager（Let's Encrypt 自动证书）
    ↓
K8s Service (ClusterIP)
    ↓
Next.js Pod (2 副本)
    ↓
K8s Secret（RESEND_API_KEY / CONTACT_EMAIL）
```

## K8s 资源配置

### Deployment
```yaml
# infrastructure/k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dreamwiseai-website
  namespace: production
spec:
  replicas: 2
  selector:
    matchLabels:
      app: dreamwiseai-website
  template:
    metadata:
      labels:
        app: dreamwiseai-website
    spec:
      containers:
        - name: website
          image: dreamwiseai/website:latest
          ports:
            - containerPort: 3000
          envFrom:
            - secretRef:
                name: dreamwiseai-secrets
          resources:
            requests:
              memory: "128Mi"
              cpu: "100m"
            limits:
              memory: "256Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
```

### Service
```yaml
# infrastructure/k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: dreamwiseai-website
  namespace: production
spec:
  selector:
    app: dreamwiseai-website
  ports:
    - port: 80
      targetPort: 3000
```

### Ingress
```yaml
# infrastructure/k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: dreamwiseai-website
  namespace: production
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - dreamwiseai.com
        - www.dreamwiseai.com
      secretName: dreamwiseai-tls
  rules:
    - host: dreamwiseai.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: dreamwiseai-website
                port:
                  number: 80
```

### Secret
```yaml
# infrastructure/k8s/secret.yaml (勿提交到 Git)
apiVersion: v1
kind: Secret
metadata:
  name: dreamwiseai-secrets
  namespace: production
type: Opaque
stringData:
  RESEND_API_KEY: "re_xxx"
  CONTACT_EMAIL: "consulting@dreamwiseai.com"
```

## Dockerfile

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

## 部署流程

```bash
# 1. 构建镜像
docker build -t dreamwiseai/website:v1.0.0 .

# 2. 推送镜像（或传到服务器）
docker push dreamwiseai/website:v1.0.0

# 3. 创建命名空间
kubectl create namespace production

# 4. 应用 Secret（敏感配置）
kubectl apply -f infrastructure/k8s/secret.yaml

# 5. 部署应用
kubectl apply -f infrastructure/k8s/deployment.yaml
kubectl apply -f infrastructure/k8s/service.yaml
kubectl apply -f infrastructure/k8s/ingress.yaml

# 6. 验证
kubectl get pods -n production
kubectl get ingress -n production
```
