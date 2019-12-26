/*
 * @description :simple Banking Cash Counter simulation
 * @return {deposit, withdraw, number of people}, displays data
 */

class Node {
    constructor(data, next) {

        this.data = data;
        this.next = null;
    }
}
class QueDeque {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    size() {
        return this.size()
    }

    isEmpty() {
        return this.size = 0;
    }

    enque(data) {
        let node = new Node(data);
        let current;
        //if list is empty
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }

    deque() {
        if (this.head == null) {
            return;
        }
        this.head = this.head.next;
        this.size--

    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
}

module.exports = {
    QueDeque
}
//----------------------------------------------------------------------------------------------------------------