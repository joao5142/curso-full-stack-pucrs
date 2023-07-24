function createPerson(name, role, birthDate) {
  return {
    name,
    role,
    birthDate,
    calcAge() {
      return new Date().getUTCFullYear() - this.birthDate;
    },
  };
}

const person = createPerson("João", "Desenvolvedor", 2000);

console.log(person);
console.log(person.calcAge());
