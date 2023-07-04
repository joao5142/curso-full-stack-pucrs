class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  add(element) {
    let node = new Node(element);
    if (this.count === 0) {
      this.head = node;
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  print() {
    let aux = this.head;
    let printMessage = "";

    while (aux != null) {
      printMessage += aux.element + " ";
      aux = aux.next;
    }
    console.log(printMessage);
  }
}

let list = new LinkedList();

list.add("Maria");
list.add("João");
list.add("Jorge");
console.log(list);
list.print();
