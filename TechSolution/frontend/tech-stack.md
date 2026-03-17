# 前端技术选型

## 核心框架

**Next.js 14 (App Router)**

选择理由：
- 现有项目已基于 Next.js 14
- SSG 静态生成支持，SEO 友好
- `next/font` 优化字体加载
- Metadata API 支持双语 SEO
- `next output: standalone` 模式支持 Docker 容器化

## 完整依赖清单

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "^18",
    "react-dom": "^18",
    "next-intl": "^3.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "resend": "^3.x"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8"
  }
}
```

## 国际化：next-intl

```
中文（zh/zh-CN/zh-TW）→ /zh/
其余 → /en/（默认）
```

middleware.ts 自动检测 `Accept-Language` Header，匹配语言后路由到对应 locale。

Navbar 提供手动切换按钮，用 cookie 覆盖自动检测。

## 字体加载

```typescript
// app/[locale]/layout.tsx
import { Sora, Inter } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
```

## Calendly 集成

```typescript
// 嵌入 inline widget（无需后端）
<div
  className="calendly-inline-widget"
  data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
  style={{ minWidth: '320px', height: '700px' }}
/>
<Script src="https://assets.calendly.com/assets/external/widget.js" />
```

## 品牌色（Tailwind 配置）

```javascript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        indigo: '#1E3A8A',   // 主色
        blue: '#3B82F6',     // Accent
      }
    }
  }
}
```
