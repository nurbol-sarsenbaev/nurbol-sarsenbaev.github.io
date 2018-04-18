
var buttons = document.getElementsByClassName("calc-button");

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}

function buttonClick() {
  var type = this.getAttribute("data-type");
  var display = this.parentNode.firstElementChild;

  switch (type) {
    case '=':
      display.innerHTML = eval(display.innerHTML);
      break;
    case 'c':
      display.innerHTML = "";
      break;  
    default:
      display.innerHTML += type;
      break;
  }
}




