# UTM Injector 验证报告

生成时间: 2026-03-18
项目: dreamwiseai-website

## 网络连通性
- PostHog Capture API: ✅ 200 OK
- 测试事件 distinct_id: utm_verify_1773827271

## 事件接收确认
- utm_injector_verification: ✅ 已确认（count=1）

## 代码注入统计
- trackEvent 调用总数: 4
- 注入文件数: 2（CTA.tsx、Hero.tsx）

### 覆盖事件清单
| 优先级 | 事件名 | 触发位置 |
|--------|--------|---------|
| P0 | `lead_form_submitted` | CTA.tsx 表单提交成功 |
| P0 | `lead_form_error` | CTA.tsx 表单提交失败 |
| P1 | `hero_cta_clicked` | Hero.tsx CTA 按钮点击 |
| P1 | `$pageview` | PostHog 自动捕获 |

## PostHog Dashboard
- Dashboard ID: 1373649
- 域名过滤: dreamwiseai.com
- 访问链接: https://us.i.posthog.com/project/323381/dashboard/1373649
- 包含 Insights: UTM 来源分布、每日 PV、CTA→留资漏斗、用户回访率
