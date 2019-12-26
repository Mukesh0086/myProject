/********************************************************************
 * @Execution : Desltop/programs/dataStructure/$ cashCounter.js
 * @description : to generate simple banking
 * @Purpose : cashcounter
 * @file : cashCounterBl.js
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/
let refer = require('./cashCounterBl')
let d = new refer.QueDeque()
let input = require('readline-sync')
let choice = 0;
let limit = input.questionInt('enter the no of customer ')
let balance = 100;
banking = (limlit) => {
    for (let i = 1; i <= limit; i++) {
        d.enque(i);
    }
    do {
        let choice = input.questionInt('enter 1 to deposit, 2 to withdraw, 3 to see number of people in queue, 4 to exit ')

        switch (choice) {
            case 1:
                console.log('availble balance is' + balance)
                let amount = input.questionInt('enter the amount you want to desposit')
                console.log('current balance is' + (amount + balance))
                break
            case 2:
                console.log('availble balance is' + balance)
                let withdraw = input.questionInt('enter the amount you want to withdraw')
                d.deque()
                console.log('current balance is' + (balance - withdraw))
                break
            case 3:
                console.log('number of people in the queue')
                console.log(d.size)
                break
            case 4:
                d.deque()
                /**
                 * @var		mixed	break
                 */
                break
            default:
                console.log('you entered wrong choice')
        }

    } while (limit != 0);
}
banking(limit)

//-----------------------------------------------------------------------------------------------------------------------