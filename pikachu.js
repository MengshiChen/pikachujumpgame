class Pikachu {
constructor() {
  this.r = 100;
  this.x = 50;
  this.y = height - this.r;
  this.vy = 0;
  this.gravity = 2.5;
}

jump() {
  if (this.y == height - this.r) {
    this.vy = -50;
  }
}

hits(pocky) {
  let x1 = this.x + this.r * 0.5;
  let y1 = this.y + this.r * 0.5;
  let x2 = pocky.x + pocky.r * 0.5;
  let y2 = pocky.y + pocky.r * 0.5;
  return collideCircleCircle(x1, y1, this.r, x2, y2, pocky.r);
}

move() {
  this.y += this.vy;
  this.vy += this.gravity;
  this.y = constrain(this.y, 0, height - this.r);
}

show() {
  image(uImg, this.x, this.y, this.r, this.r);

}
}
