function top10() {
    document.getElementById("refreshbtn").onclick = refresh;
    for (var i = 0; i < 10; i++) {
        document.getElementById("top" + (i + 1) + "p").innerHTML = "";
        document.getElementById("top" + (i + 1) + "pp").innerHTML = "";
    }
    jQuery.getJSON(host + 'getTop10.php', function (data) {
        for (var i = 0; i < data.length; i++) {
            document.getElementById("top" + (i + 1) + "p").innerHTML = data[i].user;
            document.getElementById("top" + (i + 1) + "pp").innerHTML = data[i].score;
        }
    });   
}