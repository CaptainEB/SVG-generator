class Shapes {
	constructor({ text, textColor, shapeColor }) {
		this.text = text;
		this.textColor = textColor;
		this.shapeColor = shapeColor;
	}

	useCircle() {
		return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle r="100" cx="150" cy="100" fill="${this.shapeColor}"/>
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="110" fill="${this.textColor}">${this.text}</text>
        </svg>`;
	}

	useSquare() {
		return `this is a square with`;
	}

	useTriangle() {
		return `this is a triangle with`;
	}
}

module.exports = Shapes;
