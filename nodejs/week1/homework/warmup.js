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
    return Math.round(this.radius * 2 * Math.PI);
  }
  getArea() {
    return Math.round(Math.pow(this.radius, 2) * Math.PI);
  }
}

const circle = new Circle(50);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());
