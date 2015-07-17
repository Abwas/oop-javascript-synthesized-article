# Object-Oriented Programming in JavaScript Synthesized

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
- [Bibliography](#bibliography)

## Variable Scope

- Is the context in which the variables exists.
- Specifies from where a variable is accessible.
- Can be either **local** or **global** scope.o

### Local Scope ([function|block]-level scope)

- Until [version 6](), JavaScript didn't have *block-level scope*, just *function-level scope*.
- Variables declared inside a function or declared using the `let` keyword are accessible within that function.
- Function within another function can access the variables of the outer function.

> [Function-level scope]() - [Function-level scope test]()
>
> [Block-level scope]() - [Block-level scope test]()

## Bibliography

1. [JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)
