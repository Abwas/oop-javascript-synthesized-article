# Object-Oriented Programming in JavaScript Synthesized

[![Build Status](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article.svg)](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article)
[![Coverage Status](https://coveralls.io/repos/ericdouglas/oop-javascript-synthesized-article/badge.svg?branch=master&service=github)](https://coveralls.io/github/ericdouglas/oop-javascript-synthesized-article?branch=master)

Reminders, code examples and exercises to help us understand JavaScript concepts and the OOP paradigm.

## Table of Content

- [About](#about)
- [Variable Scope](#variable-scope)
- [Hoisting](#hoisting)
- [Closures](#closures)
- [`this`]()
- [Objects]()
- [Prototype]()
- [Apply, call & bind]()
- [OOP JavaScript]()
- [Fluent API]()
- [References](#references)

## About

This guide follows an **unusual didactics** and a **different approach**. The reader **should** spend some time figuring out **how** all of those pieces fit together!

Although the time spent consuming this material will be longer than in an *usual* article, you will actually see, **in practice**, how to link all the informations explained.

You **should pay attention** in basically 3 parts:

1. Short explanation, listing the main concepts that you need to know
2. Functions that implement the concepts explained
3. Tests to prove that what we assume is correct

**Enjoy the <strike>puzzle</strike> article! B-)**

> See more **[here](https://medium.com/@ericdouglas_/why-i-chose-github-repositories-for-code-articles-d72d9c1034e6)**

## Variable Scope

- Is the context in which the variables exists
- Specifies from where a variable is accessible
- Can be either **local** or **global** scope

### Local Scope ([function|block]-level scope)

- Until [version 6](), JavaScript didn't have *block-level scope*, just *function-level scope*
- Variables declared **inside** a function or declared using the `let` keyword are **only** accessible within that function
- Function within another function **can access** the variables of the **outer** function
- **Local** variables have **priority**

**Examples**:

> [Function-level scope](source/variable-scope/function-level-scope.js) - [Function-level scope test](source/test/variable-scope.spec.js)

### Global Scope

- **Always** declare your variables using a keyword (`var`, `let` or `const`), or it will occur...

```js
var hi = 'Hey!';

function hello( name ) {
	hi = 'Hello, ';
  
  return hi + name;
}

console.log( hello( 'Eric' ));
// "Hello, Eric"

console.log( hi ); /* the global variable was affected*/
// "Hello, "
```

- Variables declared **outside** a function are **globals**.
- Assign a value to a variable without declare it add the variable to the **global context**
- The context (when you use `this`) of `setTimeout` and `setInterval` is **global**
- **Do not pollute the global scope!**

> [No Block-level scope](source/variable-scope/no-block-level-scope.js) - [No Block-level scope test](source/test/variable-scope.spec.js)

### Block Scope (ES6)

- You can use the `let` keyword to properly create a block-level scope in your code
- You should pay attention when mix `var` and `let` keywords

```js
var lang = 'ES5';

if ( lang ) {
  let lang = 'ES6';
  console.log( lang );
}

console.log( lang );

// This code will output
// "ES6"
// "ES5"
```

But **attention** here:
```js
let lang = 'ES5';

if ( lang ) {
  var lang = 'ES6';
  console.log( lang );
}

console.log( lang );
// Uncaught TypeError: Duplicate declaration "lang"

// This code will throw an error
// The reason is that we declared `let` in the global scope
// so when we use `var` inside the curly braces, we'll actually
// reassign the same variable, which is an action not allowed
```

An interesting use case for the `let` keyword is the following one:

> [`let` use case](source/variable-scope/let-use-case.js) - [`let` use case test](source/test/variable-scope.spec.js)

**ps**: The `const` keyword could be used as `let`. This new keyword also defines a block level scope. Its peculiarity is that once set, you won't be able to modify the value of the variable assigned with `const`.

```js
var name = 'Eric';

if ( name ) {
  const name = 'Eric Douglas';
  console.log( name );
}

console.log( name );

// "Eric Douglas"
// "Eric"
```

## Hoisting

- Variables are hoisted (and **just declared**) to the top of their context
- **Function declaration** is **hoisted** too, and overrides **variable declaration** (not variable **assignment**)
- Function expression **is not** hoisted

```js
// Variable declaration
var user;

// Variable assignment
var user = 'Eric Douglas';

// Function declaration
function showUserFullName( user ) {
  return user.firstName + ' ' + user.lastName;
}

// Function Expression
var showUserFullName = function( user ) {
  return user.firstName + ' ' + user.lastName;
};
```

**Exercise**

What do you think that will happen when you run this code?

```js
var text = 'Outer text';

function printStuff( text, repeat ) {
    
  if ( repeat ) {
    console.log( text );
  }
  
  var text = 'Inner text';
  
  console.log( text );
}

printStuff( text, true );
printStuff( 'Argument text', true );
```

> **[Answer](http://jsbin.com/xikeku/edit?js,console)**

## Closures

- **Closure** is a function defined within another function
- Can remember the environment in which it was created
- Can access the **outer variables and arguments**, even if the outer function has been executed/returned
- Store **references** to the outer function's variables - **attention**
- When is expected that the outer function's variables will change, we should use an **IIFE** (Imediated Invoked Function Expression) to assign values for the closure
- Closures lets you associate some data (environment) with a function that operates that data (parallel to OOP)
- You can use a closure anywhere that you might use an object with only a single method

### Use cases for Closures

- Event-based situations: closures/callbacks - [more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Practical_closures)
- Emulate private methods (module pattern) - [more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Emulating_private_methods_with_closures)
- Closures in loops: A common mistake - [more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Creating_closures_in_loops_A_common_mistake)
- Performance Considerations - [more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Performance_considerations)

## `this`

- `this` is used as a shortcut, a referent, that refers to an object, the subject in context, or the subject of the executing code
- we use it for precision
- `this` keyword contains the value of the object
- functions in JS have properties, and when it executes, it gets the `this` property - a variable with the **value of the object that invokes the function where `this`is used**
- in `strict mode`, `this` has the value of `undefined` in global functions and in anonymous functions that are not bound to any object
- **`this` is not assigned a value until an object invokes the function where `this` is defined**
- `this` has the value of the invoking object in most circumstances, howerver, there are few scenarios where `this` **does not**.
- we can switch the context to another object by invoking the function with another object

### When `this` is most misunderstood

#### 1. Callback

```js
var user = {
  data    : [ /* some data */ ],
  handler : function() { /* do stuff */ }
};

// cannot read properties of user
// this appoints to `element`
element.on( 'event', user.handler );

// Solution: bind `.handler()` to the correct object
element.on( 'event', user.handler.bind( user ));
```

> [change-context.js](source/this/change-context.js) - [this.spec.js](source/test/this.spec.js)
>
> [this-in-callback.js](source/this/this-in-callback.js) - [this.spec.js](source/test/this.spec.js)


## References

1. [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
1. [Understand JavaScript Closures With Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
1. [Closures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Lexical_scoping)
1. [How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?page=1&tab=votes#tab-top)
1. [What is a practical use for a closure in JavaScript?](http://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript)
1. [Practical Uses for Closures](https://medium.com/written-in-code/practical-uses-for-closures-c65640ae7304)
1. [Why use "closure"?](http://howtonode.org/why-use-closure)
1. [Understand JavaScript’s “this” With Clarity, and Master It](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
