function Person(name, role, birthDate) {
  this.name = name;
  this.role = role;
  this.birthDate = birthDate;

  this.calcAge = function () {
    return new Date().getUTCFullYear() - this.birthDate;
  };
}

const person = new Person("João", "Desenvolvedor", 2000);

console.log(person);
console.log(person.calcAge());
