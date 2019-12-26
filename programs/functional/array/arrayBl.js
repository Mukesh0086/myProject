/*
 * @description : display 02 array
 * @return {02d array}, displays data
 */
var readline = require('readline-sync');

exports.display = () => {
    try {
        let row = readline.questionInt("enter the number of rows");
        let col = readline.questionInt("enter the number of columns");
        var array = [];
        for (let i = 0; i < row; i++) {
            array.push([]);
            for (let j = 0; j < col; j++) {

                var array2 = readline.question('enter the elements');
                array[i][j] = array2;

            }
        }
        console.log(array);
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
    }

}