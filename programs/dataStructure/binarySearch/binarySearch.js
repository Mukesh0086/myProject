/********************************************************************
 * @Execution : Desltop/programs/dataStructure/$ binarySearch.js
 * @description : to generarte binary search tree
 * @Purpose : binarySearch
 * @file : binarySearchBl
 * @author : Noorjan Kinnal <knoorjahan226@gmail.com
 * @version : v12.10.0
 * @since : 12-Nov-2019
 *
 *********************************************************************/
let refer = require('./binarySearchBl')
let b = new refer.BinarySearch();
b.insert(15);
b.insert(25);
b.insert(7);
b.insert(22);
b.insert(17);
b.insert(13);
b.insert(5);
b.insert(9);
b.insert(27);
var root = b.getRootNode();
b.inorder(root);
//--------------------------------------------------------------------------------------------------------------------