// // let fruits =["mango","apple","orange"]
// // // fruits.pop("");
// // console.log(fruits);
// let stack=[];
// stack.push(20);
// stack.push(90);
// stack.push(80);
// console.log(stack);
// console.log(stack.pop());

// let queue = [];

// queue.push(10);   // Enqueue
// queue.push(20);
// queue.push(30);

// console.log(queue);
// console.log(queue.shift());

//coercion
// let a= Number("20");
// console.log(a,typeof a);

//function
// function add(a,b,c){
//     return a+b+c;
// }
// const addition = add(90,40,50);
// console.log(addition);

// const mul =(a,b) => {
//     return a*b;
// };
// console.log(mul(20,20));
// console.log(mul(2,3));

// const student = {
//   name: "Lydia",
//   age: 20,
//   faculty: "BCA",
//   address: "Kathmandu"
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.faculty);
// console.log(student.address);

//name convention
// camelCase → First word starts with a small letter.
// studentName
// getUserName
// snake_case → Words are separated by underscores (_).
// student_name
// get_user_name
// PascalCase → Every word starts with a capital letter.
// StudentDetails
// LoginPage
// kebab-case → Words are separated by hyphens (-).
// student-details
// login-page
// UPPER_CASE → All letters are capital, words separated by underscores.
// MAX_USERS
// API_URL\

// 1. global scope
// let company ="broadways";
// function display(){
//   console.log(company);
// }
// display();
// console.log(company);

// 2. block scope
// {
//  let city="KTM";
//  console.log(city);
// }

// 3.local scope
// function display(){
//   let age=2;
//   console.log(age);
// }
// display();

// parameters and arguments
// const add=(a,b,c) =>{
//   return a+b+c;
// };
// const result =add(2,2,2);
// console.log(result);

// closure
// function outer(){
//   let count =0
//   function inner(){
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const counter =outer();
// counter();
// counter();

//aschronous task:async,await
// console.log(1);
// setTimeout(() =>{
//   console.log(2);
// },10000);
// console.log(3);

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then ((data)=> console.log(data));

//invoke function expression
// (function() {
//   console.log("welcome");
// })();

//anomoymous
// const add = function (a,b) {
//   return a+b;
// };
// console.log(add(5,5));

// const multiply = function (a,b) {
//   return a*b;
// };
// console.log(multiply(5,5));

// const parent =(func) =>{
//   console.log("parent");
//   func("variable returned");
// }

// const child =(a) =>{
//   console.log("child",a)
// }
// parent(child);

// const greet = (func) =>{
//   console.log("hello");
//   func("morning");
// }

// const child = (a)=>{
//   console.log("good",a)
// }
// greet(child);

// const greet = (func) => {
//     console.log("Hello");
//     func();
// }

// const sayBye = () => {
//     console.log("Good Bye");
// }

// greet(sayBye);

//haf:higher order function
//1.take function as input
//2.returns function as output
//3.both at same time 
const parent =()=>{
  console.log("parent")
  const child =()=>{
  console.log("child");
};
  return child;
}
const result=parent();
result();