function Player() {
    this.name = "";
    this.multiple = [];
    this.points = 0;
    this.time = 0;
    this.balls = [];
    this.base;
    this.timerForTurnOff;
    this.timer = 15;
    this.map;
    this.odometar;
    this.odometarscore = 0;
    this.countTimer;
    this.endTime = 959;
    this.stopTimer = function () {
        clearInterval(this.timerForTurnOff);
        clearInterval(this.countTimer);
        clearTimeout(counter);
    }
    this.gameOver = function (context, counter,time) {
        if (time == this.endTime) {
            clearInterval(this.timerForTurnOff);
            clearInterval(this.countTimer);
            clearTimeout(counter);
            this.showGameOver(context);
        }
        var tmpmultiple = [];
        var tmpBalls = [];
        for (var i = 0 ; i < this.balls.length; i++) {
            if (this.balls[i].y < this.base.y) {
                tmpBalls.push(this.balls[i]);
                tmpmultiple.push(this.multiple[i]);
            }
        }
        this.multiple = null;
        this.multiple = tmpmultiple;
        this.balls = null;
        this.balls = tmpBalls;
        if (this.balls.length == 0) {
            clearInterval(this.timerForTurnOff);
            clearInterval(this.countTimer);
            clearTimeout(counter);
            this.showGameOver(context);
        }
        if (this.map.mapEnd()) {
            clearInterval(this.timerForTurnOff);
            clearInterval(this.countTimer);
            clearTimeout(counter);
            while (this.update());
            countEnd();
        }
    }
    this.showGameOver = function (context) {
        document.body.style.cursor = "";
        document.onmousemove = null;
        context.font = "bold 80px sans-serif";
        context.fillStyle = "#FF2222";
        context.fillText("Game Over", 100, (screen.height - 160) / 2);
        context.fillText("Your score: " + this.points, 100, screen.height / 2);
    }
    this.init = function (h,odo) {
        this.balls[0].y = h * 0.9 - this.balls[0].radius;
        this.base.y = h * 0.9;        
        this.odometar = new odometer(odo, { height: 100, digits: 5, decimals: 0, value: 0, wobbleFactor: 0.00 });
        
        //setInterval(addBall, 10000);
    }
    this.startdraw = function () {
        this.timerForTurnOff = setInterval(draw, this.timer);
        this.countTimer = setInterval(update, 50);
    }
    this.checkBallsTouchBase = function () {
        for (var i = 0; i < this.balls.length; i++) {
            if(this.balls[i].checkTouchBase(this.base)){
                this.multiple[i] = 1;
            }
        }
    }
    this.drawBalls = function (contex) {
        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].drawBall(contex);
        }
    }
    this.moveBalls = function () {
        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].moveBall();
        }
    }
    this.moveBase = function (x, w) {
        this.base.moveBase(x, w);
    }
    this.ballsTouchWalls = function (h, w) {
        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].touchWalls(h, w);
        }
    }
    this.ballsTouchElements = function () {
        for (var i = 0; i < this.balls.length; i++) {
            var point = this.map.touchElement(this.balls[i]);
            if(point > 0){
                this.points+=point * this.multiple[i];
                this.multiple[i]++;
            }
        }
    }
    this.addBall = function () {
        var ball = new Ball();
        ball.init();
        ball.x = this.balls[0].x;
        ball.y = this.balls[0].y;
        ball.dx = -this.balls[0].dx;
        ball.dy = this.balls[0].dy;
        ball.color = "#0000FF";
        this.multiple.push(1);
        this.balls.push(ball);
    }
    this.update = function () {
        if (this.odometarscore < this.points) {
            this.odometarscore+=5;
            this.odometar.setValue(this.odometarscore);
            return true;
        }
        return false;
    }
}
