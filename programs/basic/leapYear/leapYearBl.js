/*
 * @description : Find the enetred year is leap or not
 * @param { year}, which has data information
 * @return {leap or not}, displays data
 */

leapYear = () => {
    try {
        var readline = require('readline-sync')
        var year = readline.question('enter the year')
        if (year.length == 4) {
            let n = parseInt(year)
            if ((n % 400 == 0) || ((n % 4 == 0) && (n % 100 != 0))) {
                console.log(n + 'is leap year')

            } else {

                console.log(n + 'is not a leap year')

            }
        } else
            console.log(year + 'please enter year of lenth 4 ')
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
module.exports = {
    leapYear
}