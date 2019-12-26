/*
 * @description : display quradratic roots
 * @return {roots}, displays data
 */

var read = require('readline-sync')
exports.quadratic = () => {
    try {
        let root1, root2;
        let delta = 0;
        let a = read.questionInt('enter a value of a')
        let b = read.questionInt('enter a value of b')
        let c = read.questionInt('enter a value of c')
        delta = b * b - 4 * a * c
        root1 = (-b + Math.sqrt(delta)) / (2 * a)
        root2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log("root1 of x= " + root1)
        console.log("root2 of x= " + root2)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}