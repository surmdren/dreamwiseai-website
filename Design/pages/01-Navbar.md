# Navbar 设计规格

## UX Pilot Prompt

### Desktop (1440px)
A sticky navigation bar for an AI consulting company website. Clean white background with subtle shadow when scrolled. Left: text logo "DreamWise AI" in Deep Indigo (#1E3A8A), bold Sora font. Center: nav links "Services / How It Works / Case Studies / About" in slate-600, 15px Inter medium. Right: language toggle "EN | 中文" text button + primary CTA button "Book a Free Call" in Deep Indigo background, white text, rounded-lg. On scroll: background transitions from transparent to white with shadow-lg. Minimal, professional.

### Mobile (375px)
Hamburger menu icon on right. Logo on left. CTA button hidden. Menu opens as full-width dropdown overlay with all nav links stacked vertically. Language toggle at bottom of dropdown.

---

## 详细设计规格

### 页面信息
| 属性 | 值 |
|------|-----|
| 组件名 | Navbar |
| 类型 | 固定顶部导航 |
| 高度 | 64px (h-16) |
| z-index | 50 |

### 布局结构
```
[Logo]          [Services | How It Works | Case Studies | About]    [EN|中文] [Book a Free Call]
←─────────────────────────────── max-w-7xl ──────────────────────────────────→
```

### 组件清单
| 组件 | 类型 | 状态 | 交互说明 |
|------|------|------|----------|
| Logo | Text | - | 点击返回顶部 |
| Nav Links | Link | Default/Hover/Active | hover: text-blue-900 + bg-blue-50，点击平滑滚动到对应 Section |
| Language Toggle | Button | EN active / 中文 active | 切换语言，cookie 持久化 |
| Book a Free Call | Button Primary | Default/Hover | 点击滚动到 CTA Section |
| Hamburger | Icon Button | Closed/Open | Mobile 展开/收起菜单 |

### 滚动行为
```
初始（scrollY = 0）：bg-transparent
滚动后（scrollY > 20）：bg-white/95 backdrop-blur-sm shadow-lg
transition: all 300ms ease
```

### 文案对照表
| 元素 | 英文 (en) | 中文 (zh) |
|------|-----------|-----------|
| Logo | DreamWise AI | DreamWise AI |
| Nav: Services | Services | 服务 |
| Nav: How It Works | How It Works | 工作方式 |
| Nav: Case Studies | Case Studies | 案例 |
| Nav: About | About | 关于我们 |
| CTA Button | Book a Free Call | 预约免费咨询 |
| Lang Toggle | EN \| 中文 | EN \| 中文 |

### 响应式断点
| 断点 | 布局 |
|------|------|
| Desktop (≥1024px) | 横向展开，所有元素可见 |
| Mobile (<1024px) | Logo + Hamburger，其余隐藏在菜单中 |
