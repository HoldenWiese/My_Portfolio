console.log(0 && hi)
//AJAX function
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//projects.html AJAX callbacks
function loadTicTacToe(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadBootCamp(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadCodeFirstForm(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadDatabaseFirst(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadCSharp21(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadPythonApp(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

function loadSQL(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

//bootCamp.html AJAX callbacks
function bootCampOverview(xhttp) {
    document.getElementById("ajax-boot-camp").innerHTML =
        xhttp.responseText;
}