import React from 'react';

/* 定义React卡片组件的属性接口 */
interface ReactCardProps {
  title: string;  /* 卡片标题 */
  body: string;   /* 卡片描述文本 */
  href: string;   /* 链接地址 */
}

/* React实现的卡片组件 */
export default function ReactCard({ title, body, href }: ReactCardProps) {
  return (
    <li className="link-card">  /* 卡片容器列表项 */
      <a href={href}>  /* 包含链接的卡片 */
        <h2>  /* 卡片标题 */
          {title}  /* 显示传入的标题 */
          <span>&rarr;</span>  /* 右箭头图标 */
        </h2>
        <p>{body}</p>  /* 卡片描述文本 */
      </a>
    </li>
  );
}
