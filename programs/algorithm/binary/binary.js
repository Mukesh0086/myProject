/********************************************************************
 * @Execution : Desltop/programs/algorithm/binary $ binary .js
 * @description : to find the element in a array 
 * @Purpose : binary search
 * @function : : utility/utility
 * @file : binary
 * @author : NOORJAN89 <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/

var binary = () => {
    var refer = require('../../utility/utility')
    var read = require('readline-sync')
    var arr = read.question(' enetr the elements ')
    var searchword = read.question('enetr the elements to be searched')
    var result = refer.binarysearch(arr, searchword)
    console.log(result)
    if (result == -1) {
        console.log(searchword, 'element not  found')
    } else {
        console.log(searchword, 'element   found')
    }
}
binary()