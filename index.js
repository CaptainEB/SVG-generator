// imported files
const Input = require("./lib/input");
const Shapes = require("./lib/shapes");

//initiated classes
const input = new Input(); // returns an object with text, textColor, shape, shapeColor

async function main() {
	const userData = await input.getInput();
	const shapes = new Shapes(userData);
	shapes.useCircle();
}

main();
