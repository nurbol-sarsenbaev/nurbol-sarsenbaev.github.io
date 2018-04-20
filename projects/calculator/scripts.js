
var buttons = document.getElementsByClassName('calc-button');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}

function buttonClick() {
  var type = this.getAttribute('data-type');
  var display = this.parentNode.firstElementChild;

  switch (type) {
    case '=':
      display.value = eval(display.value);
      break;
    case 'c':
      display.value = "";
      break;  
    default:
      display.value += type;
      break;
  }
}




