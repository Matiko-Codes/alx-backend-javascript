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