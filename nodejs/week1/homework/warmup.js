console.log("inside warmup file");

//Circle calculator

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return this.radius * 2 * Math.PI;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(30);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());
