/*
 * @description : Find the sum of Nth elemement harmonic element
 * @param { Nth elemement}, which has data information
 * @return {sum of Nth elemement harmonic element }, displays data
 */

exports.harmonicharmonic = (number) => {
    try {
        var readline = require('readline-sync')
        var number = readline.question('enter the nth harmonic number')
        let sum = 0;
        if (number != 0) {
            for (let i = 1; i <= number; i++) {
                sum += 1 / i;
            }
            console.log(sum)
            return sum
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}