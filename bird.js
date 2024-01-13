let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");
let bird = document.createElement('img');
bird.src = "images/bird1.png";
let bg = document.createElement('img');
bg.src = "images/bg.png";
let pipeBottom = document.createElement('img');
pipeBottom.src = "images/pipeBottom.png";
let pipeUp = document.createElement('img');
pipeUp.src = "images/pipeUp.png";
let fg = document.createElement('img')
fg.src = "fg.png";
let down1 = document.createElement('img')
down1.src = "images/bird1_down.png";
let up1 = document.createElement('img')
up1.src = "images/bird1_up.png";


let xPos = 50;
let yPos = 250;
let x = 5;
let y = 460;
let score = 0;
let grav= 0.3;
let change = 5;
const gap = 110;
let pipes_x = [cvs.width, cvs.width + 150];
let pipes_y = [0, -100];
document.addEventListener('keyup', function(e){
    if(e.key == ' '){
        change = 3;
    }
    else{
       
    }
    
})
function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, xPos ,yPos);
    for(i = 0; i < pipes_x.length; i++) {
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i] , pipes_y[i] + pipeUp.height + gap);
        pipes_x[i] -= 2;
    if(pipes_x[i] <= 50){
        pipes_x.push(pipes_x[pipes_x.length - 1 ] + 250);
        pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height)
    }
    if(xPos + bird.width >= pipes_x[i] && xPos <= pipes_x[i] + pipeUp.width
    && (yPos <= pipes_y[i] + pipeUp.height || yPos + bird.height >= pipes_y[i]
    + pipeUp.height + gap) || yPos +bird.height >=cvs.height - fg.height){
        pipes_x = [cvs.width];
        pipes_y = [0];
        score = 0;
        xPos = 10;
        yPos = 150;
        change = 5;

    }
    if(pipes_x[i] == 0){
        score++;
    }
}
    yPos -= change;
    change -= grav;
    ctx.drawImage(fg, 0, 396);
    ctx.fillStyle = 'purple';
    ctx.font = '24px Arial';
    ctx.fillText('score: ' + score, x, y)
    requestAnimationFrame(draw);
}
draw()


    
 

