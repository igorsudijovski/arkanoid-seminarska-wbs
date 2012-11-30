function Ball() {
    this.x = window.screen.width/2;
    this.y;
    this.dx = 1;
    this.dy = 1;
    this.radius = 15;
    this.speed = 4;
    this.basicspeed = Math.sqrt(2);
    this.color = "#FF0000";
    this.treshHold = 1;
    this.again = -1;
    this.TOUCHBASE = "sounds/TouchBase.wav";
    this.init = function (left) {
        this.touchBase(Math.sqrt(2)/2, left);
    }
    this.touchWalls = function (h, w) {
        if ((this.x + this.radius + this.dx >= w) || (this.x - this.radius + this.dx <= 0)) {
            this.again = -1;
            this.touchLeftOrRightWall();
            PlaySound(this.TOUCHBASE);

        }
        if ((this.y + this.radius + this.dy >= h) || (this.y - this.radius + this.dy <= 0)) {
            this.again = -1;
            this.touchBottomOrTopWall();
            PlaySound(this.TOUCHBASE);
        }

    }
    this.gameOver = function (baseY, context,timer) {
        if (this.y >= baseY) {
            clearInterval(timer);
            document.onmousemove = null;
            context.font = "bold 100px sans-serif";
            context.fillStyle = "FFFFFF";
            context.fillText("Game Over", screen.height / 2, (screen.width * 0.8)/2);
        }

    }
    this.touchBase = function (corY, left) {
        var newspeed = this.basicspeed * this.speed;
        this.dy = corY * newspeed;
        this.dx = Math.sqrt((newspeed * newspeed) - (this.dy * this.dy));
        if (this.dy >= newspeed) this.dx = 0;
        this.dy *=-1;
        if(left){
            this.dx*=-1;
        }
        this.again = -1;
        PlaySound(this.TOUCHBASE);
    }
    this.touchLeftOrRightWall = function () {
        this.dx *= -1;
    }
    this.touchBottomOrTopWall = function () {
        this.dy *= -1;
    }
    this.checkTouchBase = function (base) {
        if (this.y + this.radius + this.dy < base.y) return false;
        if ((this.x >= base.x) && (this.x < (base.x + base.length))) {
            if (this.x + this.treshHold > ((base.x + base.length / 2)) && this.x - this.treshHold < ((base.x + base.length / 2))) {
                this.touchBase(1, true);
            } else if (this.x < ((base.x + base.length/2))) {
                corY = (2 * (this.x - base.x)) / (base.length);
                if (corY < 0.2) corY = 0.2;
                this.touchBase(corY, true);
            } else {
                corY = (2 * ((base.x + base.length) - this.x)) / (base.length);
                if (corY < 0.2) cory = 0.2;
                this.touchBase(corY, false);
            }
            return true;
        }
        return false;
    }
    this.drawBall = function (contex) {
        contex.beginPath();
        contex.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        contex.fillStyle = this.color;
        contex.fill();
        contex.closePath();
    }
    this.moveBall = function () {
        this.x += this.dx;
        this.y += this.dy;
    }
}