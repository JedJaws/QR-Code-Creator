/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'website',
        message: "Please input the desired website: ",
    }
]

inquirer.prompt(questions).then((answers) => {
    //console.log(answers);
    fs.writeFile("Website.txt", answers.website , (err) => {
        if(err) throw err;
        console.log("Website txt has been saved.");
    });
    var qr_svg = qr.image(answers.website, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('Web_QR.png'));
})

// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

// var svg_string =  qr.imageSync('I love QR!', { type: 'svg' });
