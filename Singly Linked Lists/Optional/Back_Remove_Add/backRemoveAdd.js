class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor(){
        this.head = null
    }

    printList(){
        let current = this.head
        while(current){
            console.log(`Data: ${current.data} ->`)
            current = current.next
        }
        console.log("Null")
    }

    back(){
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        console.log(`Last value: ${current.data}`)
    }

    removeBack(){
        let prev = null
        let current = this.head
        while(current.next !== null){
            prev = current
            current = current.next
        }
        prev.next = null
        return current
    }

    addBack(val){
        let current = this.head
        let new_node = new Node()
        new_node.data = val
        new_node.next = null
        while(current.next !== null){
            current = current.next
        }
        current.next = new_node
        console.log(new_node)
    }
    
}

let LinkedList = new SLL()
let NodeOne = new Node()
let NodeTwo = new Node()
let NodeThree = new Node()

NodeOne.data = 254
NodeOne.next = NodeTwo
NodeTwo.data = 162
NodeTwo.next = NodeThree
NodeThree.data = 14
NodeThree.next = null

LinkedList.head = NodeOne

LinkedList.back()
LinkedList.removeBack()
LinkedList.addBack(22)

LinkedList.printList()
