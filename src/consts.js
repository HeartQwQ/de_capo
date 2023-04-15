// 全局数据配置文件

// 网站名称
export const SITE_TITLE = "De Capo"
// 网站描述
export const SITE_DESCRIPTION = "为世界上的美好而战！"
// 用户名称
export const Author = "无心"
// 用户座右铭
export const Motto = "为世界上的美好而战！"

// export const articleParameters = {
//   layout: '@/layouts/ArticleLayout.astro',
//   title: '关于本网站',
//   pubDate: "2023-04-01",
//   description: 'This is the first post of my new Astro blog.',
//   author: '无心',
//   tags: ["astro", "blogging", "learning in public"],
//   topping: true,
// }


// 网站导航链接
export const linkList = [
  {
    name: '首页',
    path: '/',
    icon: "icon-chengbao",
  },
  {
    name: '关于',
    path: '/about',
    icon: "icon-wode",
  },
  {
    name: '文章',
    path: '/article',
    icon: "icon-feather",
  },
  {
    name: '分类',
    path: '/categories',
    icon: "icon-wode",
  },
  {
    name: '标签',
    path: '/tags',
    icon: "icon-wode",
  },
]