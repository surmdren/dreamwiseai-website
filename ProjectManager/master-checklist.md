# Project Manager - Master Checklist
# 项目名称: dreamwiseai-website
# 创建时间: 2026-03-18
# 最后更新: 2026-03-19

## 进度总览

| Phase | 状态 | 完成时间 | 输出产物 |
|-------|------|----------|----------|
| Phase 1: PRD | [x] | 2026-03-18 | docs/specs/2026-03-17-website-redesign.md |
| Phase 2: 架构图 | [x] | 2026-03-18 | Architecture/ |
| Phase 3: 技术方案 | [x] | 2026-03-18 | TechSolution/ |
| Phase 4: 设计系统 | [x] | 2026-03-18 | Design/design-system.md |
| Phase 5: 页面设计 | [x] | 2026-03-18 | Design/pages/ |
| Phase 6: 开发规划 | [x] | 2026-03-18 | DevPlan/ |
| Phase 7: 基础设施 | [SKIP] | 2026-03-18 | 无数据库，K8s 配置在 Phase 12 |
| Phase 8a: 开发实现 | [x] | 2026-03-18 | 12 sections + API + i18n |
| Phase 8b: 自动巡检 | [x] | 2026-03-18 | Build ✅ |
| Phase 8c: UTM 注入 | [x] | 2026-03-18 | lib/utm.ts + lib/analytics.ts + PostHog Dashboard |
| Phase 9: 技术验收 | [x] | 2026-03-18 | QA/release-qa-report.md |
| Phase 10: UAT | [x] | 2026-03-18 | UAT/uat-report.md（14/14 通过） |
| Phase 11: 安全扫描 | [x] | 2026-03-18 | security-report/README.md |
| Phase 12: K8s 部署 | [x] | 2026-03-19 | k3s，ns: dreamwiseai-website-frontend，2/2 Running |
| Phase 12b: 冒烟测试 | [x] | 2026-03-19 | HTTP 200，Traefik Ingress |
| Phase 13: 域名映射 | [x] | 2026-03-19 | https://dreamwiseai.com ✅ cloudflared→k3s |
| Phase 14: SEO 优化 | [x] | 2026-03-18 | sitemap.ts + JSON-LD + hreflang |
| Phase 15: 监控告警 | [ ] | - | Monitoring/monitoring-report.md |
| Phase 16: CI/CD | [ ] | - | .github/workflows/ |

---

## 已完成 Phases

### [x] Phase 8a: 开发实现
- [x] 12 个页面区块全部实现（Hero/Services/CaseStudies/Stats/Testimonials/CTA 等）
- [x] /api/contact 留资表单 API（Resend，from: hello@dreamwiseai.com）
- [x] i18n 双语（EN/ZH，next-intl）

### [x] Phase 8c: UTM 注入
- [x] lib/utm.ts（first-touch 模型，localStorage 存储）
- [x] lib/analytics.ts（GA4 + PostHog 双轨）
- [x] AnalyticsProvider 注入 layout.tsx
- [x] 业务事件：hero_cta_clicked、lead_form_submitted、lead_form_error
- [x] PostHog Dashboard #1373649：dreamwiseai-website | dreamwiseai.com

### [x] Phase 10: UAT
- [x] 14/14 Playwright 场景通过（Chromium）
- [x] 报告：UAT/uat-report.md

### [x] Phase 11: 安全扫描
- [x] Next.js 升级 14.2.35（修复 Critical: Authorization Bypass）
- [x] Email HTML XSS 修复（escapeHtml）
- [x] HTTP 安全头（X-Frame-Options、CSP、X-Content-Type-Options 等）
- [x] 输入长度限制
- [x] 报告：security-report/README.md

### [x] Phase 12: K8s 部署（k3s）
- [x] 集群：k3s，节点 ysurmd，Traefik 内置 Ingress
- [x] Namespace：dreamwiseai-website-frontend（含 ResourceQuota + LimitRange）
- [x] 镜像：localhost:5000/dreamwiseai-website:utm-v2（k3s ctr import）
- [x] 2/2 pods Running

### [x] Phase 13: 域名映射
- [x] cloudflared tunnel（ID: c4cc4167）→ k3s Traefik（127.0.0.1:80）
- [x] DNS: dreamwiseai.com CNAME → tunnel
- [x] DNS: www.dreamwiseai.com CNAME → tunnel
- [x] DMARC + SPF 记录已配置
- [x] MX 修复：eforward → mx1/mx2.privateemail.com
- [x] https://dreamwiseai.com ✅

### [x] Phase 14: SEO 优化
- [x] app/sitemap.ts（动态生成，EN/ZH hreflang）
- [x] JSON-LD（Organization + WebSite）
- [x] OG / Twitter Card meta tags
- [x] robots.txt
- [x] 报告：SEO/seo-audit-report.md

---

## 待完成 Phases

### [ ] Phase 15: 监控告警
- [ ] 执行 /monitoring-setup
- [ ] Sentry 错误追踪
- [ ] UptimeRobot 可用性监控
- [ ] 告警规则（错误率/响应时间）

### [ ] Phase 16: CI/CD
- [ ] 执行 /cicd-setup
- [ ] GitHub Actions CI（PR 自动测试）
- [ ] CD Staging（Tag 触发构建+部署到 k3s）
- [ ] CD Prod（手动审批）

---

## 已知遗留问题

| 编号 | 类型 | 说明 | 优先级 |
|------|------|------|--------|
| L-01 | 安全 | Next.js 残留 High（需升级 v15.x，当前场景不触发） | 低 |
| L-02 | 安全 | HSTS 头需 Traefik 层配置 | 低 |
| L-03 | 素材 | og-image-en.png / og-image-zh.png 缺失 | 中 |
| L-04 | 配置 | NEXT_PUBLIC_GA_MEASUREMENT_ID 未填（GA4 暂未启用） | 低 |

---

## 运行日志

```
2026-03-18 - 项目初始化，Phase 1-9 完成
2026-03-18 - Phase 10 UAT 14/14 通过
2026-03-18 - Phase 11 安全扫描，5 个漏洞修复
2026-03-18 - Phase 13 域名上线，修复 MX/DMARC/SPF
2026-03-18 - Phase 8c UTM + PostHog Dashboard
2026-03-18 - Phase 14 SEO（sitemap + JSON-LD）
2026-03-19 - 从 kind 迁移到 k3s（Traefik Ingress）
2026-03-19 - k3s 权限配置（docker 组访问 containerd socket）
```
