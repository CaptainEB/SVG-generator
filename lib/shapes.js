class Shapes {
	constructor({ text, textColor, shape, shapeColor }) {
		this.text = text;
		this.textColor = textColor;
		this.shape = shape;
		this.shapeColor = shapeColor;
	}

	useCircle() {
		return `this is a circle with ${this.shape}`;
	}

	useSquare() {
		return `this is a square with ${this.shape}`;
	}

	useTriangle() {
		return `this is a triangle with ${this.shape}`;
	}
}

module.exports = Shapes;
