//variaveis locais (privadas) em uma função construtora
function Person(name, birthDate, role) {
  this.print = () => {
    console.log(name, birthDate, role);
  };
  this.calAge = () => {
    return new Date().getFullYear() - birthDate;
  };
}

const person = new Person("João", 2000, "Desenvolvedor");

person.print();

console.log(person.calAge());

class Student extends Person {
  #code;

  constructor(name, birthDate, code) {
    super(name, birthDate, "Estudante");
    this.#code = code;

    this.#hello();
  }
  #hello() {
    console.log("hello");
  }
  printCode() {
    console.log(this.#code);
  }
  get code() {
    return this.#code;
  }
  set code(code) {
    this.#code = code;
  }
}

const student = new Student("João Paulo", 2000, 2023003);
student.code = 21239810283;
student.printCode();
