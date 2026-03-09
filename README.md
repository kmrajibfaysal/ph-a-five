# 📘 JavaScript Fundamental Topics

## What is the difference between var, let and const?

- **var** → Function-scoped, can be redeclared , hoisted, old way to declare variables
- **let** → Block-scoped, can be updated but not redeclared in same scope.
- **const** → Block-scoped, cannot be reassigned (but objects and arrays can be muted).

## What is the spread operator(...) ?

- **(...)** → spread operator is used to expand elements of an array or object
- Example:

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1,2,3,4]
```

## What is the difference between map(), filter(), and forEach()?

- **map()** → creates a new transformed array by iterating to targeted array using callback function.

- **filter()** → filters conditioned value that match the condition from a respective array.

- **forEach()** → Executes function on each element and it modifies the array.

## What is an arrow function ?

- **()=> {}** → this is a shorter way to declare conventional function , nothing fancy just its syntax looks cool by the way.
- Examples:

```js
const add = (a, b) => a + b;
```

## What are template literals?

-**template literals** → string literals with backticks ``, allow multiline and dynamic operation through ${} syntax.

- Examples:

```js
const user = 'Faysal';
const greetings = `Hello, ${user}`;
```
