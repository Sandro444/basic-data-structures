class Queue {
    constructor(){
        this.type = "Stack"
        this._items = []
    }

    add = (item) => {
        this._items.push(item)
    }

    remove = () => {
        this._items.shift()
    }

    peek = () => {
        return this._items? this._items[0] : null
    }

    clear = () => {
        this._items = []
        return null
    }
}

let newQueue = new Queue
