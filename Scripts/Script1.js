let input = document.getElementById("stringinput");
let output = document.getElementById("stringoutput");

async function stringReverse() {
	setTimeout(function () {
		output.textContent = input.value.split("").reverse().join("");
	}, 1000);
}