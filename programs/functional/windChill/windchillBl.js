/*
 * @description :wind chill
 * @return {:wind chill}, displays data
 */


var read = require('readline-sync')

exports.wind = () => {
    try {
        let t = read.question('enter the teampearture in fahrenheit')
        let v = read.question('enter the wind speed in miles per hour')
        if (t < 50 && (0 > w < 120)) {
            var w = 35.74 + 0.62158 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log(w)
        } else {
            console.log('enter temparure below 50 and wind speed in the range between 3 nad 120 ')
        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}