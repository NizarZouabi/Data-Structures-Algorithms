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

    contains(val){
        let current = this.head
        while(current !== null){
            if(current.data === val){
                return true
            }
            current = current.next
        }
        return false;
    }
}

let SLL = new LinkedList()
SLL.insertAtEnd(50)
SLL.insertAtEnd(32)
SLL.insertAtEnd(16)
console.log(SLL);
console.log(SLL.contains(32))