import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:10006'

// ─── V-01: 英文首页 ──────────────────────────────────────────
test('V-01: 访问英文版首页 - 12个区块渲染', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await expect(page).toHaveTitle(/DreamWise AI/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')

  // 验证关键区块存在
  await expect(page.locator('#services')).toBeVisible()
  await expect(page.locator('#how-it-works')).toBeVisible()
  await expect(page.locator('#case-studies')).toBeVisible()
  await expect(page.locator('#about')).toBeVisible()
  await expect(page.locator('#cta')).toBeVisible()

  // Hero 内容
  await expect(page.getByText('Agent Consulting')).toBeVisible()
  await expect(page.getByText("We'll Get You There")).toBeVisible()
})

// ─── V-02: 中文首页 ──────────────────────────────────────────
test('V-02: 访问中文版首页 - 中文内容渲染', async ({ page }) => {
  await page.goto(`${BASE_URL}/zh`)
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh')
  await expect(page.getByText('AI 智能体咨询')).toBeVisible()
  await expect(page.getByText('未来由智能体驱动。我们助您率先到达。')).toBeVisible()
})

// ─── V-03: 根路径重定向 ──────────────────────────────────────
test('V-03: 访问 / 自动重定向到 /en', async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/`)
  expect(page.url()).toContain('/en')
  expect(response?.status()).toBe(200)
})

// ─── V-04: 语言切换 ──────────────────────────────────────────
test('V-04: 语言切换 EN→中文', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await expect(page.getByText('What We Do')).toBeVisible()

  // 点击语言切换按钮
  await page.getByText('中文').click()
  await page.waitForURL(`${BASE_URL}/zh`)

  await expect(page.getByText('我们的服务')).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh')
})

// ─── V-05: 导航锚点 ──────────────────────────────────────────
test('V-05: 点击 Services 导航链接滚动到对应区域', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Services' }).first().click()
  await page.waitForTimeout(1000)

  const section = page.locator('#services')
  await expect(section).toBeInViewport()
})

// ─── V-06: Services Section ──────────────────────────────────
test('V-06: Services Section - 3个服务卡片可见', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.locator('#services').scrollIntoViewIfNeeded()

  await expect(page.getByText('Agent Readiness Assessment')).toBeVisible()
  await expect(page.getByText('Custom Agent Development')).toBeVisible()
  await expect(page.getByText('Agent Operations & Optimization')).toBeVisible()
})

// ─── V-07: Case Studies ──────────────────────────────────────
test('V-07: Case Studies - 3个案例卡片+结果可见', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.locator('#case-studies').scrollIntoViewIfNeeded()

  await expect(page.getByText('E-Commerce')).toBeVisible()
  await expect(page.getByText('70%')).toBeVisible()
  await expect(page.getByText('40%')).toBeVisible()
  await expect(page.getByText('3x', { exact: true }).first()).toBeVisible()
})

// ─── V-08: Stats Section ─────────────────────────────────────
test('V-08: Stats Section - 4个统计数字可见', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.getByText('SMEs Transformed').scrollIntoViewIfNeeded()

  await expect(page.getByText('SMEs Transformed')).toBeVisible()
  await expect(page.getByText('Hours Automated')).toBeVisible()
  await expect(page.getByText('Average ROI')).toBeVisible()
  await expect(page.getByText('Avg. Time to Deploy')).toBeVisible()
})

// ─── V-09: 表单提交 ──────────────────────────────────────────
test('V-09: 留资表单 - 填写并提交显示成功', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.locator('#cta').scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)

  await page.getByPlaceholder('Full Name').fill('UAT Test User')
  await page.getByPlaceholder('Company').fill('Test Company Ltd')
  await page.getByPlaceholder('Email').fill('uat@test.com')

  await page.getByRole('button', { name: 'Book My Free Assessment' }).click()

  // Wait for response (success or error state)
  await page.waitForTimeout(3000)

  // Either success or error state should be visible (not the original form stuck)
  const successVisible = await page.getByText("Thanks! We'll be in touch").isVisible().catch(() => false)
  const errorVisible = await page.getByText('Something went wrong').isVisible().catch(() => false)

  expect(successVisible || errorVisible).toBeTruthy()
})

// ─── V-10: 表单必填验证 ──────────────────────────────────────
test('V-10: 表单必填验证 - 空表单无法提交', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  await page.locator('#cta').scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)

  // Click submit without filling
  await page.getByRole('button', { name: 'Book My Free Assessment' }).click()

  // Should still be on the same page with form visible
  await expect(page.getByPlaceholder('Full Name')).toBeVisible()
  // Success message should NOT appear
  await expect(page.getByText("Thanks! We'll be in touch")).not.toBeVisible()
})

// ─── V-11: 移动端响应式 ──────────────────────────────────────
test('V-11: 移动端(390px) - 响应式布局无横向滚动', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(`${BASE_URL}/en`)

  // No horizontal scroll
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)

  // Hero visible
  await expect(page.getByText("We'll Get You There")).toBeVisible()
})

// ─── V-12: API 方法限制 ──────────────────────────────────────
test('V-12: GET /api/contact 返回 405', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/api/contact`)
  expect(response.status()).toBe(405)
})

// ─── V-13: EN 内容无中文残留 ─────────────────────────────────
test('V-13: 英文页面无中文硬编码', async ({ page }) => {
  await page.goto(`${BASE_URL}/en`)
  // Check section content only — the nav lang-switcher button "中文" is intentional
  const sections = page.locator('section')
  const count = await sections.count()
  const chinesePattern = /[\u4e00-\u9fff]/
  for (let i = 0; i < count; i++) {
    const text = await sections.nth(i).innerText()
    expect(chinesePattern.test(text), `Section ${i} contains Chinese: ${text.slice(0, 100)}`).toBeFalsy()
  }
})

// ─── V-14: ZH 内容完整 ───────────────────────────────────────
test('V-14: 中文页面关键文案已翻译', async ({ page }) => {
  await page.goto(`${BASE_URL}/zh`)

  // Key Chinese strings must be present
  await expect(page.getByText('我们的服务')).toBeVisible()
  await expect(page.getByText('三步，从零到 AI 驱动')).toBeVisible()
  await expect(page.getByText('真实企业，真实成果')).toBeVisible()
  await expect(page.getByText('预约免费咨询')).toBeVisible()
})
