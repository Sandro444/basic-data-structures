class Node {
    constructor(value) {
        this.next = undefined;
        this.prev = undefined;
        this.value = value
    }
}

class LinkedList {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    add = (value) => {
        if (!this.head) {
            this.head = new Node(value);
            this.head.prev = null;
            this.head.next = null;
            console.log(this.head)
        } else if (this.head) {
            if (!this.tail) {
                this.tail = new Node(value);
                this.tail.prev = this.head;
                this.head.next = this.tail;
                this.tail.next = null;
                console.log(this.head)
                console.log(this.tail)
            } else {
                let newTail = new Node(value);
                this.tail.next = newTail;
                newTail.prev = this.tail;
                this.tail = newTail;
                console.log(this.tail)
            }
        }
    }
    removeLast = () => {
        if (!this.head) {
            return null;
        }
        else if (this.head && !this.tail) {
            this.head = undefined;
            return null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            console.log(this.tail)
        }
    }

    removeFirst = () => {
        if(!this.head) return null;
        else if(this.head && !this.tail) {
            this.head = undefined;
            return null;
        } else{
            this.head = this.head.next;
            this.head.prev = null;
            console.log(this.head)
        }

    }

    search = (value) => {
        if (!this.head) {
            return null;
        } else if (this.head && !this.tail) {
            if (this.head.value !== value) {
                return null
            } else return this.head
        }
        else {
            let current = this.head;
            while (current.next) {
                if (current.value !== value) {
                    current = current.next;
                } else {
                    console.log("value found")
                    return current
                }
            }
            //last case
            if (current.value !== value) {
                console.log("value not found")
                return null
            } else {
                console.log("value found")
                return current
            }

        }
    }

    removeByValue = (value) => {
        let targetedNode = this.search(value);
        if (targetedNode === null) {
            console.log("value not found in list")
            return null;
        } else {
            if (targetedNode.prev && targetedNode.next) {
                targetedNode.prev.next = targetedNode.next;
                targetedNode.next.prev = targetedNode.prev;
                console.log("value removed")
                return null
            } else if(targetedNode.prev && !targetedNode.next){
                targetedNode.prev.next = null;
                this.tail = targetedNode.prev;
                console.log("tail node value removed")
                return null
            } else if(!targetedNode.prev && targetedNode.next){
                targetedNode.next.prev == null;
                this.head = targetedNode.next
                console.log("head node value removed");
                return null;
            } else if(!targetedNode.prev && !targetedNode.next){
                this.head = undefined;
                this.tail = undefined;
                console.log("only node value removed");
                return null
            }

        }
    }

    length = () => {
        if(!this.head) return 0;
        if(this.head && !this.tail) return 1;
        else{
            let current = this.head;
            let count = 1;
            console.log(count, current.value)
            while(current.next){
                count++;
                current = current.next;
                console.log(count, current.value)
            }
            return count
        }
    }
}

let list = new LinkedList

list.add("first")
list.add("second")
list.add("third")
list.add("fourth")
list.add("fifth")
list.add("sixth")
//list.removeByValue("sixth")


console.log("lenght:",list.length())

list.removeFirst()
console.log(list.head)
console.log(list.tail)