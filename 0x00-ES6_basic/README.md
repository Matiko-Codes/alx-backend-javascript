## ES6

This is the sixth major version of the JavaScript programming language. It was officially standardized in June 2015 and introduced several new features such as arrow functions, template literals, and destructuring, that made the code more concise and easier to read. Additionally, it introduced new data structures such as sets, maps, and weakmaps, and classes, which made it more similar to other object-oriented languages.

### Constants and Variables

A variable is a container that holds a value that can be changed at any time. You can declare a variable using the keywords "var", "let", or "const".

A constant, on the other hand, is a variable that cannot be reassigned a new value once it has been defined. Constants are declared using the keyword "const".

```
let myVariable = "Hello";
myVariable = "Goodbye"; // This is valid

const myConstant = "Hello";
myConstant = "Goodbye"; // This will throw an error
```

It's worth noting that if the value of a constant is an object, you can still modify the properties of the object, but you cannot reassign the variable to a new object.

```
const myObject = {name: "John"};
myObject.name = "Jane"; // this is valid
myObject = {name: "Jane"}; // this will throw an error
```

In summary, use `const` when you want to define a variable that should not be reassigned, use `let` when you know the variable will be reassigned and use `var` when you know the variable will be reassigned and also it will be function scoped.

### Blocked-scoped variables and function-scoped variables

Variables declared using the `let` and `const` keywords are block-scoped, meaning they are only accessible within the block in which they are defined. A block is a piece of code enclosed in curly braces {}.

For example:
```
if (true) {
  let myVariable = "Hello";
}
console.log(myVariable); // This will throw an error because myVariable is not defined outside of the block
```
Variables declared using the "var" keyword are function-scoped, meaning they are accessible within the entire function in which they are defined, regardless of the block.

For example:
```
if (true) {
  var myVariable = "Hello";
}
console.log(myVariable); // This will output "Hello"

```
When a variable is declared with `let` or `const` inside a loop, it will create a new variable for each iteration so it will not update the variable in the outer scope.

This behavior is useful when you want to limit the scope of a variable to a specific block of code and prevent accidental modification of global or parent scope variables. This can help improve the readability and maintainability of your code by making it clearer where a variable is being used and what its intended purpose is.

## Arrow Functions

An arrow function (also called a "fat arrow function") is a shorthand way of defining a function in JavaScript. They have a more concise syntax and do not have their own `this` or `arguments` bindings.

Here is an example of an arrow function:
```
const myFunction = (param) => {
    return param;
}
```

If the function only has one parameter, you can omit the parentheses around the parameter:

```
const myFunction = param => {
    return param;
}
```

When an arrow function only has one line of code in its body, you can omit the curly braces and the return keyword:

```
const myFunction = param => param;
```

Arrow functions are useful when you want to create a function that is intended to be passed as a callback or used as a method.

For example:

```
const myArray = [1,2,3,4,5];
myArray.map(val => val * 2);
```

As for the default function parameter, you can set a default value to a function parameter, by using the `=` operator.

```
function greet(name = "John Doe") {
  console.log("Hello " + name);
}
greet(); // "Hello John Doe"
```

You can also use default parameters for arrow functions

```
const greet = (name = "John Doe") => {
    console.log("Hello " + name);
}

greet(); // "Hello John Doe"
```

It's worth noting that the default value is only used if the parameter is not provided or is undefined.

### Rest and Spread operators

The "rest" operator (denoted by three dots: `...`) is used to capture any remaining parameters passed to a function. The rest operator is typically used in conjunction with the spread operator (also denoted by three dots: `...`).

The "rest" operator allows you to pass an arbitrary number of arguments to a function as an array. Here's an example:
 ```
function myFunction(param1, ...rest) {
  console.log(param1); // Outputs the first argument
  console.log(rest); // Outputs an array of the remaining arguments
}
myFunction(1, 2, 3, 4);
```

The "spread" operator allows you to spread the elements of an array or iterable object into separate arguments when calling a function. Here's an example:

```
const myArray = [1, 2, 3];
console.log(Math.max(...myArray)); // Outputs 3
```

The spread operator also allows you to easily concatenate arrays, for example:

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Outputs [1, 2, 3, 4, 5, 6]
```

You can also use the spread operator to copy arrays or objects.

```
const myArray = [1, 2, 3];
const copiedArray = [...myArray];
console.log(copiedArray); // Outputs [1, 2, 3]
```

In summary, the rest operator is used to capture any remaining parameters passed to a function as an array, while the spread operator allows you to spread the elements of an array or iterable object into separate arguments when calling a function, and also for concatenating and copying arrays and objects.

### String templates

In ES6, template literals (also known as template strings) were introduced as a new way to create strings in JavaScript. They are denoted by backticks (`) instead of single or double quotes and allow you to include expressions inside the string.

Here's an example of a template literal:
```
const myName = "John";
const myAge = 30;
console.log(`My name is ${myName} and I am ${myAge} years old.`);
```

The expressions inside the curly braces `(${...})` are evaluated and the result is inserted into the string.

You can also use template literals to create multiline strings:
```
const myString = `This is a
multiline string`;
console.log(myString);
```

With template literals, you can also use the `tagged template literals` feature, which allows you to define a function that will be called with the evaluated expressions. The function can then manipulate the evaluated string and return a new one.

```
function myTag(strings, ...values) {
    //strings: an array of the string literals
    //values: an array of the evaluated expressions
}
console.log(myTag`My name is ${myName} and I am ${myAge} years old.`);
```

Template literals are a new way of creating strings in JavaScript, introduced in ES6. They allow you to include expressions inside the string and make it easy to create multiline strings, also they allow you to use tagged template literals, which is a feature that allows you to manipulate the evaluated expressions and returned a new string.

## Object creation and their properties in ES6
In ES6, there are several new ways to create objects and define their properties:

The `Object.assign()` method allows you to copy properties from one or more source objects to a target object. Here's an example:

```
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 3, c: 4 }
```

The `Object.create()` method creates a new object, with the specified prototype object and properties. Here's an example:

```
const prototypeObj = { a: 1 };
const obj = Object.create(prototypeObj);
console.log(obj.a); // 1
```

The `Object.defineProperties()` method allows you to define new or modify existing properties directly on an object, with additional property descriptor options. Here's an example:

```
const obj = {};
Object.defineProperties(obj, {
  a: { value: 1, writable: true },
  b: { value: 2, enumerable: false }
});
console.log(obj); // { a: 1, b: 2 }
```

The `Object.defineProperty()` method allows you to define a new property directly on an object, or modify an existing property, with additional property descriptor options.

```
const obj = {};
Object.defineProperty(obj, 'a', { value: 1, writable: true });
console.log(obj); // { a: 1 }
```

One of the most convenient way of creating objects and properties in ES6 is using Object property shorthand and Object destructuring.

### Iterators and for-of loops
An iterator is an object that defines a `next()` method, which returns an object with two properties: `value` and `done`. The `value` property is the next value in the iteration, and the `done` property is a boolean that indicates whether the iteration has finished.

In JavaScript, any object that implements the `Symbol.iterator` property is considered iterable. This property should be a function that returns an iterator.

For example, arrays are iterable in JavaScript, so you can use the `for-of` loop to iterate over the elements of an array:

```
const myArray = [1, 2, 3];
for (const element of myArray) {
  console.log(element);
}
```

The `for-of` loop is a new feature introduced in ES6 that allows you to iterate over the values of an iterable object, such as arrays, strings, maps, and sets. It's similar to the `for-in` loop, but it's designed to work with iterable objects and doesn't include properties from the prototype chain.

You can also use the `for-of` loop to iterate over the characters of a string:

```
const myString = "hello";
for (const char of myString) {
  console.log(char);
}
```

or use it to iterate over the entries of a map:

```
const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (const entry of myMap) {
  console.log(entry);
}
```

In summary, an iterator is an object that defines a `next()` method to return the next value in an iteration. JavaScript objects that implement the `Symbol.iterator` property are considered iterable. The `for-of` loop is a new feature introduced in ES6 that allows you to iterate over the values of an iterable object and it's designed to work with iterable objects and doesn't include properties from the prototype chain.