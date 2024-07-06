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
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    display(){
        let runner = this.head
        let res = ""
        let list = []
        while(runner !== null){
            res = runner.data
            list.push(res)
            runner = runner.next
        }
        console.log(list.join(", "))
        return list;
    }
}

let SLL = new LinkedList()
SLL.addFront(38)
SLL.addFront(4)
SLL.addFront(12)
SLL.display()
console.log(SLL)