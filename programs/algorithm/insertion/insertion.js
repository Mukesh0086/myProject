/********************************************************************
 * @Execution : Desltop/programs/algorithm/ insertion$ insertion .js
 * @description : to sort the elemtnts in an array
 * @Purpose : insertion sort
 * @function : : utility/utility
 * @file : insertion
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/

var insertionsor = () => {
    const refer = require('../../utility/utility')
    var read = require('readline-sync')
    let array = read.questionInt('enter the elements')

    refer.insertionsearch(array)
}
insertionsor()