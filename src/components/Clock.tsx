import React from 'react';
import { useState, useEffect } from 'react';

/* React时钟组件，显示实时时间 */
export default function Clock() {
  /* 使用状态管理当前时间字符串 */
  const [time, setTime] = useState('');

  /* 更新时钟函数 - 获取当前时间并设置到状态中 */
  function updateClock () {
    const now = new Date();  /* 获取当前日期时间对象 */
    const timeStr = now.toLocaleTimeString('en-US', { hour12: false });  /* 转换为24小时制时间字符串 */
    setTime(timeStr);  /* 更新时间状态 */
    console.log(timeStr);  /* 在控制台输出时间（调试用） */
  };

  /* 使用useEffect在组件挂载时启动定时器，并在组件卸载时清理定时器 */
  useEffect(() => {
    console.log('updateClock');  /* 输出日志表明定时器已启动 */
    updateClock();  /* 组件挂载时立即更新一次时间 */
    const interval = setInterval(updateClock, 1000);  /* 设置每秒更新一次时间的定时器 */

    /* 返回清理函数，在组件卸载时清除定时器 */
    return () => clearInterval(interval);
  }, []);  /* 空依赖数组表示只在组件首次渲染时执行一次 */

  /* 渲染时间显示元素 */
  return (
    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'rgb(224, 204, 250)', fontFamily: 'monospace' }}>
        {time}  /* 显示当前时间 */
    </span>
  );
}
