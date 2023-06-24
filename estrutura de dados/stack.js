//LIFO - LAST IN FIRST OUT

class HistoryStack {
  constructor() {
    this.cursor = 0;
    this.data = [];
  }
  push(item) {
    this.cursor += 1;
    this.data.push(item);
  }
  pop() {
    // this.data.pop();
    this.cursor -= 1;
  }

  clear() {
    this.data = [];
  }

  print() {
    console.log("Cursor", this.cursor);
    console.log("Itens", this.data);
  }
}

const history = new HistoryStack();

history.push("https://google.com");
history.push("https://youtube.com");
history.push("https://facebook.com");
history.print();
history.pop();
history.print();
