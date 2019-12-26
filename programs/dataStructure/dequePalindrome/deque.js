/********************************************************************
 * @Execution : Desltop/programs/dataStructure/ $ deque .js
 * @description : to check string is palindrome or not
 * @Purpose : palindrome check using queue
 * @file : dequeBl.js
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/
const input = require('readline-sync')
const access = require('./dequeBl')
let pali = new access.Deque()
let str = input.question("enter the string ")
let checkPallindrome = pali.palindrome(str)
console.log(checkPallindrome)
//---------------------------------------------------------------------------------------------------------------//