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

    max(){
        let current = this.head
        let max = this.head.data
        while(current && current !== null){
            if(current.data > max){
                max = current.data
            }
            current = current.next
        }
        return max
    }

    min(){
        let current = this.head
        let min = this.head.data
        while(current && current !== null){
            if(current.data < min){
                min = current.data
            }
            current = current.next
        }
        return min
    }

    avg(){
        let current = this.head
        let length = 0
        let sum = 0
        while(current !== null){
            length ++
            sum += current.data
            current = current.next
        }
        let avg = sum/length
        return avg
    }

    // avg(){
    //     let current = this.head
    //     let avg = this.head.data
    //     let min = this.min()
    //     let max = this.max()
    //     while(current !== null){
    //         if(current.data > min && current.data < max){
    //             avg = current.data
    //         }
    //         current = current.next
    //     }
    //     return avg
    // }

}

let SLL = new LinkedList()
SLL.insertAtEnd(120)
SLL.insertAtEnd(77)
SLL.insertAtEnd(20)
console.log("Largest value is: "+ SLL.max())
console.log("Smallest value is: "+ SLL.min())
console.log("Average value is: "+ SLL.avg())
console.log(SLL)