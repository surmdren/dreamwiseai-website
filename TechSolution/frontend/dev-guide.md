# 前端开发规范

## 组件规范

- 每个 Section 组件独立文件，放在 `components/sections/`
- 组件使用 TypeScript，props 必须定义接口
- 翻译文案全部从 `messages/` 读取，不硬编码英文/中文字符串
- 动效统一用 `AnimatedSection` 封装，不直接在业务组件里写 Framer Motion

## 样式规范

- 只用 Tailwind CSS，不写自定义 CSS（除非 Tailwind 无法实现）
- 品牌色用 `brand-indigo` / `brand-blue`（通过 tailwind.config.ts 定义）
- 响应式顺序：mobile first → `md:` → `lg:`

## 翻译规范

```typescript
// ✅ 正确
const t = useTranslations('hero')
<h1>{t('title')}</h1>

// ❌ 错误
<h1>Your Business, Powered by AI Agents.</h1>
```

## 表单提交规范

```typescript
// CTA.tsx - 表单提交
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (res.ok) setSuccess(true)
    else setError(true)
  } finally {
    setLoading(false)
  }
}
```

## 环境变量

| 变量 | 说明 | 是否暴露给前端 |
|------|------|----------------|
| `RESEND_API_KEY` | Resend 密钥 | ❌ 仅服务端 |
| `CONTACT_EMAIL` | 收件邮箱 | ❌ 仅服务端 |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly 链接 | ✅ 前端可见 |

## Git 提交规范

```
feat: add Hero section
fix: CTA form validation
style: update brand colors
chore: update dependencies
```
