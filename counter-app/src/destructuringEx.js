// Destructure Ex
const person = {
  name: "Ken",
  age: 22,
  address: {
    city: "Austin",
    state: "Texas"
  }
};

const {
  name: firstName,
  address: { state, street }
} = person;

console.log(firstName, state, street);

const person2 = {
  age: 30,
  job: "Dev"
};

const person3 = { ...person, ...person2 };

const { name, job } = person3;

console.log(person3.age, name, job);

function printInfo({ name, age, job = "Student" }) {
  console.log(`Name is: ${name}. Age is ${age}. Job is ${job}`);
}
printInfo(person);
printInfo(person3);
