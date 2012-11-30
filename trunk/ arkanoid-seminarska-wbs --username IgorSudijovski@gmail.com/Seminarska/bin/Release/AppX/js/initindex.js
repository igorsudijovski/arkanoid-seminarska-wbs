"use strict";
var mapstr = null;
var map;
var timerfile;
function init() {
    map = new mapTest();
    map.test();
    mapstr = map.mapstr;
    timerfile = setInterval(fileRead, 50);
}
function fileRead() {
    if (mapstr != null) {
        clearInterval(timerfile);
        initdata(mapstr);
        var maps = mapstr.split("!!");
        var dataArray = [];
        for (var i = 0; i < maps.length; i++) {
            var mapname = maps[i].split(";")[0];
            dataArray.push({ title: mapname, picture: "/images/map.jpg" });
        }
        var dataList = new WinJS.Binding.List(dataArray);
        var listView = document.querySelector(".pickMap").winControl;
        listView.itemDataSource = dataList.dataSource;
        listView.layout = new WinJS.UI.ListLayout();
        listView.oniteminvoked = indexChange;
        //listView.
    }
}
function indexChange(e) {
}
