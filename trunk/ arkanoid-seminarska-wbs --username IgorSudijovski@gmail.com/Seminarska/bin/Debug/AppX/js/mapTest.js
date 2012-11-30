function mapTest(map) {
    this.h;
    this.map = [];
    this.mapstr;
    this.generateRandom = function () {
        var randomnumber = Math.floor(Math.random() * 6);
        return randomnumber;
    }
    this.set = function () {
        for (var i = 0; i < 10; i += 2) {
            for (var j = 0; j < 10; j += 2) {
                var ran = this.generateRandom();
                var element = [i, j, ran];
                this.map.push(element);
            }
        }
        for (var i = 1; i < 10; i += 2) {
            for (var j = 1; j < 10; j += 2) {
                var ran = this.generateRandom();
                var element = [i, j, ran];
                this.map.push(element);
            }
        }
    }
    this.saveInFile = function () {
        var sem;
        Windows.Storage.KnownFolders.documentsLibrary.getFileAsync("map.gm", Windows.Storage.CreationCollisionOption.replaceExisting).then(function (file) {
            sem = file;
        });
        var str = "";
        for (var i = 0; i < 5; i++) {
            this.map = null;
            this.map = [];
            this.set();
            str += "map" + i + ";";
            for (var j = 0; j < this.map.length; j++) {
                str += this.map[j][0] + "," + this.map[j][1] + "," + this.map[j][2] + ";";
            }
            str += "!!";
        }
        Windows.Storage.FileIO.appendTextAsync(sem, str);
    }
    this.test = function () {
        var map = null;
        var mapstr = null;

        Windows.Storage.KnownFolders.documentsLibrary.getFileAsync("map.gm").done(function (file) {
            map = file;
        });

        var k = Windows.Storage.FileIO.readTextAsync(map);
        k.done(function (file) {
            this.mapstr = file;
        }, function (error) {
            this.mapstr = error;
        }, function (progres) {
            this.mapstr = progres;
        });
    }
}