let num = 6;
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#easyButton");
let hard = document.querySelector("#hardButton");
let colors = rgbColors(num);
let squares = document.querySelectorAll(".box");
let colorselected = randomColor();
let colorDisplay = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
let resultDisplay = document.querySelector("#result");
debugger;
resetButton.addEventListener("click", function () {

	colors = rgbColors(num);
	colorselected = randomColor();
	colorDisplay.textContent = colorselected;
	resetButton.textContent = "New Colors";

	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "blue";
})

colorDisplay.textContent = colorselected;

easy.addEventListener("click", function () {
	num = 6;
	hard.classList.remove("select");
	easy.classList.add("select");
	colors = rgbColors(num);
	colorselected = randomColor();
	colorDisplay.innerHTML = colorselected;
	console.log(squares[0], colors, num)
	for (let i = 0; i < squares.length; i++) {
		if (i < num) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function () {
	num = 9;
	hard.classList.add("select");
	easy.classList.remove("select");
	colors = rgbColors(num);
	colorselected = randomColor();
	colorDisplay.innerHTML = colorselected;

	for (let i = 0; i < squares.length; i++) {
		if (i < num) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}
});


for (let i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function () {

		let clickedColor = this.style.backgroundColor;
		console.log(clickedColor, colorselected);

		if (clickedColor === colorselected) {
			resultDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else {
			this.style.backgroundColor = "#000000";
			resultDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(colour) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.background = colour;
	}
}

function randomColor() {
	let random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function rgbColors(Color) {
	let arr = []

	for (let i = 0; i < Color; i++) {
		arr.push(ranColor())
	}

	return arr;
}

function ranColor() {

	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}