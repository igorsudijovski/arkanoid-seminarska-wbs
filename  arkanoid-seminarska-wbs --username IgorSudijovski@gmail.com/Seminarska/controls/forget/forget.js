function forgotApp() {
    document.getElementById("messageforget").innerHTML = "";
    var btn = document.getElementById("btnSubmitforget");
    btn.onclick = submitForget;
    document.getElementById("password1forget").value = "";
    document.getElementById("passwordforget").value = "";
    document.getElementById("answerforget").value = "";
    document.getElementById("questionforget").value = "";
    document.getElementById("userforget").value = "";
    document.getElementById("btngetQ").onclick = getQuestion;
}
function getQuestion(e) {
    var user = document.getElementById("userforget").value;
    var post = {
        user: user
    }
    WinJS.xhr({
        type: "post",
        url: host + 'getQuestion.php',
        data: formatParams(post),
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).done(function completed(request) {
        document.getElementById("messageforget").innerHTML = "";
        var a = JSON.parse(request.responseText);
        if (a.error != null) {
            document.getElementById("messageforget").innerHTML = a.error;
        } else {
            document.getElementById("questionforget").value = a.answer;
            document.getElementById("answerforget").contentEditable = true;
            document.getElementById("password1forget").contentEditable = true;
            document.getElementById("passwordforget").contentEditable = true;
        }
    },
    function error(request) {
        document.getElementById("messageforget").innerHTML = request.statusText;
    },
    function progress(request) {
        document.getElementById("messageforget").innerHTML = "processing...";
    });
}
function submitForget(e) {
    
    var pass = document.getElementById("password1forget").value;
    var pass1 = document.getElementById("passwordforget").value;
    var answer = document.getElementById("answerforget").value;
    var question = document.getElementById("questionforget").value;
    var user = document.getElementById("userforget").value;
    if (pass != pass1) {
        document.getElementById("messageforget").innerHTML = "Password don't match";
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
        url: host + 'changePassword.php',
        data: formatParams(post),
        headers: { "Content-type": "application/x-www-form-urlencoded" },
    });
    document.getElementById("forgetApp").winControl.flyout.hide();
}