/*
 * @description :to check Balanced Parentheses using stack
 * @return { Parentheses Balanced or not}, displays data
 */
var raed = require('readline-sync')
class Stack {
    constructor() {
        // Array is used to implement stack 
        this.items = [];
    }
    push(element) {
        // push element into the items 
        this.items.push(element);
    }
    pop() {
        // return top most element in the stack and removes it from the stack Underflow if stack is empty 
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    isbalanced = () => {
        function isbalance(str) {
            let stack = [];

            for (let i = 0; i < str.length; i++) {
                if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
                    stack.push(str[i]);
                } else if (str[i] == ")") {
                    if (str.length == 0 || stack.pop() != "(") {
                        return false;
                    }
                } else if (str[i] == "}") {
                    if (str.length == 0 || stack.pop() != "{") {
                        return false;
                    }
                } else if (str[i] == "]") {
                    if (str.length == 0 || stack.pop() != "[") {
                        return false;
                    }
                }
            }
            return stack.length == 0;
        }
        console.log(isbalance("(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)"));
    }
}
module.exports = {
    Stack,
}
//---------------------------------------------------------------------------------------------------------------//