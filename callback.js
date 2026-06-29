A callback function is a function passed into another function as an argument, which is then executed (or "called back") inside that outer function to complete an action. 

Basic Syntax
In JavaScript, functions are first-class objects. This means they can be treated like any other variable and passed around freely. 


// 1. Define the callback function
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

// 2. Define the host function that accepts the callback
function processInput(callback) {
  const userName = "Alice";
  callback(userName); // Executing the callback here
}

// 3. Pass the callback function without parentheses ()
processInput(greetUser); 


🔄 Synchronous vs Asynchronous Callbacks
Callbacks operate in two distinct ways depending on the task: 

 +1
1. Synchronous Callbacks
Executed immediately during the execution of the higher-order function, blocking further code until finished. Built-in array methods utilize this style. 

 +2
javascript
const numbers = [1, 2, 3];

// The arrow function inside map is a synchronous callback
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // [2, 4, 6]
Use code with caution.
2. Asynchronous Callbacks
Executed at a later time after an asynchronous operation (like a timer, event, or API request) completes, allowing the rest of the application to run smoothly in the meantime. 

W3Schools
 +1
javascript
console.log("Start");

// setTimeout delays execution of the callback function by 2 seconds
setTimeout(() => {
  console.log("Async action done!");
}, 2000);

console.log("End");

// Output Order: "Start" -> "End" -> (2 seconds pass) -> "Async action done!"


Common Pitfall: Callback Hell
When multiple asynchronous operations depend on each other, nesting callbacks inside callbacks can quickly cause your script to spiral into unreadable, hard-to-maintain code known as "Callback Hell". 


// Deep nesting that is difficult to read and debug
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log(c);
    });
  });
});


The Solution: Modern JavaScript typically avoids callback hell for complex async sequences by upgrading to MDN Web Docs Promises and async/await syntax. 

