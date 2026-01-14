import edgeoneAdapter from '@edgeone/astro';  /* EdgeOne适配器，用于部署 */
import react from '@astrojs/react';           /* React集成插件 */
import vue from '@astrojs/vue';               /* Vue集成插件 */
import svelte from '@astrojs/svelte';         /* Svelte集成插件 */
import { defineConfig } from 'astro/config';  /* Astro配置定义函数 */

// https://astro.build/config  /* Astro配置文件 */
export default defineConfig({                 /* 导出Astro配置 */
  output: 'server',                           /* 设置为服务端渲染模式 */
  adapter: edgeoneAdapter(),                  /* 使用EdgeOne适配器 */
  integrations: [react(), vue(), svelte()]    /* 启用多种前端框架集成 */
});
