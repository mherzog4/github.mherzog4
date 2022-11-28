# Eloquent Javascript

## Chapter 1: Values, Types, and Operators

Bits are any kind of two-valued things, usually described as zeros and ones.

Any piece of discrete information can be reduced to a sequence of zeors and ones and thus represented in bits

### Values

Every value has a type that determines its role. 

Some values are numbers, some values are pieces of some text, and some are functions, ect

To create a value, you must merely invoke its name

### Numbers

Values of the number type are numeric values

### Strings

Strings are used to represent text

You can use single, double quotes, or Backticks to mark the strings, as long as the quotes at the start and the end of the string match

### Unary Operators

Not all operators are symbols, some are written as words

one example is using the typeof operator

console.log(typeof "abc")
// -> string

### Boolean Values

A value that distringuishes between only two possibilities like "true" or "false" or "yes" or "no"

console.log(1 > 2)
// false

# Chapter 2: Program Structure

## Expressions and Statements

A fragment of code that produces a value is called an express

Expressions can contain other expressions in a nested structure

A statement stands on its own, so it amounts to something only if it affects the world - it could display something on the screen 

& these changes are called side effects

## Bindings

to catch and hold values, JS provides bindings or also known as variables

let x = 2;

This allows a program to keep track of its internal state

the keyword 'let' indicates that the sentence is going to define a binding

and it is followed by the name of the binding and if we want to to give it a value by using the = operator

after a binding has been defined its name can be used as an expression

when a binding points at a value, that does not mean it is tied to that value forever

You should imagine bindings as tentacles, rather than boxes - they do not contain values they grasp them

The word const stands for constant & it defines a binding which points at the same value for as long as it lives.

## Binding Names

Binding names can be any word

## The environment

The collection of bindings and their values that exist at a given time is called the environment.

When a program starts up, this enviroment is not empty - it always contains bindings that are part of the language standard

## Functions

A function is a piece of program wrapped in a value & can be applied in order to run the wrapped program.

Executing a function is called invoking, calling, or applying the function.

you can call a function by putting parentheses after an expression that produces a function value

## console.log function

it is a function that writes out its arguments to text 

## return values

showing a dialog box or writing text to the screen is a side effect

a lot of function are useful because of the side effects they produce

When a function proudces a value it is said to return that value

## Control flow

When your program contains more than one statement, the statements are executed from top to bottom

## conditional execution

Not all programs are straight roads - we may want to take a branching road where the program takes the proper branch based on the situation at hand

this is called conditional execution

conditional execution is created with the if keyword in JS

in the case we want some code to be executed if and only if a certain condition holds

the statement after the if is wrapped in braces called a block

There is alternative path and you can use the keyword else together with the if to create 2 seperate alternative execution paths

if you have more than 2 paths to choose from, you can cahin together multiple if/else pairs

## While and do loops

When we need a way to run a piece of code multiple times, this forms a control flow called a loop

looping control flow allows us to go back to some point in the program we were before and repeat it with out current program state

a statement starting with the keyword while creates a loop

the word while is followed by an expression in parentheses and then a statement much like if

the loop keeps entering that statement as long as the epxression produces a value that gives true when converted to a Boolean

a do loop is a control structure similar to a while loop & it differers only on one point: a do loop always executes its body at least once and it starts testing whether it should stop only after that first execution

## Indenting code

the role of indenting inside blocks is to make the strucutre of the code standout

 
in code where new blocks are opned inside other blocks it can become hard to see where one block ends and another begins proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it


## for loops

for (let number = 0; number <=10; number++) {
    console.log(number);
    }

    the parens after a for keyword must contain two semicolons

    the part before the first semicolo initializes the loop, usually by defining a binding

    the second part is the expression that checks whether the loop must continue

    the final part updates the state of the loop after every iteration

## breaking out of a loop

there is statement called break that has the effect of immediately jumping out of the enclosing loop

the continue keyword is similar to break in that it influences the progress of a loop - when continue is encountered in a loop body, control jumps out of the bound and continues with the loops next itereation

## dispatching on a vlaue with switch

theres is a construct called switch that is intended to express such a "dispatch" in a more direct way

``` javascript
switch (prompt("what is the weather like?")) {
    case "rainy":
    console.log("remebered to wear your rain boots.");
    break;
    case "sunny":
    console.log("wear your hat!");
    case "cloudy":
    console.log("wear a jacket!");
    break;
    default:
    console.log("unknown weather today");
    break;
}
```
# Chapter 3: Functions

Functions are the bread and butter of javascript

Functions give us a way to structure larger programs, to reduce repition, to associate names with subprograms and to isloate these subprograms, and to isloate these subprograms from each other

## Defining a function

```javascript
{
 const square = function(x) {
    return x * x;
 };
 
 console.log(square(12));

 // -> 144
}
```
A function is created with an expression that starts with the keyword function

Functions have a set parameters (in this case, only x)

and a body which contains the statements that are to be executed when the function is called.

the function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement

Some function produce a value and some dont

those functions that dont onyl result is a side effect

a return statment determinse the value the function returns

when control comes across a statmentm it immeditaley jumps out of the current function and gives the returned value to the code that called the function

a return keyword with out an expression after it will cause the function ro return undefiend

functions that dont have a return statement at all return undefined


parameters to a function behave like regular bindings, but their initial values are given by the call of the function, not the code in the function itself


## Bindings and Scopes

Each binding/variable has a scope which is the part of the program in which the bidnign is visbible

for bidnings defined ourside of any function or block, the scope is the whole program- you cna refer to such bindings wherever you want & these are called global

But Bindings created for function parameters or declared inside a function can be reference only in that function so they are known as local bindings/variables

every time the function is called, new instanes of these bindings are created

this provides some isolation between functions-each function call acts in its own local enviroment and can often be understood without knwoing a lot about whats going on in the global environment

bindings declared with let and const are in fact local to the block that they are declared in so if you create one of those inside of a loop, the code before and after the loop cannot "see" it

```javascript
let x - 10;
if (true) {
    let y = 20;
    var z = 30; console.log(x + y + Z);
    // -> 60
}

// y is not visible here
console.log( x + z);
// -> 40
```

each scope can "look out" into the scope around it, so x is visible inside the block in the example.

the exception is when multiple bidnings have the same name - in that case, code can only see the innermost one

## Nested scope

Javascript distinguished not just global and local bindings, blocks and functions can be created inside other blocks and functions which produces degress of locality

```Javascript
const hummus = function (factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredinetAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredinetAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(2, "cup", "lemon juice");
};
```
the code inside the ingredredien function can see the factor binding from the outer function

but its local bundings such as unit or ingredientAmount are not visible to the outer function

the set of bindings visible inside a block is determined by the place if that block in the program text

each local scope can also see all the scopes that contain it, and all scopes can see the global scope

this appraoch to variable/binding visibility is called lexical scoping


## Functions as values

A function bidning usually just acts as a name for a specifc piece of the program 

such  binding is definined once and never change & this makes it easy to confuse the function and its name


but the two are different - a function value can adoo all the things that other calues can do - you can use it in expressions, not just call it.

it is possilbe to store a function value in a new binding, pass it as an argument to a function and so on

a binding that holds a function is still just a regular binding and can be assigned to a new value like so

``` javascript
let launcheMissiles = function() {
    missileSystem.luanch("now");
};
if (safeMode) {
    launchMissiles = function() {/* do nothing */};
}

```

## delclaration Notation

There is a slightly shorter way to create a function bidning when the function keyword is used at the start of a statement, it works differently

```javascript
function square(x) {
    return x * x;
}
```

this is a function delcaration

the statemnet defijnes the binding square and points it at the fiven function

it is slighly easier to write and doesnt require a semicolon after the function

## Arrow functions

theres a third notation for functions, which looks very different from the others

instead of the function keyword, it uses an arrow (=>) 

```javascript
const power = (base,exponent) => {
    let result = 1;
    for (let count = 0; counter < exponent; count++) {
        result *= base;
    }
    return result;
};
```
The arriwn comes after the list of parameters and is followed by the functions body

it expresses something like "this input (the parameters) produces this result (the body)

when there is only one parameter name, you can omit the parens around the parameter list

if the body is a single expression, rather than a block in braces, that expression will be returned from the function

## The callstack

```javascript
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

a run through this program goes like this:

- the call to greet cause control to jump to the start of that function (line 2)
- the function calls console.log which takes control, does its job and then returns control to line tine
- there it reaches the end of the greet function so it returns to the plpace that called itm hwich is line 4.
- the line after that calls console.log again & after that retruns the program reaches its eend

schematically we could show the control flow here
- not in function
    - in greet
        - in console.log
    - in greet
- not in function
    - in console.log
- not in function


Because a function has to jump back to the place that called it when it returns, the computer must remeber the context from which the call happened


<mark>the place where the computer stores this context is called the call stack</mark>

every time a function is called, the current context is stored on top of this stack

when a function retursn it removes the top context from the stack and uses that context to continue exectuion

sotring this stack requires space in the computer's memeory

when the stack fros too big, the cimputer will fail with a message like "out of stack space"


## optional arguments

the following code is allowed and execuse without any problem

```javascript
function square(x) {
     return x * x; 
}
console.log(square(4, true, "headhog"));
// -> 16
```

we defined square with only one parameter - yet when we call it with threee the language doesnt complain

it ignores the extra arguements and cpmutes the square of the first one

Javascript is extermly broad-minded about the number of arguments you pass to a function

if you pass too many, the extra ones are ignmored

if you pass too few, the missing paramenters get assigned the value undefined

the downside of this is that it is possiblem that you'll accidently pass the wrong number of arguments to functions and no one iwll tell you about it

the upside is that this behavior can be used to allow a function be called with different numbers of arguments

## Closure

What happens to local bindings when the function call that created them is no longer active?

the following code shows an example of this - it defines a function wrapValue that creates a local binding then returns a function that accesses and retruns this local binding

``` javascript 

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 =wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// -> 1
console.log(wrap2());
// -> 2
```

this situation is a good deminstration of the fact that local bindings are created a new for every call and idifferent calls canttrample on one antoher's local bindings

<mark>this feature-being able to reference a specific instance of a local bidning in an eclonsing scope is called closure</mark>

a function that referecnes bidnings from local scopes around it is called a cluser

this behavior not only frees you from having to worry about lifetimes of bindings but alos makes it possile to use function values in some creative ways


```javascript
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// -> 10
```

a good mental model is to think of function values as containing both the code in their body and the enviroment which they are created

when called the function boyd sees the enviroment in which it was created, not hte enviroment in which it is called

## Recursion

it is perfectly okay for a function to call itself as long as it doenst do it so often that it overflows the stack


<mark> a function that calls itsle is called resursive</mark>

recurions allows some functions to written in a different style

```javascript
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        retrun base * power(base, exponent -1);
    }
 }
 conosole.log(power(2,3));
 // -> 8
 ```

 this is a rather close to the way mathmaticsians define exponation and arguable describes the concept more clearly than the looping variant

 the function calls itslef multiple times with ever smaller exponnents to achieve the repeated multiplication

 but this implmenetation has a problem: in typical javaascript implmenetations, its about 3 times slower than the looping version

 running throuhg a simple loop is generally cheaper than caling a function muliple times

 often though a porgran deals wuth such complicated concepts that giving up sime efficinecy in order to make the porgram more straightforward is helpful

 ## growing functions

 there are two more or less natuaral ways for functions to be introducted into progranms

 the first is that you find yourself writing similiar code muliplie times - you'd prefer not to do that

 the second way is that you find you need some functionality that you havent written yet and that sounds like it deservers its own function

 you can start by naming the function and then you'll write the body

 you might even start writing code that uses the function before you actually define the function itself

 ## functions and side effects

 functions can be roughly divided into those that are called for their side effects and those that are called fo rtheir return value

 a pure function is a specific kind of value-producing function that not only has no side effects, but also doesnt rely on side effects from other code 

 for example it doesnt read global bindings whose value might change

 a pure function has the pleasant property that when called with the same arguments, it always produces the same value

 a call to such function can be substituted by its return value without chanigning the meaning of the code

 when you are not sure that a pure function is wrking correctly you can test it by simply calling it and know that if it works in that context, it will work in any context

 nonpure functions tend to require more scaffolding to test

 ## Summary

 the function keyword when used as an expression can create a function value

 when used as a statement it can b used to declare a binding and give it a function as its calue

 arrow functions are yet another way to create functioncs

 ``` javascript
 //Define f to hold a function value
 const f = function(a) {
    console.log(a + 2);
 };

 //Declare g to be a function
 function g(a, b) {
    return a * b * 3.5;
 }

 // a less verbose function value
 let h = a => a % 3;
 ```

 a key aspect in understadning functions is understanding scopes

 each block creates a new scope

 parameters and bindings declared in a given scope are local and not visibile from the outside

 bidnings declared with var behave differently-they end up in the nearest function scope or the global scope

 # Chapter 4: Data structures: Objects and Arrays

 
