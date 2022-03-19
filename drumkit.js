var numberOfButtons = 
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "b":
	var sound1 = new Audio('b.mp3');
	sound1.play();
	break;

	case "c":
	var sound2 = new Audio("c.mp3");
	sound2.play();
	break;

	case "d":
	var sound3 = new Audio('d.mp3');
	sound3.play();
	break;

	case "e":
	var sound4 = new Audio('e.mp3');
	sound4.play();
	break;

	case "f":
	var sound5 = new Audio('f.mp3');
	sound5.play();
	break;

	case "s":
	var sound6 = new Audio('s.mp3');
	sound6.play();
	break;

	case "r":
	var sound7 = new Audio('r.mp3');
	sound7.play();
	break;

	

    case "t":
	var sound8 = new Audio('t.mp3');
	sound8.play();
	break;

	

    case "q":
	var sound9 = new Audio('q.mp3');
	sound9.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
