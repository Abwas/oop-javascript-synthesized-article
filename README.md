# Object-Oriented Programming in JavaScript Synthesized

[![Build Status](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article.svg)](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article)
[![Coverage Status](https://coveralls.io/repos/ericdouglas/oop-javascript-synthesized-article/badge.svg?branch=master&service=github)](https://coveralls.io/github/ericdouglas/oop-javascript-synthesized-article?branch=master)

Reminders, code examples and exercises to help us understand JavaScript concepts and the OOP paradigm.

## Table of Content

- [About](#about)
- [Variable Scope](#variable-scope)
- [Hoisting]()
- [Closure]()
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

1. Short explanation, listing the main concepts that you need to know.
2. Functions that implement the concepts explained.
3. Tests to prove that what we assume is correct.

**Enjoy the <strike>puzzle</strike> article! B-)**

> See more **[here](https://medium.com/@ericdouglas_/why-i-chose-github-repositories-for-code-articles-d72d9c1034e6)**

## Variable Scope

- Is the context in which the variables exists.
- Specifies from where a variable is accessible.
- Can be either **local** or **global** scope

### Local Scope ([function|block]-level scope)

- Until [version 6](), JavaScript didn't have *block-level scope*, just *function-level scope*.
- Variables declared inside a function or declared using the `let` keyword are accessible within that function.
- Function within another function can access the variables of the outer function.

**Examples**:

> [Function-level scope](source/variable-scope/function-level-scope.js) - [Function-level scope test](source/test/variable-scope.spec.js)

### Global Scope

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

> [`let use case`](source/variable-scope/let-use-case.js) - [`let` use case test](source/test/variable-scope.spec.js)

## References

1. [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
