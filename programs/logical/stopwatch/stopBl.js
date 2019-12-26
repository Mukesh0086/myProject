/*
 * @description :elasped time
 * @return {time is saeconds}, displays data
 */


var readline = require('readline-sync')


exports.Time = () => {
    try {
        let start = readline.question('enter 1 to start the stop watch')
        let startTime = new Date()

        let stop = readline.question('enter 2 to ststop the stop watch')
        let stopTime = new Date()

        console.log("start time", stopTime)
        console.log("stop time", stopTime)
        elapedtime = stopTime - startTime
        console.log("elapsed time", elapedtime)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}