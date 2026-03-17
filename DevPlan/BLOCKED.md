# BLOCKED — 需要用户提供的信息

## [2026-03-18] Resend 邮件服务配置

**需要提供的信息：**

| 变量名 | 说明 | 获取方式 |
|--------|------|----------|
| `RESEND_API_KEY` | Resend API 密钥 | 注册 resend.com → Settings → API Keys |
| `CONTACT_EMAIL` | 接收询单的邮箱 | 你的邮箱（如 consulting@dreamwiseai.com） |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly 预约链接 | 注册 calendly.com → 创建事件 → 复制链接 |

**解除阻塞：**
1. 复制 `.env.local.example` 为 `.env.local`
2. 填入真实值
3. 表单提交功能即可正常工作

## [2026-03-18] og:image 图片

**需要：** 创建 `public/og-image-en.png` 和 `public/og-image-zh.png`（1200×630px）

**建议：** 用 Figma 或 Canva 创建，内容：DreamWise AI Logo + Slogan + 品牌色背景
