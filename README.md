# Object-Oriented Programming in JavaScript Synthesized

[![Build Status](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article.svg)](https://travis-ci.org/ericdouglas/oop-javascript-synthesized-article)
[![Coverage Status](https://coveralls.io/repos/ericdouglas/oop-javascript-synthesized-article/badge.svg?branch=master&service=github)](https://coveralls.io/github/ericdouglas/oop-javascript-synthesized-article?branch=master)

Reminders, code examples and exercises to help us understand JavaScript concepts and the OOP paradigm.

## Table of Content

- [Variable Scope](#variable-scope)
- [Hoisting]()
- [Closure]()
- [`this`]()
- [Objects]()
- [Prototype]()
- [Apply, call & bind]()
- [OOP JavaScript]()
- [Callback]()
- [Fluent API]()
- [References](#references)

## Variable Scope

- Is the context in which the variables exists.
- Specifies from where a variable is accessible.
- Can be either **local** or **global** scope

### Local Scope ([function|block]-level scope)

- Until [version 6](), JavaScript didn't have *block-level scope*, just *function-level scope*.
- Variables declared inside a function or declared using the `let` keyword are accessible within that function.
- Function within another function can access the variables of the outer function.

**Examples**:

> [Function-level scope](source/variable-scope/function-level-scope.js) - [Function-level scope test](source/test/variable-scope/function-level-scope.spec.js)
>
> [Non-Block-level scope]() - [Non-Block-level scope test]()
>
> [Block-level scope]() - [Block-level scope test]()

## References

1. [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
