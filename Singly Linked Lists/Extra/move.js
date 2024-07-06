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
        let current = this.head.next
        let temp = this.head.data
        let min = this.head

        while(current.next){
            if(current.next.data < min.data){
                min = current.next
            }
            current = current.next
        }

        this.head.data = min.data
        min.data = temp
    }

    moveMaxToBack(){
        let current = this.head
        let max = this.head

        while(current.next !== null){
            if(current.next.data > max.data){
                max = current.next
            }
            current = current.next
        }
        let temp = current.data

        current.data = max.data
        max.data = temp
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
NodeThree.data = 9
NodeThree.next = NodeFour
NodeFour.data = 48
NodeFour.next = null


SL = new SLL()
SL.head = NodeOne

SL.moveMinToFront()
SL.moveMaxToBack()
SL.printList()
