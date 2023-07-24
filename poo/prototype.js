function Person(name, role, birthDate) {
  this.name = name;
  this.role = role;
  this.birthDate = birthDate;

  this.calcAge = function () {
    return new Date().getUTCFullYear() - this.birthday;
  };
}

Person.prototype.hello = function () {
  console.log("hello");
};

const obj = new Object();

const person = new Person();
//herda 'hello' do prototype de Person
person.hello();

//__proto__ é um link para o  atributo prototype do construtor
console.log(obj.__proto__);
console.log(Object.prototype === obj.__proto__);

console.log(person.__proto__);
console.log(person.__proto__ === Person.prototype);

console.log(Object.getPrototypeOf(person));
