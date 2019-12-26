/*
 * @description : replace the string
 * @return {string}, displays data
 */


var readline = require('readline-sync');

exports.repalcestring = () => {
    try {
        let s1 = " Hello <<username>> How Are You "

        let s2 = readline.question('enter the name')
        if (s2.length > 2) {
            let s3 = s1.replace("<<username>>", s2);

            console.log(s3)
        } else {
            console.log("please enter the minimum character 3")

        }
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}