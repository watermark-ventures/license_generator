const generateLicense = require("./utils/generateLicense")
var inquirer = require("inquirer")
const fs = require("fs")

const questions = [
    // Creator's Name
    {
        type: "input",
        message: "What is the name of the licensee?",
        name: "licensee_name"
    },

    // Licensors's Name
    {
        type: "input",
        message: "What is the name of the licensor?",
        name: "licensor_name"
    },

    // What is the title of the work being licensed?
    {
        type: "input",
        message: "What is the title of the work that is being licensed?",
        name: "title"
    },

    // Price paid to license the work
    {
        type: "input",
        message: "What is the price/fee paid in order to license the work?",
        name: "price"
    }   
];

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        fs.writeFile("./licenses/LICENSE.txt", generateLicense(answers), function (err) {
            if (err) {
                throw err;
            }
        })
    })
}

init();
