---
title: '鼠标点击特效-爆炸'
description: ''
sortOrder: 2
pubDate: 2023-04-01 08:00:00
categories: '前端'
length: 999
tags: ["javascript","canvas"]
---
更新canvas大小
function updateSize() {
  // canvas.width是画纸的大小，画纸是浏览器窗口的两倍，提高画质
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  // canvas.style.width是画布的大小
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  // 图像放大两倍
  ctx.scale(2, 2);

  width = (canvas.width = window.innerWidth);
  height = (canvas.height = window.innerHeight);
  origin = {
    x: width / 2,
    y: height / 2
  };
  normal = {
    x: width / 2,
    y: height / 2
  };
}
  // 绘制圆
  function loop() {
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.r < 0) continue;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
      ctx.fill();
      b.update();
    }
    if (longPressed == true) {
      multiplier += 0.2;
    } else if (!longPressed && multiplier >= 0) {
      multiplier -= 0.4;
    }
    removeBall();
    requestAnimationFrame(loop);
  }