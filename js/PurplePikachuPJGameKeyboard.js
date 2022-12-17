var leftpressFixed = 0
var rightpressFixed = 0
var uppressFixed = 0
var downpressFixed = 0

window.onkeydown = keyDownListenerFixed.bind(this);

function keyDownListenerFixed(e){
  if (e.keyCode == 83 || e.keyCode == 40) {
    downpressFixed = 1
    localStorage.setItem('DownArrowFixPPPJ',JSON.stringify(downpressFixed));
  }
  if (e.keyCode == 87 || e.keyCode == 38) {
    uppressFixed = 1
    localStorage.setItem('UpArrowFixPPPJ',JSON.stringify(uppressFixed));
  }
  if (e.keyCode == 65 || e.keyCode == 37) {
	  leftpressFixed = 1
    localStorage.setItem('LeftArrowFixPPPJ',JSON.stringify(leftpressFixed));
  }
  if (e.keyCode == 68 || e.keyCode == 39) {
    rightpressFixed = 1
    localStorage.setItem('RightArrowFixPPPJ',JSON.stringify(rightpressFixed));
  }
}

window.onkeyup = keyUpListenerFixed.bind(this);

function keyUpListenerFixed(e){
  if (e.keyCode == 83 || e.keyCode == 40) {
    downpressFixed = 0
    localStorage.setItem('DownArrowFixPPPJ',JSON.stringify(downpressFixed));
  }
  if (e.keyCode == 87 || e.keyCode == 38) {
    uppressFixed = 0
    localStorage.setItem('UpArrowFixPPPJ',JSON.stringify(uppressFixed));
  }
  if (e.keyCode == 65 || e.keyCode == 37) {
	  leftpressFixed = 0
    localStorage.setItem('LeftArrowFixPPPJ',JSON.stringify(leftpressFixed));
  }
  if (e.keyCode == 68 || e.keyCode == 39) {
    rightpressFixed = 0
    localStorage.setItem('RightArrowFixPPPJ',JSON.stringify(rightpressFixed));
  }
}
