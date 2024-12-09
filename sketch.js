let paddle;
let balls = [];

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 10; i++) {
    balls.push(createBall()); // Push a new ball into the balls array
  }

  
  paddle = {
    x: 50,
    y: 350,
    w: 275,
    h: 30,
    
    show: function() {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    },
    
    update: function() {
      this.x = mouseX - this.w / 2; // offsets it to be centered on the       mouse
    }
  };
}
function draw() {
  background(220);
  paddle.update();
  paddle.show();
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();

    if (balls[i].y + balls[i].radius >= paddle.y && balls[i].y + balls[i].radius <= paddle.y + paddle.h && balls[i].x >= paddle.x && balls[i].x <= paddle.x + paddle.w) {
      balls[i].speedY *= -1;
    }
  }
}

function createBall() {
  return {
    x: random(width),
    y: random(height / 2),  
    radius: 20,
    speedX: random(1, 3),
    speedY: random(1, 3),
    
    show: function() {
      fill(0, 255, 0);
      noStroke();
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    },
    
    update: function() {
      this.speedX *= 1.001
      this.speedy *= 1.001

      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
        this.speedX *= -1;
      }
      
      if(this.y - this.radius <= 0) {
        this.speedY *= -1;
      }
      
      if (this.y + this.radius >= height) {
        this.speedY *= -1;  
        this.y = height - this.radius;  
        
        noLoop();  
      }
    }
  };
}

function keyPressed() {
  if (keyCode === ENTER) {
    balls = []; 
    
    for (let i = 0; i < 10; i++) {
      balls.push(createBall()); 
    }

    loop(); 
  }
}
