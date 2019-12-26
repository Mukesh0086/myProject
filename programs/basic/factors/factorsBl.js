var readline = require('readline-sync')
/*
 * @description : factors of a number
 * @return {prime factors}, displays data
 */



exports.factor = () => {
    try {
        let number = readline.question('enter the factors of number to be calcuated')
        for (let i = 2; i <= number; i++) {

            if (number % i == 0) {
                console.log(i)
                number /= i;

            }


        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}