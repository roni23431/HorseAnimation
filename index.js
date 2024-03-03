// 获取画布元素和上下文
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 设置画布尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 马匹对象
class Horse {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = new Image();
    this.image.src = 'horse.png'; // 替换为你的马匹图片地址
    this.frameIndex = 0;
    this.frames = 4; // 马匹图片帧数
  }

  // 更新马匹位置
  update() {
    this.x += this.speed;
    if (this.x > canvas.width) {
      this.x = -100; // 从左侧重新开始
    }
  }

  // 绘制马匹
  draw() {
    const frameWidth = this.image.width / this.frames;
    ctx.drawImage(this.image, frameWidth * this.frameIndex, 0, frameWidth, this.image.height, this.x, this.y, frameWidth, this.image.height);
    this.frameIndex = (this.frameIndex + 1) % this.frames;
  }
}

// 创建马匹实例
const horse = new Horse(0, canvas.height - 150, 5);

// 动画循环
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  horse.update();
  horse.draw();
  requestAnimationFrame(animate);
}

// 开始动画
animate();
