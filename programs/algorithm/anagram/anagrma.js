/********************************************************************
 * @Execution : Desltop/programs/algorithm $ anagram .js
 * @description : to check whether string is anagram or not
 * @Purpose : string
 * @function : utility/utility
 * @file : anagram
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/


var anagram = () => {
    const refer = require('../../utility/utility')
    var read = require('readline-sync')
    let string1 = read.question('enter the start range')
    let string2 = read.question('enter the end range')
    refer.anagram(string1, string2)
    console.log(refer.anagram(string1, string2))
}
anagram()