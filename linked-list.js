class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        this.size++;
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.tail.nextNode = newNode;
        this.tail = newNode;
        return newNode;
    }

    prepend(value) {
        this.size++;
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        newNode.nextNode = this.head;
        this.head = newNode;
        return newNode;
    }

    at(index) {
        if (index >= this.size || index < 0) {
            return null;
        }
        let temp = this.head;
        for (let i = 1; i <= index; i++) {
            temp = temp.nextNode;
        }
        return temp;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        const popped = this.tail;
        this.size--;
        this.tail = this.at(this.size - 1);
        this.tail ? (this.tail.nextNode = null) : (this.head = null);
        return popped;
    }

    contains(value) {
        let temp = this.head;
        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode;
        }
        return false;
    }

    find(value) {
        let temp = this.head;
        let index = 0;
        while (temp) {
            if (temp.value === value) {
                return index;
            }
            temp = temp.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        const arr = [];
        let temp = this.head;
        while (temp) {
            arr.push(`(${temp.value})`);
            temp = temp.nextNode;
        }
        arr.push("null");
        return arr.join(" -> ");
    }

    insertAt(value, index) {
        if (index > this.size || index < 0) {
            return null;
        }
        const newNode = new Node(value);
        const prev = this.at(index - 1);
        this.size++;
        newNode.nextNode = this.at(index);
        if (!prev) {
            this.head = newNode;
            return newNode;
        }
        prev.nextNode = newNode;
        return newNode;
    }

    removeAt(index) {
        if (index >= this.size || index < 0) {
            return null;
        }
        const removed = this.at(index);
        if (index === 0) {
            this.head = this.head.nextNode;
            return removed;
        }
        const prev = this.at(index - 1);
        prev.nextNode = this.at(index + 1);
        return removed;
    }
}

const list = new LinkedList();
list.append("B");
list.append("C");
list.prepend("A");

console.log(list.toString() + " === (A) -> (B) -> (C) -> null");

console.log(list.at(0).value + " === A");
console.log(list.at(1).value + " === B");
console.log(list.at(2).value + " === C");
console.log(list.at(3) + " === null");
console.log(list.at(-1) + " === null");

list.pop();
console.log(list.toString() + " === (A) -> (B) -> null");

console.log(list.contains("A") + " === true");
console.log(list.contains("C") + " === false");

console.log(list.find("A") + " === 0");
console.log(list.find("B") + " === 1");
console.log(list.find("C") + " === null");

list.insertAt("H", 0);
list.insertAt("T", 3);
list.insertAt("M", 2);
console.log(list.toString() + " === (H) -> (A) -> (M) -> (B) -> (T) -> null");

list.removeAt(0);
list.removeAt(3);
list.removeAt(1);
console.log(list.toString() + " === (A) -> (B) -> null");
