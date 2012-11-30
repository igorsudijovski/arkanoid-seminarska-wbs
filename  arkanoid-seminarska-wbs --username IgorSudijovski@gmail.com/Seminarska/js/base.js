function Base() {
    this.x = 0;
    this.y = 0;
    this.length = 100;
    this.height = 10;
    this.color = "#0000FF";
    this.drawBase = function (contex) {
        contex.fillStyle = this.color;
        contex.fillRect(this.x, this.y, this.length, this.height);
    }
    this.moveBase = function (x,w) {
        this.x = x - this.length / 2
        if (this.x < 0) this.x = 0;
        if (this.x + this.length > w) this.x = w - this.length;

    }
}