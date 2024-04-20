class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(val) {
        let new_node = new Node(val)
        if (this.head === null){
            this.head = new_node;
        } else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = new_node;
        }
    }

    length(){
        let length = 0
        let current = this.head
        while(current !== null){
            current = current.next
            length++
        }
        console.log(length)
        return length
    }
}

let SLL = new LinkedList()
SLL.insertAtEnd(26)
SLL.insertAtEnd(8)
SLL.insertAtEnd(43)
console.log(SLL)
SLL.length()