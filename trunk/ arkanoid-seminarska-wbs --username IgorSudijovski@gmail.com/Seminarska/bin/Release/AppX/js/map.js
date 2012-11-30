function Map() {
    this.h = 30;
    this.w;
    this.space = 10;
    this.color = ["#FFFFFF", "#B2B2B2", "#8C8C8C", "#3F3F3F", "#000000"];
    this.elements = [];
    this.again = -1;
    this.mapEnd = function () {
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i][2] != 0 && this.elements[i][2] != 5) {
                return false;
            }
        }
        return true;
    }
    this.init = function (w) {
        this.w = w / 10;
        m = new mapTest();
        m.set();
        //this.elements = m.map;
        for (var i = 0; i < m.map.length; i++) {
            var x = m.map[i][0] * this.w;
            var y = m.map[i][1] * (this.h + this.space);
            this.elements.push([x,y,m.map[i][2]]);
        }
    }
    this.draw = function (contex) {
        for (var i = 0; i < this.elements.length; i++) {
            if(this.elements[i][2] != 0)
            {
                contex.fillStyle = this.color[this.elements[i][2] - 1];
                contex.fillRect(this.elements[i][0], this.elements[i][1], this.w, this.h);
            }
        }
    }
    this.touchElement = function (ball) {
        var element5 = 0;
        var i = 0;
        for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i][2] != 0) {
            //Udiranje na topceto vo kosot od plockata. Ne raboti treba da se proveri
            /*if (ball.dx > 0) {
                if (ball.dy > 0) {
                    var xradius = ball.x + ((ball.radius + ball.dx) / (Math.sqrt(2)));
                    var yradios = ball.y + ((ball.radius + ball.dy) / (Math.sqrt(2)));
                    if ((xradius >= this.elements[i][0]) && (yradios >= this.elements[i][1])) {
                        ball.touchBottomOrTopWall();
                        ball.touchLeftOrRightWall();
                        break;
                    }
                } else {
                    var xradius = ball.x + ((ball.radius + ball.dx) / (Math.sqrt(2)));
                    var yradios = ball.y - ((ball.radius - ball.dy) / (Math.sqrt(2)));
                    if ((xradius >= this.elements[i][0]) && (yradios <= this.elements[i][1] + this.h)) {
                        ball.touchBottomOrTopWall();
                        ball.touchLeftOrRightWall();
                        break;
                    }
                }
            } else {
                if (ball.dy > 0) {
                    var xradius = ball.x - ((ball.radius - ball.dx) / (Math.sqrt(2)));
                    var yradios = ball.y + ((ball.radius + ball.dy) / (Math.sqrt(2)));
                    if ((xradius <= this.elements[i][0] + this.w) && (yradios >= this.elements[i][1])) {
                        ball.touchBottomOrTopWall();
                        ball.touchLeftOrRightWall();
                        break;
                    }
                } else {
                    var xradius = ball.x - ((ball.radius - ball.dx) / (Math.sqrt(2)));
                    var yradios = ball.y - ((ball.radius - ball.dy) / (Math.sqrt(2)));
                    if ((xradius <= (this.elements[i][0] + this.w)) && (yradios <= (this.elements[i][1] + this.h))) {
                        ball.touchBottomOrTopWall();
                        ball.touchLeftOrRightWall();
                        break;
                    }
                }
            }*/

                if (((ball.y + ball.radius + ball.dy) >= this.elements[i][1]) && ((ball.y - ball.radius + ball.dy) <= (this.elements[i][1] + this.h))) {
                    if (ball.x >= this.elements[i][0] && ball.x <= (this.elements[i][0] + this.w)) {
                        if (this.elements[i][2] != 5) {
                            this.elements[i][2] -= 1;
                            if (this.elements[i][2] == 0) element5 = 15;
                            else element5 = 10;
                        }
                        if (ball.again != i) {
                            ball.touchBottomOrTopWall();
                        } else {
                            ball.touchLeftOrRightWall();
                            //ball.touchBottomOrTopWall();
                        }
                        ball.again = i;
                        break;
                    }                    
                }
                if (((ball.x + ball.radius + ball.dx) >= this.elements[i][0]) && ((ball.x - ball.radius + ball.dx) <= (this.elements[i][0] + this.w))) {
                    if (ball.y >= this.elements[i][1] && ball.y <= (this.elements[i][1] + this.h)) {
                        if (this.elements[i][2] != 5) {
                            this.elements[i][2] -= 1;
                            if (this.elements[i][2] == 0) element5 = 15;
                            else element5 = 10;
                        }
                        if (ball.again != i) {
                            ball.touchLeftOrRightWall();
                        } else {
                            ball.touchBottomOrTopWall();
                            //ball.touchLeftOrRightWall();
                        }
                        ball.again = i;
                        break;
                    }
                }
            }            
        }
        return element5;
    }
}