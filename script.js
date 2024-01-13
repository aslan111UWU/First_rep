let cvs = document.querySelector(".canvas");
let ctx = cvs.getContext("2d");
let pikachu = new Image();
pikachu.src = 'pokemon.png'; //указываем путь к изображению
let xPos = 400; //координата Х картинки
let yPos = 300; //координата У картинки

function draw(){
    ctx.clearRect(0,0, 800, 600);
    ctx.drawImage(pikachu, xPos, yPos);
    window.requestAnimationFrame(draw);
}

window.onload = draw;

window.onkeydown = function move(event) {
    if (event.key == 'ArrowLeft') { xPos -= 10; } //сдвиг влево
    if (event.key == 'ArrowRight') { xPos += 10; } //сдвиг вправо
    if (event.key == 'ArrowUp') { yPos -= 10; } //сдвиг вверх
    if (event.key == 'ArrowDown') { yPos += 10; } //сдвиг вниз
};