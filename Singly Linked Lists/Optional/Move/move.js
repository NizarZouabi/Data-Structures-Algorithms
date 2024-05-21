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

    moveMinToFront(){
        let current = this.head
        let min = this.head.data
        let temp = null

        while(current !== null){
            temp = current
            if(current.data < min){
                min = current.data
            }
            current = current.next
        }
        current = min
        console.log(min)
        console.log(temp)
        console.log(current)
    }

    moveMaxToBack(){

    }

}


NodeOne = new Node()
NodeTwo = new Node()
NodeThree = new Node()
NodeFour = new Node()

NodeOne.data = 88
NodeOne.next = NodeTwo
NodeTwo.data = 11
NodeTwo.next = NodeThree
NodeThree.data = 272
NodeThree.next = NodeFour
NodeFour.data = 46
NodeFour.next = null


SL = new SLL()
SL.head = NodeOne

SL.moveMinToFront()
// SL.moveMaxToBack()
SL.printList()
