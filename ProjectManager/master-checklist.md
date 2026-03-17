# Project Manager - Master Checklist
# 项目名称: dreamwiseai-website
# 创建时间: 2026-03-18

## 进度总览

| Phase | 状态 | 完成时间 | 输出产物 |
|-------|------|----------|----------|
| Phase 1: PRD | [x] | 2026-03-18 | docs/specs/2026-03-17-website-redesign.md |
| Phase 2: 架构图 | [x] | 2026-03-18 | Architecture/ |
| Phase 3: 技术方案 | [ ] | - | TechSolution/ |
| Phase 4: 设计系统 | [ ] | - | Design/design-system.md |
| Phase 5: 页面设计 | [ ] | - | Design/pages/ |
| Phase 6: 开发规划 | [ ] | - | DevPlan/ |
| Phase 7: 基础设施 | [ ] | - | infrastructure/ |
| Phase 8a: 开发实现(dev-executor) | [ ] | - | src/ + DevPlan/reports/ |
| Phase 8b: 自动巡检(dev-autopilot) | [ ] | - | DevPlan/autopilot.log |
| Phase 8c: UTM 注入 | [ ] | - | lib/utm.ts + lib/analytics.ts |
| Phase 9: 技术验收 | [ ] | - | QA/release-qa-report.md |
| Phase 10: UAT | [ ] | - | UAT/uat-report.md |
| Phase 11: 安全扫描 | [ ] | - | Security/pentest-report.md |
| Phase 12: K8s 部署 | [ ] | - | - |
| Phase 12b: 冒烟测试 | [ ] | - | QA/smoke-test-report.md |
| Phase 13: 域名映射 | [ ] | - | dreamwiseai-website.dreamwiseai.com |

---

## 详细 Checklist

### [x] Phase 1: 需求分析 → PRD
- [x] 需求文档已通过 brainstorming skill 完整梳理
- [x] 生成 docs/specs/2026-03-17-website-redesign.md（v1.5）
- [x] 包含：品牌规格、12个区块内容、非功能性需求、范围说明

### [x] Phase 2: 架构设计
- [ ] 执行 /tech-architecture
- [ ] 生成业务架构图
- [ ] 生成技术架构图
- [ ] 生成系统架构图
- [ ] 生成模块依赖图
- [ ] 生成数据流图
- [ ] 生成 API 架构图

### [ ] Phase 3: 技术方案
- [ ] 执行 /tech-solution
- [ ] 技术选型确定（前端/后端/数据库）
- [ ] 项目结构定义
- [ ] API 设计规范（Resend + Calendly）
- [ ] 部署方案
- [ ] 成本估算

### [ ] Phase 4: 设计系统（Step 1）
- [ ] 执行 /ui-ux-pro-max（设计系统规范模式）
- [ ] 色彩体系定义（Deep Indigo #1E3A8A 为主色）
- [ ] 字体方案（Sora + Inter）
- [ ] 核心组件样式定义
- [ ] 间距/圆角/阴影规范
- [ ] 输出 Design/design-system.md

### [ ] Phase 5: 页面设计（Step 2）
- [ ] 执行 /uiux-design（基于设计系统）
- [ ] 12个区块各有设计规格
- [ ] 包含 UX Pilot 提示词
- [ ] 输出到 Design/pages/

### [ ] Phase 6: 开发规划
- [ ] 执行 /dev-planner
- [ ] 生成 DevPlan/checklist.md
- [ ] 每个模块有独立 md 文档
- [ ] 模块依赖关系清晰

### [ ] Phase 7: 基础设施
- [ ] 判断是否需要（检查 TechSolution/）
- [ ] 官网为静态渲染，可能 SKIP
- [ ] 若需要：执行 /infrastructure-provisioner

### [ ] Phase 8a: 开发实现（dev-executor）
- [ ] 执行 /dev-executor 逐模块开发
- [ ] TDD：先写测试，再写代码
- [ ] 单元测试覆盖率 > 80%
- [ ] DevPlan/reports/ 测试报告生成

### [ ] Phase 8b: 自动持续开发（dev-autopilot）
- [ ] 执行 /dev-autopilot 设置 30 分钟 cron
- [ ] 所有模块 checklist 标记 [x]
- [ ] DevPlan/autopilot.log 记录运行状态

### [ ] Phase 8c: UTM 注入
- [ ] 执行 /utm-injector
- [ ] lib/utm.ts + lib/analytics.ts
- [ ] GA4 + PostHog 双轨埋点
- [ ] AARRR 核心事件注入

### [ ] Phase 9: 技术验收测试
- [ ] 执行 /release-qa
- [ ] 功能完整性验证通过
- [ ] 生成 QA/release-qa-report.md

### [ ] Phase 10: 用户验收测试
- [ ] 执行 /uat-testing
- [ ] 核心用户路径 E2E 测试通过
- [ ] 生成 UAT/uat-report.md

### [ ] Phase 11: 安全扫描
- [ ] 执行 /security-pentest
- [ ] OWASP Top 10 检查通过
- [ ] 生成 Security/pentest-report.md

### [ ] Phase 12: 部署
- [ ] 执行 /dev-deploy
- [ ] 构建成功
- [ ] 应用运行正常

### [ ] Phase 12b: 部署后冒烟测试
- [ ] 执行 /post-deploy-smoke-test
- [ ] 前端页面可正常加载
- [ ] 生成 QA/smoke-test-report.md

### [ ] Phase 13: 域名映射
- [ ] cloudflared tunnel 创建
- [ ] DNS 路由绑定 dreamwiseai.com
- [ ] https://dreamwiseai.com 可访问

---

## 阻塞记录

> 参见 ProjectManager/BLOCKED.md

无

---

## 运行日志

```
2026-03-18 - Project Manager 初始化完成
2026-03-18 - Phase 1 (PRD) 已完成（brainstorming 阶段产出）
2026-03-18 - 旧代码已清空，等待 Phase 2 开始
```
