# Architecture — DreamWise AI 官网

## 目的

本架构规范描述 DreamWise AI 官网的技术架构，供技术评审、开发实施和后续演进参考。

## 适用场景

- 开发团队技术评审
- 技术选型决策参考
- 新成员上手理解系统结构

## 阅读顺序

1. **Architecture.md** — 完整架构说明，包含所有决策和设计意图
2. **diagrams/01-business-architecture.mmd** — 业务域划分
3. **diagrams/02-technical-architecture.mmd** — 技术栈与部署拓扑
4. **diagrams/03-system-architecture.mmd** — 系统边界与交互
5. **diagrams/04-module-dependencies.mmd** — 前端模块依赖
6. **diagrams/05-data-flow.mmd** — 关键数据流（留资/预约）
7. **diagrams/06-api-architecture.mmd** — API 能力暴露

## 文档与图的关系

- **Architecture.md** 表达设计意图，解释"为什么"
- **diagrams/*.mmd** 表达结构事实，展示"是什么"
- 两者互补，不重复

## 架构变更原则

- 变更前先更新 Architecture.md 中的 ADR
- 架构图随代码同步更新
- 重大变更需评审确认
