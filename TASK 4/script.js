var timer;
var interval;
var going = false;

window.onload = function () {
   init();
};

function init() {
    if(going === true)
    {
        alert("process is going already");
        return;
    }
    going = true;
    var page = window.location.pathname.split("/").pop();
    switch (page){
        case "index.html":
            pageSwitcher("index1.html");
            break;
        case "index1.html":
            pageSwitcher("index2.html");
            break;
        case "index2.html":
            pageSwitcher("index3.html");
            break;
    }
}

function instantSwitchForward() {
    var page = window.location.pathname.split("/").pop();
    switch (page){
        case "index.html":
            window.location.replace("index1.html");
            break;
        case "index1.html":
            window.location.replace("index2.html");
            break;
        case "index2.html":
            window.location.replace("index3.html");
            break;
    }
}

function instantSwitchBackwards() {
    var page = window.location.pathname.split("/").pop();
    switch (page){
        case "index.html":
            alert("It is the first page!");
            break;
        case "index1.html":
            window.location.replace("index.html");
            break;
        case "index2.html":
            window.location.replace("index1.html");
            break;
        case "index3.html":
            window.location.replace("index2.html");
            break;
    }
}

function pageSwitcher(page) {
    var time = 10;
    var header = document.getElementById("remaining-time");
    timer = setTimeout(function () {
        window.location.replace(page);
    }, 10000);
    header.innerHTML = "Time remaining " + time;
    interval = setInterval(function () {
        time--;
        header.innerHTML = "Time remaining " + time;
        if(time <= 0){
            clearInterval(interval);
        }
    },1000);
}

function stopSwitcher() {
    going = false;
    document.getElementById("remaining-time").innerHTML = "Time remaining";
    clearInterval(interval);
    clearTimeout(timer);
}

function closeWindow() {
    window.close();
}

function firstPageRedirect() {
    window.location.replace("index.html");
}