import type { APIRoute } from 'astro';

/* API路由：返回卡片数据 */
export const GET: APIRoute = () => {
  /* 定义卡片数据数组 */
  const cards = [
    {
      href: 'https://docs.astro.build/en/core-concepts/astro-components/',  /* 链接到Astro组件文档 */
      title: 'Components',  /* 卡片标题 */
      body: 'Learn how to build reusable UI with Astro components.'  /* 卡片描述 */
    },
    {
      href: 'https://docs.astro.build/en/core-concepts/routing/',  /* 链接到路由文档 */
      title: 'Routing',  /* 卡片标题 */
      body: 'Understand file-based routing and dynamic routes.'  /* 卡片描述 */
    },
    {
      href: 'https://docs.astro.build/en/guides/fonts/',  /* 链接到字体指南 */
      title: 'Typography',  /* 卡片标题 */
      body: 'Add custom fonts and improve your site typography.'  /* 卡片描述 */
    },
    {
      href: 'https://docs.astro.build/en/guides/images/',  /* 链接到图片指南 */
      title: 'Images',  /* 卡片标题 */
      body: 'Optimize and lazy-load images for better performance.'  /* 卡片描述 */
    }
  ];

  /* 返回JSON格式的卡片数据 */
  return new Response(JSON.stringify(cards), {
    status: 200,  /* HTTP状态码200表示成功 */
    headers: {
      'Content-Type': 'application/json'  /* 设置响应头为JSON格式 */
    }
  });
};

