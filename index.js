// imported files
const Input = require("./lib/input");
const Shapes = require("./lib/shapes");
const fs = require("fs");
const path = require("path");

//initiated classes
const input = new Input(); // returns an object with text, textColor, shape, shapeColor

function writeToFile(data) {
	let fileName = path.join(__dirname, "examples", "logo.svg");

	return fs.writeFile(fileName, data, (error) => {
		if (error) console.error("We have encountered and error and here it is: ", error);
	});
}

async function main() {
	const userData = await input.getInput();
	const shapes = new Shapes(userData);

	switch (userData.shape) {
		case "circle":
			writeToFile(shapes.useCircle());
			break;
		case "square":
			writeToFile(shapes.useSquare());
			break;
		case "triangle":
			writeToFile(shapes.useTriangle());
			break;
	}
}

main();
