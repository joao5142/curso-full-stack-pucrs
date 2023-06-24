//FIFO - FIRST IN FIRST OUT
class Queue {
  constructor() {
    this.data = [];
  }

  dequeue() {
    this.data.shift();
  }
  enqueue(item) {
    this.data.push(item);
  }
  print() {
    console.log(this.data);
  }
}

const fila = new Queue();

fila.enqueue("script.js");
fila.enqueue("image.jpe");
fila.enqueue("styles.css");
fila.print();
fila.dequeue();
fila.print();
