class Stack {
    constructor(){
        this.type = "Stack"
        this._items = []
    }

    add = (item) => {
        this._items.push(item)
    }

    remove = () => {
        this._items.pop()
    }

    peek = () => {
        return this._items? this._items[this._items.length - 1] : null
    }

    clear = () => {
        this._items = []
        return null
    }
}

let newStack = new Stack
