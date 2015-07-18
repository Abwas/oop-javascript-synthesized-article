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

> [Non-Block-level scope](source/variable-scope/non-block-level-scope.js) - [Non-Block-level scope test](source/test/variable-scope.spec.js)

### Block Scope (ES6)

> [Block-level scope]() - [Block-level scope test]()

## References

1. [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
