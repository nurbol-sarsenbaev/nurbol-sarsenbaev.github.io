
var $game = $(".game");
var $ball = $(".ball");
var $car = $(".car");

var dx = 10;
var gw = $game.width();

$(document).on("keydown", function(e) {
  switch (e.keyCode) {
    case 39:
      moveCarRight();
      break;
    case 37:
      moveCarLeft();
      break;
    case 38:
      
      break;
    default:
      break;
  }  
});

function moveCarRight() {
  if(canMoveRight($car)) {
    $car.css({ left: "+=" + dx });
  } else {
    $car.css({ left: gw - $elem.width() });
  }
}

function moveCarLeft() {
  if(canMoveLeft($car)) {
    $car.css({ left: "-=" + dx });
  } else {
    $car.css({ left: 0 });
  }
}

function canMoveRight($elem) {
  var x = parseInt($elem.css("left"));
  var w = $elem.width();

  return (x + w + dx < gw);
}

function canMoveLeft($elem) {
  var x = parseInt($elem.css("left"));

  return (x - dx >= 0);
}

function moveBall() {
  var y = $ball.position().top;
  var x = $ball.position().left;
  

  $ball.css({ ""})

}