var readline = require('readline-sync')

exports.distance = () => {

    let x = readline.questionInt('enter the value of point x')
    console.log(x)
    let y = readline.questionInt('enter the value of point y')
    console.log(y)
    let dist = 0;
    dist = Math.sqrt(Math.pow(x, x) + Math.pow(y, y))
    console.log(dist)
    console.log("(" + x + "," + y + ")" + " to " + "(0,0)" + " is " + dist)
}