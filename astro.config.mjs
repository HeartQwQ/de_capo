import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // 禁止默认集成在项目的每个页面上导入一个基本的 base.css 文件。
      // 手动创建 base.css 文件
      config: { applyBaseStyles: false },
    })
  ]
});