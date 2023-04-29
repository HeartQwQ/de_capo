---
title: 'Astro基本使用'
description: ''
sortOrder: 1
pubDate: 2023-04-10 18:00:00
categories: '前端'
length: 0
tags: ["Astro"]
---
# 什么是Astro？
Astro 是集多功能于一体的 Web 框架，用于构建快速、以内容为中心的网站。[为什么选择Astro?](https://docs.astro.build/zh-cn/concepts/why-astro/)

# 通过自动命令行来安装 Astro
前提准备：
* Node.js - v16.12.0 或更高版本。
* 文本编辑器 - 我们建议使用安装有 Astro 官方扩展的 VS Code。
* 终端（Terminal） - Astro 可以通过其命令行界面 (CLI) 访问。

## 安装
create astro 是从头开始新 Astro 项目的最快方式。它将引导你完成设置新 Astro 项目的每一步。

### 1.运行安装向导
在你的终端中运行以下命令以启动我们方便的安装向导：
```
# 使用 npm 或 pnpm 或 yarn 创建一个新项目
npm create astro@latest
pnpm create astro@latest
yarn create astro

1. Where should we create your new project? 项目名称

2. How would you like to start your new project? 你想如何开始你的新项目？
  Include sample files (recommended) 包括示例文件（推荐）
  Use blog template 使用博客模板
  Empty 空项目
初学者建议选择空项目

3. Install dependencies? (recommended) 是否安装依赖（推荐）

4. Do you plan to write TypeScript? 是否使用TS

5. Initialize a new git repository? (optional) 初始化一个新的git存储库？（可选）

此时项目已经创建完毕
```

## 2.启动Astro
Astro 带有一个内置的开发服务器，拥有项目开发所需的一切。使用你最喜欢的包管理器运行此命令并启动 Astro 开发服务器。

```
npm run dev
pnpm dev
yarn dev
```

如果一切顺利，Astro 现在应该可以在 http://localhost:3000/ 上为你的项目提供服务了！

Astro 将实时监听 src/ 目录中的文件更改，因此你在开发过程中进行更改时无需重新启动服务器。

## 接下来…
好了！你现在可以开始使用 Astro 进行构建了！ 🥳

# 基础内容

## 项目结构
你用 create astro CLI 向导所生成的新 Astro 项目中已经包括一些文件和文件夹：

* src/* - 你的项目源代码（组件、页面、样式等）。
* public/* - 你的非代码、未处理的资源（字体、图标等）。
* package.json - 项目列表。
* astro.config.mjs - Astro 配置文件（可选）。
* tsconfig.json - TypeScript 配置文件（可选）。

详细介绍请看[官网](https://docs.astro.build/zh-cn/core-concepts/project-structure/)

## 组件
Astro 组件是 Astro 项目的基础构建块。它们是纯 HTML、无需客户端运行时的模板组件。

如果懂 HTML，你就已经有足够的知识来编写你的第一个 Astro 组件了。

你可以通过文件扩展名 .astro 来创建新的 Astro 组件。

Astro 组件中**最重要的一点**是，它们在构建过程中会被渲染成 HTML。即使你在组件内运行 JavaScript 代码，它也会优先渲染HTML，将网页呈现给用户，不去加载任何JavaScript，从而加快网页首次加载速度。
