function loginApp() {
    document.getElementById("message").innerHTML = "";
    var btn = document.getElementById("btnSubmit");
    btn.onclick = submitLogin;
}
function submitLogin(e) {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox");
    var post = {
        user: user,
        pass:pass
    }
    WinJS.xhr({
        type: "post",
        url: host + 'signIn.php',
        data: formatParams(post),
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).done(function completed(request) {
        document.getElementById("message").innerHTML = "";
        var a = JSON.parse(request.responseText);
        if (a.error != null) {
            document.getElementById("message").innerHTML = a.error;
        }
    }, 
        function error(request) {
            document.getElementById("message").innerHTML = request.statusText;
        }, 
        function progress(request) {
            document.getElementById("message").innerHTML = "processing...";
        });

}