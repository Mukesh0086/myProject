var readline = require('readline-sync')
/*
 * @description : Gambler promg to find wins
 * @return {wins and percantage iof wins}, displays data
 */



exports.gamblar = () => {
    try {
        let stake = readline.questionInt('enter the Stake value')
        let Goal = readline.questionInt('enter the Gola value')
        let trails = readline.questionInt('enter number of Trails ')

        let bets = 0;
        let wins = 0;
        for (let i = 0; i <= trails; i++) {
            let cash = stake;
            while (cash > 0 && cash < Goal) {
                bets++
                if (Math.random() < 0.5)
                    cash++
                else
                    cash--
            }

            if (cash == Goal) {
                wins++
            }

        }
        console.log('number of wins ' + wins)
        console.log('percentage of wins ' + (wins * 100) / trails)
        console.log('number of loss ' + (trails - wins))
        console.log('percentage of loss ' + (trails - wins) * 100 / trails)

    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }


}