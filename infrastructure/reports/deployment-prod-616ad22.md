# 部署报告

**环境**: prod
**版本**: 616ad22
**时间**: 2026-03-18 08:32 CST
**集群**: kind-dreamai (dreamai-control-plane)

---

## 部署状态

| 服务 | 状态 | 副本数 | NodePort |
|------|------|--------|----------|
| dreamwiseai-website | ✅ Running | 2/2 | 30089 |

## K8s 资源

| 资源 | Namespace | 状态 |
|------|-----------|------|
| Deployment | dreamwiseai-website-prod | ✅ |
| Service (NodePort 30089) | dreamwiseai-website-prod | ✅ |
| Secret (dreamwiseai-secrets) | dreamwiseai-website-prod | ✅ |
| ResourceQuota | dreamwiseai-website-prod | ✅ |

## 数据库迁移

状态: SKIPPED（无数据库，纯静态网站）

## 访问地址

| 地址 | 状态 |
|------|------|
| http://172.18.0.2:30089/en | ✅ HTTP 200 |
| http://localhost:10006/en | ✅ HTTP 200 |
| https://dreamwiseai.com | ⏳ 待 DNS 配置 |

## Cloudflare Tunnel 配置

- Tunnel ID: c4cc4167-24f2-46c2-aa5e-628c5f67ca10
- /etc/cloudflared/config.yml 已添加 dreamwiseai.com → http://172.18.0.2:30089
- Tunnel 服务已重启 ✅

**⚠️ 待完成：Cloudflare DNS CNAME 配置**

需要在 Cloudflare Dashboard → dreamwiseai.com → DNS：
- 删除 dreamwiseai.com 的 A 记录
- 添加 CNAME: `@` → `c4cc4167-24f2-46c2-aa5e-628c5f67ca10.cfargotunnel.com`（Proxied）
- 同样添加 `www` → `c4cc4167-24f2-46c2-aa5e-628c5f67ca10.cfargotunnel.com`（Proxied）

## 回滚计划

```bash
kubectl rollout undo deployment/dreamwiseai-website -n dreamwiseai-website-prod
```

上一个稳定版本: 无（首次部署）
