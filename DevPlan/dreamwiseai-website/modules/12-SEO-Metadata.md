# 模块 12 — SEO & Metadata

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Frontend |
| 优先级 | P0 |
| 预估工时 | 2h |
| 依赖 | 模块 03, 11 |

## 开发步骤

### Step 1: app/[locale]/layout.tsx 完整 Metadata

```typescript
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'DreamWise AI' }],
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: `https://dreamwiseai.com/${locale}`,
      siteName: 'DreamWise AI',
      title: t('title'),
      description: t('description'),
      images: [{
        url: `https://dreamwiseai.com/og-image-${locale}.png`,
        width: 1200,
        height: 630,
        alt: 'DreamWise AI',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`https://dreamwiseai.com/og-image-${locale}.png`],
    },
    alternates: {
      canonical: `https://dreamwiseai.com/${locale}`,
      languages: {
        'en': 'https://dreamwiseai.com/en',
        'zh': 'https://dreamwiseai.com/zh',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
```

### Step 2: messages 中添加 meta 命名空间

```json
// en.json
"meta": {
  "title": "DreamWise AI — AI Agent Consulting for SMEs",
  "description": "We help small and medium businesses become agent-driven. Custom AI agent development, readiness assessment, and ongoing optimization.",
  "keywords": "AI agent consulting, AI transformation, SME AI, business automation, AI agents"
}

// zh.json
"meta": {
  "title": "DreamWise AI — 专注中小企业的 AI 智能体咨询",
  "description": "我们帮助中小企业实现 AI 智能体驱动转型。提供 AI 就绪评估、定制智能体开发和持续运营优化服务。",
  "keywords": "AI智能体咨询, AI转型, 中小企业AI, 业务自动化, 人工智能"
}
```

### Step 3: public/robots.txt

```
User-agent: *
Allow: /

Sitemap: https://dreamwiseai.com/sitemap.xml
```

### Step 4: app/sitemap.ts

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dreamwiseai.com/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          zh: 'https://dreamwiseai.com/zh',
        },
      },
    },
    {
      url: 'https://dreamwiseai.com/zh',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
```

### Step 5: og:image 占位

```bash
# 在 public/ 目录创建占位 og:image
# 尺寸：1200x630px
# 内容：Logo + Slogan + 品牌色背景
# 文件：public/og-image-en.png, public/og-image-zh.png
# 初期可用简单设计工具生成
```

## 验收标准

- 浏览器 title 标签显示正确（中英文各一套）
- og:image URL 可访问
- hreflang 在 HTML head 中正确生成
- sitemap.xml 可访问（/sitemap.xml）
- robots.txt 可访问
- Lighthouse SEO 分数 ≥ 90
