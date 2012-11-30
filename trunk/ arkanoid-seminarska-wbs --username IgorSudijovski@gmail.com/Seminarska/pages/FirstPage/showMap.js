function allMaps() {
    this.maps = [];
    this.mapsID = [];
    this.played = [];
    this.getMap = function (index) {
        if (this.maps.length == 0) return;
        var str = this.maps[index];
        var points = str.split(";");
        var map = [];
        for (var i = 0; i < points.length; i++) {
            var items = points[i].split(",");
            map.push([parseInt(items[0]), parseInt(items[1]), parseInt(items[2])]);
        }
        return map;
    }
    this.getMapID = function (index) {
        return this.mapsID[index];
    }
    this.getPlayed = function (index) {
        return this.played[index];
    }
}

function showMap() {
    this.elements;
    this.selectMap = function (map) {
        this.elements = map;
    }
    this.draw = function (contex,ply) {
        var w = 30;
        var s = 3;
        var h = 10;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i][2] != 0) {
                var x = this.elements[i][0] * w;
                var y = this.elements[i][1] * (s + h);
                contex.fillStyle = ply.colorelements[this.elements[i][2] - 1];
                contex.fillRect(x, y, w, h);
            }
        }
    }
}
function Player() {
    this.map;
    this.colorBall;
    this.colorelements;
    this.name;
    this.colorBase;
    this.level;
    this.mapID;
    this.played;
    this.string = function () {
        var str = "";
        str += this.map + "!!";
        str += this.colorBall + "!!";
        var i;
        for (i = 0; i < this.colorelements.length - 1; i++) {
            str += this.colorelements[i] + ",";
        }
        str += this.colorelements[i] + "!!";
        str += this.name + "!!";
        str += this.colorBase + "!!";
        str += this.level + "!!";
        str += this.mapID + "!!";
        str += this.played;
        return str;
    }
}