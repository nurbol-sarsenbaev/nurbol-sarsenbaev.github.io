
var x = 0, y = 0;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            y -= 4;
            break;
        case 38:
            x += 4;
            break;
        case 39:
            y += 4;
            break;
        case 40:
            x -= 4;
            break;
        default:
            break;
    }

    var cube = document.getElementById('cube');

    cube.style.cssText = "transform: rotateX(" + x + "deg) rotateY(" + y + "deg)";

}


