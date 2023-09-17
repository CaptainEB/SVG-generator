const inquirer = require("inquirer");

class Input {
	async getInput() {
		return await inquirer.prompt([
			{
				name: "text",
				type: "text",
				message: "Enter the logo text:",
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
				message: 'Enter the color for the logo shape (if it is hex color, INCLUDE "#"):',
			},
		]);
	}
}

module.exports = Input;
