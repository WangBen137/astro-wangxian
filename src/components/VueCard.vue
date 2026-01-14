<template>
  <li class="link-card">  <!-- 卡片容器列表项 -->
    <a :href="href">  <!-- 包含链接的卡片 -->
      <h2>  <!-- 卡片标题 -->
        {{ title }}  <!-- 显示传入的标题 -->
        <span>&rarr;</span>  <!-- 右箭头图标 -->
      </h2>
      <p>{{ body }}</p>  <!-- 卡片描述文本 -->
    </a>
  </li>
</template>

<script setup lang="ts">
/* 定义Vue卡片组件的属性接口 */
interface Props {
  title: string;  /* 卡片标题 */
  body: string;   /* 卡片描述文本 */
  href: string;   /* 链接地址 */
}

/* 定义组件的props */
defineProps<Props>();
</script>
