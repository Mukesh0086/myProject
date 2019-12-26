/*
 * @description :  to check  palindrome
 * @return {  palindrome or not}, displays data
 */

class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return !Boolean(this.items.length);
    }

    addFront(data) {
        this.items.unshift(data);
    }

    addRear(data) {
        this.items.push(data);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
    palindrome(str) {
        let charDeque = new Deque();

        for (let i = 0; i < str.length; i++) {
            charDeque.addRear(str[i]);
        }

        let still = true;

        while (charDeque.size() > 1 && still) {
            let first = charDeque.removeFront();
            let last = charDeque.removeRear();

            if (first !== last) {
                still = false;
            }
        }

        return still;
    }
}
module.exports = {
    Deque
}
//------------------------------------------------------------------------------------------------------------------