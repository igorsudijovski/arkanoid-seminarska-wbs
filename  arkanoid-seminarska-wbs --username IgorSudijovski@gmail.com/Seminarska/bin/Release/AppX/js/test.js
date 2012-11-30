var player;
var canvas;
var con;
var ball;
var base;
var map;
var timer;
var curr = 0;
var counter;
var mapstr;
var file;
var mapp = null;
function count() {
    var days_i = "000" + curr;
    curr++;
    change("minutesup", days_i.charAt(days_i.length - 1), 10);
    change("minutesdown", days_i.charAt(days_i.length - 1), 50);
    change("seconds2up", days_i.charAt(days_i.length - 2), 10);
    change("seconds2down", days_i.charAt(days_i.length - 2), 100);
    change("seconds1up", days_i.charAt(days_i.length - 3), 10);
    change("seconds1down", days_i.charAt(days_i.length - 3), 150);
    if (days_i.charAt(days_i.length - 2) == '5' && days_i.charAt(days_i.length - 1) == '9') {
        curr += 40;
    }

    counter = setTimeout(count, 1000);
}

function countEnd() {
    days_i = "000" + curr;
    change("minutesup", days_i.charAt(days_i.length - 1), 10);
    change("minutesdown", days_i.charAt(days_i.length - 1), 50);
    change("seconds2up", days_i.charAt(days_i.length - 2), 10);
    change("seconds2down", days_i.charAt(days_i.length - 2), 100);
    change("seconds1up", days_i.charAt(days_i.length - 3), 10);
    change("seconds1down", days_i.charAt(days_i.length - 3), 150);
    if (curr == player.endTime) {
        clearTimeout(counter);
        player.showGameOver(con);
        return;
    }
        
    if (days_i.charAt(days_i.length - 2) == '5' && days_i.charAt(days_i.length - 1) == '9') {
        curr += 40;
    }
    curr++;
    player.points += 5;
    player.update();
    counter = setTimeout(countEnd, 1);
}

function change(h, val, delay) {
    setTimeout(function () {
        document.getElementById(h).innerText = val;
    }, delay);
}
function init() {
    file = setInterval(getFile, 100);
    mapp = new mapTest();
    mapp.test();
    mapstr = mapp.mapstr;
    canvas = document.getElementById('myCanvas');
    con = canvas.getContext('2d');
    var odocanvas = document.getElementById('score');
    odocon = odocanvas.getContext('2d');
    canvas.height = screen.height;
    canvas.width = screen.width - 300;
    player = new Player();
    player.init(canvas.height, canvas.width, odocon);
    document.getElementById('PlayerName').innerText = player.name;
    count();
    //ball = new Ball();
    //base = new Base();
    //ball.init();
    //base.y = canvas.height * 0.9;
    //base.x = window.event.clientX;
    //map = new Map();
    //map.init(canvas.width);
    //document.onmousemove = moveBase;
   // timer = setInterval(draw, 10);
}
function draw() {
    con.clearRect(0, 0, canvas.width, canvas.height);
    player.checkBallsTouchBase();
    player.moveBalls();
    player.drawBalls(con);
    player.base.drawBase(con);
    player.ballsTouchWalls(canvas.height, canvas.width);
    player.ballsTouchElements();
    player.map.draw(con);
    player.gameOver(con,counter,curr);
    /*ball.checkTouchBase(base);
    ball.moveBall();
    ball.drawBall(con);
    base.drawBase(con);
    ball.touchWalls(canvas.height, canvas.width);
    //ball.gameOver(base.y, con, timer);
    map.touchElement(ball);
    map.draw(con);*/
}

function moveBase(e) {
    con.clearRect(player.base.x, player.base.y - 1, player.base.length, player.base.height + 2);
    player.moveBase(e.x,canvas.width);
    player.base.drawBase(con);
}

function addBall() {
    player.addBall();
}
function update() {
    player.update();
}
function getFile() {
    if (mapstr != null) {
        clearInterval(file);
    }
}