<script lang="ts">
  /* 定义Svelte卡片组件的属性接口 */
  interface Props {
    title: string;  /* 卡片标题 */
    body: string;   /* 卡片描述文本 */
    href: string;   /* 链接地址 */
  }

  /* 使用$props()获取传递给组件的属性 */
  let { title, body, href }: Props = $props();
</script>

<li class="link-card">  /* 卡片容器列表项 */
  <a href={href}>  /* 包含链接的卡片 */
    <h2>  /* 卡片标题 */
      {title}  /* 显示传入的标题 */
      <span>&rarr;</span>  /* 右箭头图标 */
    </h2>
    <p>{body}</p>  /* 卡片描述文本 */
  </a>
</li>
