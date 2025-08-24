//! Primitives: number, string, boolean
//! Complex types: arrays, object
//! Fuction types: parameters

//? Primitives

let age: number;

age = 12;

let firstName: string = "Tony";

let isAdult: boolean = false;

//? Complex types

//* Array Type

let alphabets: string[];

//let alphabets: number[];

//hobbies = ['A', 'B', 1]; --> //!Error

alphabets = ["A", "B"];

//* Object Type

// let employee: any;

// employee = {
//   name: "Steve",
//   age: 23,
// };

// employee = {
//     isFresher: true
// }

// let employee: {
//   name: string;
//   age: number;
// };

// employee = {
//   name: "steve",
//   age: 23,
//   //isFresher: true --> //!Error
// };

// let employees: {
//   name: string;
//   age: number;
// }[];

//? Type Inference

// let color: string = 'red';
let color = "red";

// color = 3; --> //!Error

//? Union Type

let wordsAndNum: string | number = "someWord";

wordsAndNum = 5;

//? Type Aliases

type Employee = {
  name: string;
  age: number;
};

let employee: Employee;

let employees: Employee[];

//?Function Type

// function add(a: number, b: number) {
//   return a + b;
// }

function add(a: number, b: number): number {
  return a + b;
}

function customLog(): void {
  console.log("Logged!!!");
}

//? Classes

// class Person {
//     name: string = '';
//     age: number = 0;
//     hobbies: string[] = []
// }

// class Person {
//     name: string | undefined;
//     age: number | undefined;
//     hobbies: string[] | undefined
// }

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  addHobbies(hobby: string) {
    this.hobbies.push(hobby);
  }
}

const person = new Person("Bruce", 29, ["Sports", "Cooking"]);

console.log("person name = " + person.name);
console.log("person age = " + person.age);
console.log("person hobbies = " + person.hobbies);

console.log("person", person);

person.addHobbies("Cycling");

console.log("person hobbies = " + person.hobbies);

//? Interfaces

interface Book {
  name: string;
  price: number;

  genre: () => void;
}

let saphiens: Book;

saphiens = {
  name: "saphiens",
  price: 499,
  genre() {
    console.log("History");
  },
};

class NewBook implements Book {
  name: string = "Atomic Habits";
  price: number = 499;
  genre() {
    console.log("Self Help");
  }
}
