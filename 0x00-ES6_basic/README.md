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

