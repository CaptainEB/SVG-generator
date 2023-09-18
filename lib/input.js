const inquirer = require("inquirer");

class Input {
	async getInput() {
		const userData = await inquirer.prompt([
			{
				name: "text",
				type: "text",
				message: "Enter the logo text up to 3 characters:",
			},
			{
				name: "textColor",
				type: "text",
				message: 'Enter the text color (if it is hex color, INCLUDE "#"):',
			},
			{
				name: "shape",
				type: "list",
				choices: ["circle", "square", "triangle"],
				message: "What shape do you want the logo?",
			},
			{
				name: "shapeColor",
				type: "text",
				message: 'Enter the shape color (if it is hex color, INCLUDE "#"):',
			},
		]);

		if (userData.text.length > 3) this.getInput();

		return userData;
	}
}

module.exports = Input;
