# 前端项目结构

## 完整目录结构

```
dreamwiseai-website/
├── app/
│   ├── [locale]/                      # i18n 动态路由
│   │   ├── layout.tsx                 # 根布局：字体、metadata、i18n Provider
│   │   └── page.tsx                   # 主页：组合 12 个 Section
│   └── api/
│       └── contact/
│           └── route.ts               # POST handler：Resend 发邮件
│
├── components/
│   ├── sections/                      # 12 个页面区块（一对一对应 PRD）
│   │   ├── Navbar.tsx                 # 导航 + 语言切换 + 粘性滚动
│   │   ├── Hero.tsx                   # 主标题 + slogan + 双CTA + SVG背景
│   │   ├── TrustLogos.tsx             # Trusted by logo 墙
│   │   ├── Problem.tsx                # 3 个痛点卡片
│   │   ├── Services.tsx               # 3 个服务卡片
│   │   ├── HowItWorks.tsx             # 3 步流程
│   │   ├── CaseStudies.tsx            # 案例卡片
│   │   ├── Stats.tsx                  # 4 个关键数字
│   │   ├── CTA.tsx                    # Calendly + 留资表单
│   │   ├── Testimonials.tsx           # 客户证言
│   │   ├── About.tsx                  # 公司背景
│   │   └── Footer.tsx                 # 底部
│   └── ui/                            # 共享基础组件
│       ├── Button.tsx                 # 主/次按钮变体
│       ├── Card.tsx                   # 通用卡片
│       └── AnimatedSection.tsx        # Framer Motion scroll fade-in 封装
│
├── lib/
│   └── resend.ts                      # Resend 客户端初始化
│
├── messages/
│   ├── en.json                        # 英文翻译文案
│   └── zh.json                        # 中文翻译文案
│
├── public/
│   ├── og-image-en.png                # 英文 og:image
│   ├── og-image-zh.png                # 中文 og:image
│   └── logos/                         # Trust Logos 占位图
│
├── middleware.ts                       # next-intl 语言检测路由
├── i18n.ts                             # next-intl 配置
├── next.config.mjs                     # Next.js 配置（standalone 模式）
├── tailwind.config.ts
├── tsconfig.json
└── Dockerfile                          # 容器构建
```

## 关键文件说明

### middleware.ts
```typescript
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localeDetection: true   // 自动检测 Accept-Language
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
```

### next.config.mjs（K8s 必须）
```javascript
const nextConfig = {
  output: 'standalone',   // Docker 容器化必须
}
```

### messages/en.json 结构
```json
{
  "navbar": {
    "services": "Services",
    "howItWorks": "How It Works",
    "caseStudies": "Case Studies",
    "about": "About",
    "bookCall": "Book a Free Call"
  },
  "hero": {
    "title": "Your Business, Powered by AI Agents.",
    "slogan": "The Future is Agent-Driven. We'll Get You There.",
    "ctaPrimary": "Book a Free Assessment",
    "ctaSecondary": "See Case Studies"
  }
}
```
