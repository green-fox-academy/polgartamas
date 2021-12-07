const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

function drawLine(x1: number, y1: number, x2: number, y2: number): void {
  ctx.moveTo(x1, y1);
  ctx.strokeStyle = 'green';
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
for (let i: number = 0; i < 15; i++) {
  const spaceBetweenLines: number = 20;
  drawLine(0 + i * spaceBetweenLines, 300, 300, 280 - i * spaceBetweenLines);
  drawLine(300, 0 + i * spaceBetweenLines, 320 + i * spaceBetweenLines, 300);
  drawLine(0 + i * spaceBetweenLines, 300, 300, 320 + i * spaceBetweenLines);
  drawLine(300, 320 + i * spaceBetweenLines, 600 - i * spaceBetweenLines, 300);
}
