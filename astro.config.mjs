import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // 手动创建 base.css 文件
    config: {
      applyBaseStyles: false
    }
  })],
  markdown: {
    remarkPlugins: [remarkToc],
  }
});