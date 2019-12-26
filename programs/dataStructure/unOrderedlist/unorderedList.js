/********************************************************************
 * @Execution : Desltop/programs/dataStructure $ unOrdered .js
 * @description :  Read from file the list of Words and take user input to search a Text
 * @Purpose : linkedlist
 * @file : unOrderedBl
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/
const input = require('readline-sync')
let list = require('./unOrderedBl');
let fs = require('fs')
file = fs.readFileSync('input.txt')
try {
    let linklist = new list.LinkedList() ////object
    fileArr = file.toString().split(' ')
    console.log(fileArr)
    let name = input.question("Enter the data you want to search ");
    fileArr.forEach(element => {
        linklist.insertLast(element);
    });
    ifsearchDelElseadd = (name) => {
        if (linklist.search(name)) {
            linklist.removeElement(name)
        } else {
            linklist.insertLast(name);
        }
        arr = linklist.getArr()
        fs.writeFileSync('input.txt', arr.join(' '))
        linklist.printList()
    }
    ifsearchDelElseadd(name)
} catch (e) {
    console.log(e.message);
    console.log(e.name);
}
//--------------------------------------------------------------------------------------------------------------------