# 模块 04 — 联系表单 API

## 模块概述

| 属性 | 值 |
|------|-----|
| 类型 | Backend |
| 优先级 | P0 |
| 预估工时 | 2h |
| 依赖 | 模块 01 |

## 功能清单

1. POST /api/contact — 接收表单数据
2. 服务端字段验证
3. Resend 发送邮件通知
4. 标准化错误响应

## 开发步骤

### Step 1: lib/resend.ts

```typescript
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)
```

### Step 2: app/api/contact/route.ts

```typescript
import { resend } from '@/lib/resend'
import { NextRequest } from 'next/server'

interface ContactFormData {
  name: string
  company: string
  email: string
  challenge?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, company, email, challenge } = body

    // 服务端验证
    if (!name?.trim() || !company?.trim() || !email?.trim()) {
      return Response.json(
        { error: 'Missing required fields: name, company, email' },
        { status: 400 }
      )
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // 发送邮件
    const { error } = await resend.emails.send({
      from: 'DreamWise AI Website <noreply@dreamwiseai.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Lead: ${name} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E3A8A;">New Lead from DreamWise AI Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px; font-weight: bold;">Company:</td>
              <td style="padding: 8px;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${challenge ? `
            <tr style="background: #f8fafc;">
              <td style="padding: 8px; font-weight: bold;">Challenge:</td>
              <td style="padding: 8px;">${challenge}</td>
            </tr>
            ` : ''}
          </table>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })

  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Step 3: 环境变量

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=consulting@dreamwiseai.com
```

## API 测试用例

```typescript
// 手动测试（curl）

// ✅ 成功提交
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","company":"Test Co","email":"test@example.com","challenge":"AI adoption"}'
// 期望：200 {"success":true}

// ❌ 缺少必填字段
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
// 期望：400 {"error":"Missing required fields..."}

// ❌ 无效邮箱
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","company":"Co","email":"invalid-email"}'
// 期望：400 {"error":"Invalid email format"}
```

## 验收标准

- POST /api/contact 成功返回 200 `{success: true}`
- 缺少必填字段返回 400
- 无效邮箱返回 400
- RESEND_API_KEY 未配置时不崩溃（开发环境 graceful 处理）
- 邮件成功送达 CONTACT_EMAIL
