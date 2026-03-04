// console.log("Hello World!");

// // variables const, let

// //const name = "sam";
// //console.log(name);


// // Strings, Numbers, Boolean, Null, Undefined

// const name = "John"; // String
// const age = 30; // Number
// const isStudent = true; // Boolean
// const nullValue = null; // Null
// const y = undefined; // Undefined

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof nullValue);
// console.log(typeof y);

// // Concatenation
// const firstName = "John";
// const lastName = "Doe";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// // Template Literals
// const greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;
// console.log(greeting);


// // String Methods
// const s = "Hello World!";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.split(" "));


// /*
// multi
// line 
// comment
// */


// // Arrays
// const numbers = [1, 2, 3, 4, 5];
// numbers[3] = 'solo';
// numbers.push('17');
// numbers.unshift('001');
// numbers.pop();

// console.log(Array.isArray('hello'));
// console.log(numbers.indexOf('001'))
// console.log(numbers);

// // Objects

// const person = {
//     firstname: "solo",
//     lastname: "mon",
//     hobbies: ['coding', 'gaming', 'traveling'],
//     address: {
//         city: 'jakarta',
//         state: 'indonesia'
//     }
// }

// console.log(person);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// person.email = 'sam@gmail.com';
// console.log(person);
// person.firstname = 'sam';
// console.log(person)



// // Arrays of todo

// const todos = [
//     {
//         id: 1,
//         text: "sam maro",
//         isComplete: true
//     },
//         {
//         id: 2,
//         text: "sam",
//         isComplete: true
//     },
//         {
//         id: 3,
//         text: " maro",
//         isComplete: true
//     }
// ];

// console.log(todos);
// console.log(todos[1].text);



// // JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)



// // For Loop
// for(let i = 0; i < 10; i++) {
//     console.log('For loop number');
// }

// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log("Walking east one step");
// }

// // While loop
// let r = 0;
// while(r < 9) {
//     console.log('While Loop Number');
//     r++;
// }

// let w = 0;
// do {
//   w += 1;
//   console.log(w);
// } while (w < 5);


// const todo = [
//     {
//         id: 1,
//         text: "sam maro",
//         isComplete: true
//     },
//         {
//         id: 2,
//         text: "sam",
//         isComplete: true
//     },
//         {
//         id: 3,
//         text: " maro",
//         isComplete: false
//     }
// ];

// for(let i = 0; i < todo.length; i++){
//     console.log(todo[i]);
// }



// for(let tod of todo){
//     console.log(tod.text)
// }


// todo.map(function(tod) {
//     console.log(tod.text);
// });

// todo.forEach(function(tod) {
//     console.log(tod.text);
// });

// todo.filter(function(tod) {
//     console.log(tod.isComplete);
// });

// const completedTodos = todo.filter(function(tod) {
//     return tod.isComplete === true;
// });
// console.log(completedTodos);



// // conditional statements
// const x = 10;
// if(x === "10") {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is greater than 10');
// }
//  else {
//     console.log('x is not 10');
// }


// const x = 4;
// const y = 10;
// if(x > 5 || y < 10) {
//     console.log('x is greater than 5 or y is less than 10');
// } else if (x < 5 || y > 10) {
//     console.log('x is less than 5 or y is greater than 10');
// }
//  else {
//     console.log('x is not 10 and y is not 10');
// }




// // Tarary operator
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);



// //Switch
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
// }


// // Functions
// function addNums(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNums(5, 10));

// // Arrow function
// const addNums2 = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addNums2(5, 10));

// // Single line arrow function
// const addNums3 = (num1, num2) => console.log(num1 + num2);
// addNums3(5, 10);


// OOP
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); 
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // prototype
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// // Instantiate object
// const person1 = new Person('sam', 'solo', '07-02')
// const person2 = new Person('mon', 'solo', '07-02')
// console.log(person1.dob);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// for(let i = 0; i <= 100; i++) {
//     console.log(i)
// }

// let i = 0;
// while(i <= 100) {
//     console.log(i);
//     i++;
// };


// let day = 1;
// while(day <= 7){
//     if (day >= 1 && day <= 6);
//     console.log('weekday');

//     day++
// };


// }while(day <= 7);


// while(day >= 1 && day <= 6){
//     console.log(day);

//     day++
// };




// let day = 0;

// while(day < 7){
//     if (day == 0){
//         console.log("sun")
//     }
//   else  if (day == 1){
//         console.log("mon")
//     }
//    else if (day == 2){
//         console.log("tues")
//     }
//   else  if (day == 3){
//         console.log("wed")
//     }
//   else  if (day == 4){
//         console.log("thurs")
//     }
//   else  if (day == 5){
//         console.log("fri")
//     }
//     else     if (day == 6){
//         console.log("sat")
//     }
    
//     day++
// }

// function dayoftheweek(day){
//     switch (day) {
//         case 0:
//             return "sun"
//         case 1:
//             return "mon"
//         case 2:
//             return "Teus"
//         case 3:
//             return "Wed"
//         case 4:
//             return "Thus"
//         case 5:
//             return "fri"
//         case 6:
//             return "sat"
//         default:
//             break;
//     }
// }

// console.log(dayoftheweek(2))





