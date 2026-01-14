import type { APIRoute } from 'astro';

/* API路由：返回页面描述信息 */
export const GET: APIRoute = () => {
  /* 定义描述数据对象 */
  const description = {
    title: 'Interactive API Demo',  /* 简单标题文本 */
    titleHtml: '<span class="text-gradient">API Demo</span>',  /* HTML格式的标题，带渐变样式 */
    text: 'This page loads data dynamically from API endpoints. Content is fetched server-side and rendered before sending to your browser.',  /* 页面说明文本 */
    code: 'View the API endpoints in <code>src/pages/api</code> directory'  /* 代码相关信息 */
  };

  /* 返回JSON格式的描述数据 */
  return new Response(JSON.stringify(description), {
    status: 200,  /* HTTP状态码200表示成功 */
    headers: {
      'Content-Type': 'application/json'  /* 设置响应头为JSON格式 */
    }
  });
};

