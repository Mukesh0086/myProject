var readline = require('readline-sync')
/*
 * @description : find the  numberOfFlips wuns, and lose percentage
 * @return {numberOfFlips wuns, and lose percentage}, displays data
 */


exports.flips = () => {
    try {
        var readline = require('readline-sync')
        let numberOfFlips = readline.question('enter the number of tuimes you want to flip a coin')
        let heads = 0
        let tails = 0;
        let cnt = 0
        for (let i = 0; i <= numberOfFlips; i++) {

            if (Math.random() < 0.5) {

                heads++;
                cnt++
                console.log("head", heads)
            } else {
                tails++;
                console.log("tails", tails)
                cnt++
            }
            console.log(cnt)


        }
        // console.log(Math.random());
        // 

        let percentageHeads = (heads / numberOfFlips) * 100;
        console.log(percentageHeads)
        let percentageTails = (tails / numberOfFlips) * 100;
        console.log(percentageTails)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}