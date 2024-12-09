let paddle;
let ball;

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
      this.x = mouseX - this.w / 2; // offsets it to be centered on the       mouse
    }
  };
  
  ball = {
    x: random(255), 
    y: random(255),
    radius: 20,
    speedX: random(1,3),
    speedY: random(1,3),
    
    show: function() {
      fill(0, 255, 0);
      noStroke();
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2); 
    },
    
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if(this.x - this.radius <= 0 || this.x + this.radius >= width) {
        this.speedX *= -1
      }
      
      if(this.y - this.radius <= 0) {
        this.speedY *= -1
      }
      if (this.y + this.radius >= height) {
        this.speedY *= -1;  
        this.y = height - this.radius;  
        noLoop();
      }
    }
  }
}

function draw() {
  background(220);
  paddle.update();
  paddle.show();
  ball.show();
  ball.update();
  
  if (ball.y + ball.radius >= paddle.y && ball.y + ball.radius <= paddle.y + paddle.h && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
    ball.speedY *= -1;  
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    
    ball.x = random(255);
    ball.y = random(255);
    ball.speedX = 2;
    ball.speedY = 2;

    loop();
  }
}
