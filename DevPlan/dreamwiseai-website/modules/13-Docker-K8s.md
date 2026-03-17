# 模块 13 — Docker & K8s 配置

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Infrastructure |
| 优先级 | P0 |
| 预估工时 | 3h |
| 依赖 | 模块 01（standalone 配置）|

## 开发步骤

### Step 1: Dockerfile

```dockerfile
FROM node:20-alpine AS base

# 依赖安装阶段
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# 构建阶段
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段（使用 standalone 输出）
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Step 2: .dockerignore

```
node_modules
.next
.git
*.md
.env*
!.env.example
DevPlan
Architecture
Design
TechSolution
docs
ProjectManager
```

### Step 3: infrastructure/k8s/namespace.yaml

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
```

### Step 4: infrastructure/k8s/deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dreamwiseai-website
  namespace: production
  labels:
    app: dreamwiseai-website
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
              memory: "512Mi"
              cpu: "500m"
          readinessProbe:
            httpGet:
              path: /en
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /en
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 30
```

### Step 5: infrastructure/k8s/service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: dreamwiseai-website
  namespace: production
spec:
  selector:
    app: dreamwiseai-website
  ports:
    - name: http
      port: 80
      targetPort: 3000
  type: ClusterIP
```

### Step 6: infrastructure/k8s/ingress.yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: dreamwiseai-website
  namespace: production
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
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
    - host: www.dreamwiseai.com
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

### Step 7: infrastructure/k8s/secret.yaml.example（模板，不含真实密钥）

```yaml
# 复制此文件为 secret.yaml，填入真实值，勿提交到 Git
apiVersion: v1
kind: Secret
metadata:
  name: dreamwiseai-secrets
  namespace: production
type: Opaque
stringData:
  RESEND_API_KEY: "re_your_key_here"
  CONTACT_EMAIL: "consulting@dreamwiseai.com"
  NEXT_PUBLIC_CALENDLY_URL: "https://calendly.com/your-username/30min"
```

### Step 8: 构建和部署脚本

```bash
# scripts/build.sh
#!/bin/bash
VERSION=${1:-latest}
docker build -t dreamwiseai/website:${VERSION} .
echo "Built: dreamwiseai/website:${VERSION}"

# scripts/deploy.sh
#!/bin/bash
VERSION=${1:-latest}
kubectl set image deployment/dreamwiseai-website \
  website=dreamwiseai/website:${VERSION} \
  -n production
kubectl rollout status deployment/dreamwiseai-website -n production
echo "Deployed: dreamwiseai/website:${VERSION}"
```

## 验收标准

- `docker build -t dreamwiseai/website:test .` 成功
- `docker run -p 3000:3000 dreamwiseai/website:test` 可访问 localhost:3000
- `kubectl apply -f infrastructure/k8s/` 无错误
- Pod Running 状态
- Ingress 绑定域名正常
