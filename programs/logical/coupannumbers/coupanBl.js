var readline = require('readline-sync')
/*
 * @description : Find N distinct cupon numbers
 * @return {distinct cupon numbers}, displays data
 */
exports.coupon = () => {
    try {
        let number = readline.questionInt('enter the cupon numbers')
        let iscollected = []
        let cnt = 0,
            distinct = 0;

        while (distinct < number) {
            let value = Math.round((Math.random() * number));
            cnt++
            if (!iscollected.includes(value)) {
                distinct++
                iscollected.push(value)


                console.log(iscollected)
            }


        }

        console.log('Total number of coupans' + cnt)
        console.log('disnct number of coupans' + distinct)
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}