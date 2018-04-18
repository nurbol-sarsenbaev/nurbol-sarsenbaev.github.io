
var buttons = document.getElementsByClassName('calc-button');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}

function buttonClick() {
  var type = this.getAttribute('data-type');
  var display = this.parentNode.firstElementChild;

  switch (type) {
    case '=':
      var arr = display.value.split("");
      console.log(arr);

      display
      // display.innerHTML = eval(str);
      break;
    case 'c':
      display.value = "";
      break;  
    default:
      display.value += type;
      break;
  }
}




