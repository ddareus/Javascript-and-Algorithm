var css = document.querySelector('h3');

var color_1 = document.querySelector('.color_1');

var color_2 = document.querySelector('.color_2');

var body = document.getElementById('gradient_bg');

var style = window.getComputedStyle(body, "")

var current_bg_color = style.getPropertyValue("background-image");

function show_current_bg_color() {
	css.textContent = current_bg_color + ';';
}

document.addEventListener("DOMContentLoaded", show_current_bg_color)


function set_gradient() {
	body.style.background =
		'linear-gradient(to right, ' + color_1.value + ', ' + color_2.value + ')';
	css.textContent = body.style.background + ';';
}

color_1.addEventListener('input', set_gradient);

color_2.addEventListener('input', set_gradient);
