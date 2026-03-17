# API 设计规范

## 端点总览

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/contact` | POST | 留资表单：接收数据，通过 Resend 发送邮件 |

---

## POST /api/contact

### 请求

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "string (required)",
  "company": "string (required)",
  "email": "string (required, email format)",
  "challenge": "string (optional)"
}
```

### 响应

**成功 200:**
```json
{ "success": true }
```

**验证失败 400:**
```json
{ "error": "Missing required fields" }
```

**服务端错误 500:**
```json
{ "error": "Failed to send email" }
```

### 实现

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, company, email, challenge } = await request.json()

  if (!name || !company || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'DreamWise AI <noreply@dreamwiseai.com>',
    to: process.env.CONTACT_EMAIL!,
    subject: `New Lead: ${name} from ${company}`,
    html: `
      <h2>New Lead from DreamWise AI Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Challenge:</strong> ${challenge || 'Not specified'}</p>
    `
  })

  if (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return Response.json({ success: true })
}
```

### 安全措施

- 服务端验证所有必填字段
- `RESEND_API_KEY` 仅在服务端使用，不暴露给客户端
- 后续可加 rate limiting（防止垃圾提交）
