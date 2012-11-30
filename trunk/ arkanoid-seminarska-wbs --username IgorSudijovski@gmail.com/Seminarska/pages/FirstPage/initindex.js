var map;
var file;
var timerfile;
var allmap = new allMaps();
var drawmap = new showMap();
var listView;
var textlevelList;
var backgroundList;
var elementList;
var ply = new Player();
var timer;
var picindex = 2;
var colorlistview;
function ElementsColor() {
    this.elemtnsImg = ["/images/pic1.jpg","/images/pic2.jpg","/images/pic3.jpg"];
    this.elemets = [["#FFD5D5", "#FF9797", "#FF2525", "#601A1A", "#301515"], ["#CACBFF", "#7375F7","#1215EC","#15175E","#050515"],["#C9FFCE","#60F56C","#00D712","#0D7716","#061608"]];
}
function Colors() {
    this.colorsImg = ["/images/blue.jpg", "/images/green.jpg", "/images/red.jpg", "/images/yellow.jpg", "/images/orange.jpg", "/images/black.jpg", "/images/white.jpg"];
    this.colors = ["#3F47CC","#23B14D","#ED1B24","#FEF200","#FE7F26","#000000", "#FFFFFF"];
}
function Levels() {
    this.levels = ['easy', 'medium', 'hard', 'very hard'];
}
function setMapFromFile() {
    Windows.Storage.KnownFolders.documentsLibrary.getFileAsync("map.gm").done(function (file) {
        //obj.mapfile = file;
        var k = Windows.Storage.FileIO.readTextAsync(file);
        k.done(function (file1) {
            //obj.map = file1;
            var maps = file1.split("!!");
            var dataArray = [];
            for (var i = 0; i < maps.length - 1; i++) {
                var mapname = maps[i].split(";")[0];
                var points = maps[i].split(";");
                var strpoints = "";
                var j = 1;
                for (j = 1; j < points.length - 2; j++) {
                    strpoints += points[j] + ";";
                }
                strpoints += points[j];
                /* var p = {
                     name: mapname,
                     kor: strpoints
                     };
 
    //get request
 
    //post request
    WinJS.xhr({
        type: "post",
        url: "http://localhost/Arkanoid/addMap.php",
        data: formatParams(p),
        headers: { "Content-type": "application/x-www-form-urlencoded" }
    });*/
                dataArray.push({ title: mapname, picture: "/images/map.jpg" });
                allmap.maps.push(strpoints);
                allmap.mapsID.push(1);
                allmap.played.push(1);
            }
            //if (sessionStorage.getItem("reload") == null || sessionStorage.getItem("reload") == "false") {
            //  sessionStorage.setItem("reload", "true");
            //.location.reload(true);
            //}
            var dataList = new WinJS.Binding.List(dataArray);
            listView = document.getElementById("pickMap").winControl;
            listView.itemDataSource = dataList.dataSource;
            listView.layout = new WinJS.UI.ListLayout();
            listView.oniteminvoked = indexChange;
            listView.onselectionchanged = indexChange;
            listView.selectionMode = WinJS.UI.SelectionMode.single;
            listView.tapBehavior = WinJS.UI.TapBehavior.directSelect;
        });
    });
}
function init() {


    //post request
    /*var p = {
        ime: "Nekoe ime"
    };

    //get request

    //post request
    WinJS.xhr({
        type: "post",
        url: "http://localhost/postTest.php",
        data: formatParams(p),
        headers: { "Content-type": "application/x-www-form-urlencoded" }
    });*/
    timer = setInterval(changepic, 3000);
    /*jQuery.getJSON('http://localhost/Arkanoid/getMaps.php', function (data) {
        var a = data;
    });*/
    jQuery.ajax({ 
        url: 'http://localhost/Arkanoid/getMaps.php', 
        dataType: 'json', 
        success: function (data) {
            var map = data.allmaps;
            var dataArray = [];
            for (var i = 0; i < map.length; i++) {
                var str = "";
                var j = 0;
                for (j = 0; j < map[i].map.length - 1; j++) {
                    str += map[i].map[j].x + "," + map[i].map[j].y + "," + map[i].map[j].level + "," + map[i].map[j].percent + ";";
                }
                str += map[i].map[j].x + "," + map[i].map[j].y + "," + map[i].map[j].level + "," + map[i].map[j].percent;
                dataArray.push({ title: map[i].mapname + " - " + map[i].played, picture: "/images/map.jpg" });
                allmap.maps.push(str);
                allmap.mapsID.push(map[i].ID);
                allmap.played.push(map[i].played);
            }
            var dataList = new WinJS.Binding.List(dataArray);
            listView = document.getElementById("pickMap").winControl;
            listView.itemDataSource = dataList.dataSource;
            listView.layout = new WinJS.UI.ListLayout();
            listView.oniteminvoked = indexChange;
            listView.onselectionchanged = indexChange;
            listView.selectionMode = WinJS.UI.SelectionMode.single;
            listView.tapBehavior = WinJS.UI.TapBehavior.directSelect;
        },
        timeout: 3000, //3 second timeout, 
        error: function(jqXHR, status, errorThrown){   //the status returned will be "timeout" 
            //do something 
            setMapFromFile();
    } 
}); 
    //getLocation(map);
    var tmp = document.getElementById("colorPick");
    colorlistview = document.getElementById("colorPick").winControl;
    var colorArray = [{ color: "/images/blue.jpg" }, { color: "/images/green.jpg" }, { color: "/images/red.jpg" }, { color: "/images/yellow.jpg" }, { color: "/images/orange.jpg" }, { color: "/images/black.jpg" }, { color: "/images/white.jpg" }];
    var datacolor = new WinJS.Binding.List(colorArray);
    listView = document.getElementById("pickMap").winControl;
    colorlistview.itemDataSource = datacolor.dataSource;
    colorlistview.layout = new WinJS.UI.ListLayout();
    colorlistview.oniteminvoked = colorball;
    colorlistview.onselectionchanged = colorball;
    colorlistview.selectionMode = WinJS.UI.SelectionMode.none;



    textlevelList = document.getElementById("pickLevel").winControl;
    var textlevel = [{ level: "easy" }, { level: "medium" }, { level: "hard" }, { level: "very hard" }];
    var datatextlevel = new WinJS.Binding.List(textlevel);
    textlevelList.itemDataSource = datatextlevel.dataSource;
    textlevelList.layout = new WinJS.UI.ListLayout();
    textlevelList.oniteminvoked = changeLevel;
    textlevelList.onselectionchanged = changeLevel;
    textlevelList.selectionMode = WinJS.UI.SelectionMode.none;
    //listView.

    backgroundList = document.getElementById("baseColor").winControl;
    backgroundList.itemDataSource = datacolor.dataSource;
    backgroundList.layout = new WinJS.UI.ListLayout();
    backgroundList.oniteminvoked = changebackground;
    backgroundList.onselectionchanged = changebackground;
    backgroundList.selectionMode = WinJS.UI.SelectionMode.none;

    var elementsColor = [{ color: "/images/pic1.jpg" }, { color: "/images/pic2.jpg" }, { color: "/images/pic3.jpg" }];
    var dataelements = new WinJS.Binding.List(elementsColor);
    elementList = document.getElementById("elementColor").winControl;
    elementList.itemDataSource = dataelements.dataSource;
    elementList.layout = new WinJS.UI.ListLayout();
    elementList.oniteminvoked = changeelement;
    elementList.onselectionchanged = changeelement;
    elementList.selectionMode = WinJS.UI.SelectionMode.none;
    var colors = new Colors();
    var elem = new ElementsColor();

    ply.colorBall = colors.colors[2];
    ply.colorBase = colors.colors[6];
    ply.colorelements = elem.elemets[0];
    ply.name = "guest";
    ply.level = "easy";

    var button = document.getElementById("play");
    button.onclick = buttonClick;

}
function formatParams(p) {
    var queryStr = "";

    for (var propertyName in p) {
        var val = p[propertyName];
        queryStr += propertyName + "=" + encodeURI(val) + "&";
    }

    return queryStr.slice(0, -1);
}
function indexChange(e) {
    var index;
    if (e.detail != null) {
        index = e.detail.itemIndex
    } else {
        index = listView.selection.getIndices()[0];
    }
    var mapForDraw = allmap.getMap(index);
    var canvas = document.getElementById('drawMap');
    var con = canvas.getContext('2d');
    drawmap.selectMap(mapForDraw);
    con.clearRect(0, 0, 300, 350);
    ply.map = allmap.maps[index];
    ply.mapID = allmap.getMapID(index);
    ply.played = allmap.getPlayed(index);
    drawmap.draw(con,ply);
}
function changeLevel(e) {
    var index;
    if (e.detail != null) {
        index = e.detail.itemIndex
    } else {
        index = colorlistview.selection.getIndices()[0];
    }
    var levels = new Levels();
    var levelcontrol = document.getElementById("levelText");
    ply.level = levels.levels[index];
    levelcontrol.innerHTML = "level: " + levels.levels[index];
}
function colorball(e) {
    var index;
    if (e.detail != null) {
        index = e.detail.itemIndex
    } else {
        index = colorlistview.selection.getIndices()[0];
    }
    var colors = new Colors();
    var levelcontrol = document.getElementById("ballColor");
    ply.colorBall = colors.colors[index];
    levelcontrol.src = colors.colorsImg[index];
}

function changebackground(e) {
    var index;
    if (e.detail != null) {
        index = e.detail.itemIndex
    } else {
        index = colorlistview.selection.getIndices()[0];
    }
    var colors = new Colors();
    var levelcontrol = document.getElementById("baseImg");
    ply.colorBase = colors.colors[index];
    levelcontrol.src = colors.colorsImg[index];
}
function changeelement(e) {
    var index;
    if (e.detail != null) {
        index = e.detail.itemIndex
    } else {
        index = colorlistview.selection.getIndices()[0];
    }
    var elements = new ElementsColor();
    var levelcontrol = document.getElementById("elementImg");
    ply.colorelements = elements.elemets[index];
    levelcontrol.src = elements.elemtnsImg[index];
    var canvas = document.getElementById('drawMap');
    var con = canvas.getContext('2d');
    if (drawmap.elements == null) {
        var mapForDraw = allmap.getMap(0);
        drawmap.selectMap(mapForDraw);
    }
    drawmap.draw(con, ply);
}
function buttonClick() {
    ply.name = document.getElementById("playername").value;
    if (ply.name == "") ply.name = "Guest";
    if (ply.map == null) {
        ply.map = allmap.maps[0];
        ply.mapID = allmap.getMapID(0);
        ply.played = allmap.getPlayed(0);
    }
    sessionStorage.setItem("player", ply.string());
    clearInterval(timer);
    window.location.href = "../../game.html";
}
function changepic() {
    document.getElementById("middlePic").src = "/images/index" + picindex + ".jpg";
    picindex++;
    if (picindex == 4) {
        picindex = 1;
    }
}

