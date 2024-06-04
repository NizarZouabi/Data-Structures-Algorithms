class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    printList(){
        let current = this.head
        while(current){
            console.log(`Data: ${current.data} ->`)
            current = current.next
        }
        console.log("Null")
    }

    addFront(val){
        let node = new Node(val);
        !this.head ? this.head = node : node.next = this.head
        this.head = node
        return this;
    }

    removeFront(){
        let current = this.head;
        if(current !== null){
            this.head = current.next
            return this
        } else {
            return null;
        }
    }

    front(){
        if(this.head !== null){
            console.log(`SLL Head Value: ${this.head.data}`)
        } else {
            return null;
        }
    }


}
let sll = new SLL()
sll.addFront(18)
sll.addFront(5)
sll.addFront(73)
sll.removeFront()
console.log(sll)
sll.front()
sll.printList()