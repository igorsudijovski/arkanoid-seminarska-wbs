function registerApp() {
    document.getElementById("messageregister").innerHTML = "";
    document.getElementById("userregister").value = "";
    document.getElementById("password1register").value = "";
    document.getElementById("password2register").value = "";
    document.getElementById("questionregister").value = "";
    document.getElementById("answerregister").value = "";
    document.getElementById("registerbtnregister").onclick = register;
}
function register(e) {

    var pass = document.getElementById("password1register").value;
    var pass1 = document.getElementById("password2register").value;
    var answer = document.getElementById("answerregister").value;
    var question = document.getElementById("questionregister").value;
    var user = document.getElementById("userregister").value;
    if (pass != pass1) {
        document.getElementById("messageregister").innerHTML = "Password don't match";
        return;
    }
    var post = {
        user: user,
        pass: pass,
        question: question,
        answer: answer
    }
    WinJS.xhr({
        type: "post",
        url: host + 'register.php',
        data: formatParams(post),
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).done(function completed(request) {
        document.getElementById("messageforget").innerHTML = "";
        var a = JSON.parse(request.responseText);
        document.getElementById("messageregister").innerHTML = a.answer;
    },
    function error(request) {
        document.getElementById("messageregister").innerHTML = request.statusText;
    },
    function progress(request) {
        document.getElementById("messageregister").innerHTML = "processing...";
    });
}