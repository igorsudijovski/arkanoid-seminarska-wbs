function initdata(mapstr) {
    "use strict";
    var maps = mapstr.split("!!");
    var dataArray = [{ title: "nesto", picture: "/images/map.jpg" }

    ];
    for (var i = 0; i < maps.length; i++) {
        var mapname = maps[i].split(";")[0];
        dataArray.push({ title: mapname, picture: "/images/map.jpg" });
    }

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList,
        };
    WinJS.Namespace.define("Maps", publicMembers);

};
