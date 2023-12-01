/* 
 * Filename: complex_code.js
 * Content: A complex code example demonstrating various advanced JavaScript concepts.
 * Author: AI Assistant
 */

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Method to introduce the person
  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
  
  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Class definition for an Employee, inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle, salary) {
    super(name, age);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }
  
  // Method to get the monthly salary
  getMonthlySalary() {
    return this.salary / 12;
  }
  
  // Method to introduce the employee (overrides Person's introduce method)
  introduce() {
    console.log(`My name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array of names
const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

// Creating an array of Person objects
const people = [];
for (let i = 0; i < names.length; i++) {
  const person = new Person(names[i], Math.floor(Math.random() * 50) + 18);
  people.push(person);
}

// Sorting the people array based on age
people.sort((a, b) => a.age - b.age);

// Looping through the people array and introducing each person
for (const person of people) {
  person.introduce();
}

// Creating an Employee object
const employee = new Employee('Alice', 30, 'Software Engineer', 60000);
employee.introduce();
console.log(`My monthly salary is ${employee.getMonthlySalary()}`);

// Calculating the factorial of a number
const num = 5;
console.log(`The factorial of ${num} is ${factorial(num)}`);

// Generating a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(`Random number: ${randomNum}`);

// Demonstrating closures
function outerFunction() {
  const outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

const closure = outerFunction();
closure();

// Simulating asynchronous behavior using Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateAsyncOperation() {
  console.log('Start');
  await delay(2000);
  console.log('Middle');
  await delay(3000);
  console.log('End');
}

simulateAsyncOperation();