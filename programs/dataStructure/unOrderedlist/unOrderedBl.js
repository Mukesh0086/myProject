/*
 * @description :  Read from file the list of Words and take user input to search a Text 
 * @return {list of Words  }, displays data
 */
class Node {
    constructor(data, next) {

        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    size() {
        return this.size;

    }
    isEmpty() {
        return this.size == 0;
    }
    insertFirst(data) {
        // creates a new node to store element
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++
    }
    insertLast(data) {
        let node = new Node(data);
        let current;
        //if list is empty add the element and make it head 
        if (this.head == null) {
            this.head = node;
        } else {
            // iterate to the end of the  list 
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }
    getArr() {
        let arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    insertAt(element, index) {

        if (index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(element);

            if (index == 0) {
                //  add the element to the  first index 
                node.next = head;
                this.head = node;
            } else {
                let curr = this.head;
                let it = 0;

                // iterate over the list to find the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr.next;
                curr.next = node;
            }
        }
    }
    removeFirst() {
        if (this.head == null) {
            return;
        }
        this.head = this.head.next;

    }
    removeLast() {
        if (this.head) {
            let current = this.head;
            if (current.next == null) {
                this.head = null
            } else {
                while (current.next.next) {
                    current = current.next
                }
                current.next = null
            }
        } else {
            console.log('Nothing to delete')
        }
        this.size--
    }
    removeElement(data) {
        var curr = this.head;
        var prev = null;
        // iterate over the list 
        while (current != null) {
            // comparing element with current element if found then remove the and return true 
            if (curr.data == data) {
                if (prev == null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.data;

            }
            prev = curr;
            curr = curr.next
        }
        return -1;
        //console.log("element not found");
    }
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
    search(data) {
        try {
            var temp = this.head;
            while (temp) {
                if (temp.data == data) {
                    return 1;
                    //console.log("elemnt found");
                }
                temp = temp.next;
            }
            return 0;
        } catch (error) {
            console.log(error.message);
        }
    }
    sortedInsert(data) {
        let node = new Node(data);
        let current = this.head;
        if (!this.head || node.data <= current.data) {
            node.next = this.head;
            this.head = node
            this.size++
        } else {
            while (current.next && node.data >= current.next.data) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }
}
module.exports = {
    LinkedList,
}

//----------------------------------------------------------------------------------------------------------------