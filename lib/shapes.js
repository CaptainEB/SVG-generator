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
		return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    	<rect x='50' width="200" height="200" fill="${this.shapeColor}" />
    	<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="100" fill="${this.textColor}">${this.text}</text>
		</svg>`;
	}

	useTriangle() {
		return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
		<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}" />
		<text x="150" y="140" text-anchor="middle" alignment-baseline="middle" font-size="100" fill="${this.textColor}">${this.text}</text>
		</svg>`;
	}
}

module.exports = Shapes;
