console.log("AB9");
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

// Sizing the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Paint a circle to a canvas element
context.beginPath();
context.arc(200, 200, 80, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "yellow";
context.stroke();

//Class creation time!
class Circle {
  constructor(centerX, centerY, radius, startAngle, endAngle, fillColor) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    context.beginPath(); // or it will connect all the circles
    context.arc(
      this.centerX,
      this.centerY,
      this.radius,
      this.startAngle,
      this.endAngle
    );
    context.fillStyle = this.fillColor;
    context.fill();
    context.stroke();
  }
}
const c1 = new Circle(100, 50, 20, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(200, 100, 40, 0, 2 * Math.PI, "green");
const c3 = new Circle(300, 200, 60, 0, 2 * Math.PI, "blue");
c1.draw();
c2.draw();
c3.draw();

//Now lets make art!

function randomPos() {
  return Math.floor(Math.random() * window.innerWidth);
}
function randomRadius() {
  return Math.floor(Math.random() * 100);
}
function randomColor() {
  const ran = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + ran;
}

setInterval(function () {
  const c4 = new Circle(
    randomPos(),
    randomPos(),
    randomRadius(),
    0,
    2 * Math.PI,
    randomColor()
  );
  c4.draw();
}, 1000);

// Follow the mouse - optional
window.addEventListener("mousemove", function (e) {
  const c5 = new Circle(
    e.clientX,
    e.clientY,
    randomRadius(),
    0,
    2 * Math.PI,
    randomColor()
  );
  c5.draw();
});
