var readline = require('readline-sync')

/*
 * @description : Find the poerr of 2
 * @return {power table of 2}, displays data
 */

powerOf2 = () => {
    try {

        let number = readline.question('enter the power of 2 to be calcaluated')
        if (0 >= number < 31) {
            let power = 0;
            for (let i = 1; i <= number; i++) {

                console.log(2 + '^' + i + '=' + Math.pow(2, i))
            }
        }

        if (number >= 31) {
            console.log('please enter number  > 31')
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}

module.exports = {
    powerOf2
}