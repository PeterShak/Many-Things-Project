let paddle;

function setup() {
  createCanvas(400, 400);
  
  paddle = {
    x: 50,
    y: 350,
    w: 70,
    h: 10,
    
    show: function() {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    },
    
    update: function() {
      this.x = mouseX - this.w / 2;
    }
  };
}
function draw() {
  background(220);
  paddle.update();
  paddle.show();
}
