//! Primitives: number, string, boolean
//! Complex types: arrays, object
//! Fuction types: parameters
//? Primitives
var age;
age = 12;
var firstName = "Tony";
var isAdult = false;
//? Complex types
//* Array Type
var alphabets;
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
var color = "red";
// color = 3; --> //!Error
//? Union Type
var wordsAndNum = "someWord";
wordsAndNum = 5;
var employee;
var employees;
//?Function Type
// function add(a: number, b: number) {
//   return a + b;
// }
function add(a, b) {
    return a + b;
}
function customLog() {
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
var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Person.prototype.addHobbies = function (hobby) {
        this.hobbies.push(hobby);
    };
    return Person;
}());
var person = new Person("Bruce", 29, ["Sports", "Cooking"]);
console.log("person name = " + person.name);
console.log("person age = " + person.age);
console.log("person hobbies = " + person.hobbies);
console.log("person", person);
person.addHobbies('Cycling');
console.log("person hobbies = " + person.hobbies);
var saphiens;
saphiens = {
    name: 'saphiens',
    price: 499,
    genre: function () {
        console.log('History');
    }
};
var NewBook = /** @class */ (function () {
    function NewBook() {
        this.name = 'Atomic Habits';
        this.price = 499;
    }
    NewBook.prototype.genre = function () {
        console.log('Self Help');
    };
    ;
    return NewBook;
}());
