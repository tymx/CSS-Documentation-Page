var checkBox = document.getElementById("check");
var navbar = document.getElementById("navbar");

function navAppear(){
  if(checkBox.checked){
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }
}

function desktopWindow(query) {
  if(query.matches){
    // checkBox.disabled = true;
    document.getElementsByClassName("toggle-bar").style.visibility = "hidden";
    navbar.style.visibility = "visible";
  } else {
    // checkBox.disabled = false;
  }
}

var query = window.matchMedia("(min-width: 1350px)");
desktopWindow(query);
query.addListener(desktopWindow);