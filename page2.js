var i = 0;
timerId = 0;
window.onload = function() {
  timerId = setInterval(changeLetter, 300);
}

function changeLetter () {
  letters = ["W", "I", "P", "."];
  var wip = document.getElementById("wip");
  var p = document.createElement("p");
  p.innerHTML = letters[i];
  wip.appendChild(p);
  console.log(wip);
  i++;
  if (i > 3) {
    clearTimeout(timerId);
    }
}