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

```javascript
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
  const square = function (x) {
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

such binding is definined once and never change & this makes it easy to confuse the function and its name

but the two are different - a function value can adoo all the things that other calues can do - you can use it in expressions, not just call it.

it is possilbe to store a function value in a new binding, pass it as an argument to a function and so on

a binding that holds a function is still just a regular binding and can be assigned to a new value like so

```javascript
let launcheMissiles = function () {
  missileSystem.luanch("now");
};
if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
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
const power = (base, exponent) => {
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

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
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
  return (number) => number * factor;
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

```javascript
//Define f to hold a function value
const f = function (a) {
  console.log(a + 2);
};

//Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// a less verbose function value
let h = (a) => a % 3;
```

a key aspect in understadning functions is understanding scopes

each block creates a new scope

parameters and bindings declared in a given scope are local and not visibile from the outside

bidnings declared with var behave differently-they end up in the nearest function scope or the global scope

# Chapter 4: Data structures: Objects and Arrays

Numbers, boolenas and astrings are the atoms that data structures are built from

many types of intofmation require more than one atom thogh

<mark>Objects allow us to group values-including other objects- to build more complex structures</mark>

The programs we have built so far have been limited by the fact that they were operating only on simple data types.

this chapter will intro basisc data strucutres.

## Data sets

<mark> Javascript provides a data type specifically for storing sequences of values</mark>

<mark>it is a called an array and it written as a list of values between square brakcets, seperated by commas </mark>

```javascript
let listOfNumbers = [1,2,3,...];
console.log(listOfNumbers[1]);
// -> 2
```

## Properties

weve seen expressions like myString.length and Math.max in the past chapters - these are expressions that access a property of some value

almost all javascript values have properties

the two main ways to access properties in Javascript are with a dot with square brackets

both value.x and value[x] acess a property on the value but not the same property

when using a dot the word after the dot is the literal name of the property

when using square brakcets, the expression between the brackets is evaluated to get the property name

whereas value.x fetches the property of value name "x"

value[x] tries to evaluate the expression x and uses the result, converted to a string as the property name

so if yoou know that the property you are interest in is called color you can say value.color

if you want to extract the property named by the value held in the binding i you say value[i]

property names are strings - they can be any string, but the dot notiation works only with names that look like valid binding names

## Methods

Both string and array objects contain, in addition to the length.property, a number of properties that hold function values

```javascript
let doh = "Doh";
console.log(typeof dog.toUpperCase);
// -> function
console.log(doh.toUpperCase());
// -> DOH
```

Every string has a toUpperCase property & when called it will return a copy of the string in which all letters have been converted to upercase.

Properties that contain functions are generally called methods of the value they belong to, as in "toUpperCase is a method of a string"

## Objects

Values of the type object are arbitrary collections of properties

one way to create an object is by using braces as an expression

```javascript
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "running"],
};
console.log(day1.squirrel);
// -> false
```

inside the braces there is a list of properties seperatated by cimmas

each property has a name followed bya colon and a value

when an object is writen over multiple lines, indenting it helps with readbaliliteis

The braces have two meanings in Javascript

at the start of a statement, they start a block of statements - in any other position, they describe an object

returning to our tentacle model of bindings-property bindings are similar

they grasp values but other bidnings and properties might be holding onto those same values

you may think o f objects as octopuses with any number of tentancles each of which has a name tattooed on it

to fund out what properties an object has you can use the Object.keys function

## Mutability

the types of values discussed in earlier chapters such as numers, strings and Booleans are all immutable - it is impossible to change values of those types

Objects work differetnyl - you can change their properties causing a single object value to have different content at different times

with objects there is a difference between having two references to the same object and having two different objects that contain the same properties

## The Lycanthropes log

if a porperty name in brace notiations inst followed by a vlaue, its value is taking from the bidning with the same name

```javascript
addEntry(["work", "pizza", "running", "television"], false);
```

## Array Loops

```javascript
for (let i = 0; i < JOURNDAL.length; i++) {
  let entry = JOURNDAL[i];
  //Do something with entry
}
```

this kind of loop is common in classical JS - going over arrays one element at a time is something that comes up a lot

there is a simpler way to write that in modern JS

```javascript
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events. `);
}
```

when a for loop looks like this with the words of after a variable defifintion it will loop over the elements of the value given after of

this works not only for arrays but also for strings and some other data strucutures

## JSON

because properties only graps their value, rather than contain it, onbects and arrays are stored in the computers memory as sequences of bits holding the addresses-the place in memorry =- of their contents

We can serialize the data - that means it is converted into a flat description

a popular serialization format is called JSON

which stands for Javascript Object Notations

It is widely used as a data storgage and communicaation format on the web even in languages other than Javascript

```javascript
{
    "squireel" false,
    "dog" true,
}
```

Javascript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format

## SUmmary

Objects and arrays which are a specific king of object provide ways to group several values into a single value

most values in JAvascript have properties, the exception beloning to undefined

properties are accessed using value.prop or value["prop"]

Objects tend to use names for their properties and stroe more or less a fixed set of them

arrays on the other hand usually contain varting amounts of identival values and uses numbers

there are some named propetires in arrays such as length and other methods

methods are functions that live in properties

You can iterate over arrays using a special kind of for loop

# Chapter 5: Higher Order Functions

A large program is a cosstly program and not just because of the time it takes to build

size almost always involves complexity and complexity confuses programmers

confused prgrammers in turn introduce mistakes/bugs into programs

a lrage program then provides a lot fo space for these bugs to hude, making them hard to find

## Abstraction

<mark>in the context of programming, thesr kinfd of vocabularies are usually called abstractions</mark>

Abstractions hide details and give us the ability to talk about problems are a higher level (Or more abstract level)

It is a useful skill in programming to notice when you are working at a too low level of abstraction

## Higher-order functions

<mark>functions that operate on other functions either by taking tham as arguments or by return them are called higher order functions

Higher order functions allow us to abstract over actions not just values

```javascript
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan19 = greaterThan(10);
console.log(greaterThan10(11));
// -> true
```

## Script data set

one area where higher order functions shine is data processes

## Filtering Arrays

```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, (script) => script.living));
// -> [{"Adam", ...},...]
```

The function uses are argument named test, a function value to fill the gap in the computation- the process of deciding which element to collect

note how the filter function, rather than deleting elements from the exisiting array, builds up a new array with only the element that passe the test

## Transforming with map

<mark> the map method transfroms an array by applying. afunction to all of its elements and bulding a newy array from the returned values

the new arrau woll have the same length as the input array, but its content will have been mapped to a new for by the function

```javascript
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
```

## summarizing with reduce

another common thing to do wiht arrays is to compute a single value from them

our reccuring example, summing a collection of numbers is an instance of this

the higher-order operation that represents this pattern is called reduce

it builds a value by repeatedly taking a single element from the array and combinging it with the current value

```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// -> 10
```

the stand array method reduce which corresponds to this function has an added convenicence

if you array contains at least one element, you are allowed to leave off the start argument

the method will take the first element of the array as its start value and start reduing at the second element

## Composabulity

Higher-order functions start to shine when you need to compose operations

as an example lets write code that finds the average year of origin for living and dead scripts in the data set

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / arrayl.length;
}
```

The some method is another higher-order function - it akes a test functions and tells you whether that function returns true for any of the elements in the array

## Summary

being able to pass function values to toher functions is deeply useful aspect of Javascript

it allows us to write functions that model computations with gaps in them

the code that calls thse functions can fill in the gaps by providing function values

Arrays provide a number of number of useful higher-order methods

you can use a forEach to loop over the elements in an array

the filter method returns a new array containing only the elements that pass the predicate function

Transforming an array by putting each element through a function is done with map

you can use reduce to combine all the elements in an array into a single value

the some method tests whether any element matches a given predicate function

and findIndex finds the position of the first element that matches a predicate

# Chapter 6: The secret life of Objects

in programming culte, we have a thing called Object-Oriented programming - a set of technuqes that use objects as the central principle of program organization

The core idea in object-oriented programming is to divde programs into smaller peices and make each piece responsible for managing its own state

this way some knowledge about the way a piece of the program works can be kept local to that piece.

Different peices of sucha program interact with each other through interface, limited sets of functions or bindings that provide useful functionality at a more abstract level, hidning their precise implmentation

Properties that are part of the interface are called public - the others which outside code should not be touching are called private

seprating iterface from implementation is a great idea and it is called encapsulation

## Methods

Methods are nothing more than properites that hold function values

a simple method:

```javascript
let reabbit = {};
rabbit.speak = function (line) {
  console.log(`The Rabbit says '${line}'`);
};
rabbit.speak("I'm alive");
// -> the rabbit says "I'm alive"
```

usually a method needs to do something with the object it was called on.

## Prototypes

```javascript
let empty = {};
console.log(empty.toString);
// -> function to string(){...}
console.log(empty.toString());
// -> [object Object]
```

in addition to their set of properties, most objects also have a prototype

<mark> a prototype is another object that is used as a fallback source of properties

when an object gets a request for a prortey that it does not have, its prototype will be searched for the property, then the protoype's prototype, and so on

so who is the prototpe of that empty object? it is the great protoype, the entity behind almost all objects, Object.protoype.

## Classes

Javascripts protoype system can be interpreted as a somewhat informal take on an object-oriented concept called classes

a class defines the shape of a type of object - what methods and properties it has.

Such an object is called an instance of a class

Protoypes are useful for defining properties for which all instances of a class share the saem value, usch as methods

properties that different per instance need to be stored directly in the objects themselves

to crate an instance of a given class, you have to make an object that derives from the propert protoype but you also have to make sure it has the properies that instances of this class are supposed to have

this is what a constructor function does

```javascript
function makeRabbit9type) {
   let reabbit = Object.create(protoRabiit);
   rabbit.type = type;
   return rabbit;
}
```

if you put the keyword new in front of a function call, the function is trated as a constructor

this means that an object with the right protoype is automatically created, bound to this in the function, and returned at the end of the function

```javascript
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} tabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
```

its important to understand the distinction between the way a prototype is associated with a constructor (through its prototpye property) and the way objects have a prototype (which can be found with Object.getPropotypeOf)

## Class Notation

The class keyword stats a calss declaration, which allows us to degine a constructor and a set f methods all in a single place

like function, class can be used both in statements and in expressions

when used as an expression, it doesnt define a binding but just produces the constructor as a value

you are allowed to omit the calss name in a class expression

```javascript
let object = new (class {
  getword() {
    return "hello";
  }
})();
console.log(object.getWord());
// -> hello
```

## Overriding derived properties

When you add a property to an object, whether it is present in the protoy or not, the property is added to the object itselef

if there was already a property with the same name in the prototype, this property will no longer affect the object as it is now hidden behind the objects own proerty

## Maps

A map (noun) is a data structure that associates values (the keys) with other values

for example, you might want to map names to ages - it is possible to uses objects for this

```javascript
let ages = {
    Matt = 20
    Mary = 21
};
```

The above is dangerous - use the below mao method on a class

```javascript
let ages = new Map();
ages.set("Matt", 20);
ages.set("Mary", 21);
```

## Polymorphism

When a piece fof code is written to work with objects that have a certain interface-in this case, a toString-method-any kkind of object that happens to support this interface can be plugged into the code and it iwll just work

<mark> this technique is called polymorphism

Polymorhpic code can work with values of different shapes, as long as they support the interface it expects

## Symbols

It is possilbe for multiple interfaces to use the same property name for different things

Symbolas are values created with the Symbol function

Unlike strings, newly created symbols are unqiue-you cannot create the same symbol twice

```javascript
let sym = SYmbol("name");
console.log(sym == Symbol("name"));
// -> false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// -> 55
```

the string you pass Symbol is included when you convert it to a string and can make it easier to recognize a symbol, when for example, showing it in the console

Butit has no meaning beyond that- multiple symbols may have the same name

Being both unique and usbale as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties no matter what their names are

## The iterator interface

The object given to a for / of loop is expected to be iterable

this means it has a method named with Symbol.iterator symbol ( a symbol value defined by the language, stored as a property of the Symbol function)

when called, that method should return an object that provides a second interface, iterator

this is the actual thing that it iterates - it has a next method that returns the next result

that result should be an object iwht a value property that provides the next value, if there is one and a done property which should be true when there are no more results and false others

```javascript
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// -> {value: "O", done: false}
console.log(okIterator.next());
// -> {value: "K", done: false}
console.log(okIterator.next());
// -> {value: undefined, done: true}
```

## Getters, Setters, and Statics

Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values

for example, Map objects have a szie property that tells you how many keys are stored in them

Even properties that are access directly may hide a method call

Such methods are called getters and they are defined by writing get in fron the the method name in an object expression or calss declarion

```javascript
let varySize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};
console.lg(varyingSize.size);
// -> 73
```

whenever someon reads from this objects size property the associated method is called & you can do a similair thing when a property is written, to using a setter

```javascript
Class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahreneheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit() {
        this.celsius = (value - 32) / 1.8
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// -> 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// -> 30
```

Sometimes you want to attach some properties directly to you constructor function, rather than to the prototpye

Such methods wont have access to a class isntance but can for example be used to provide additional ways to create instances

## INheritance

Javascripts prototype system makes it possible to create a new class, much like the old class, but with new definitions for some of its properties

the prototype for the new class derives from the old protoype but adds a new definition for the set method

in Object-Oreinted programming terms, this is called inheritiance - the new class inherits properties and behavior from the old class

the use of the wor dextends indiactes that this class shouldnt be directly based on the default Object protoype but on som eohte class
this is called the superclass - the derived class is the subclass

Inheritance allows us to build slighjtly different data types from exisiting data types with relatively little work

it is a fundamental part of the object oreinted tradition, alongside encapsulation and polymorphism

but the latter two are generally regarded as wonderful ideas, inheritiance is more controversial.

## Summary

So objects do more than just hold their own properties

they have protoypes which are other objects

theyll act as if they have properties they dont have as long as their protoype has that proprty

simply objects have Object.prototype as their protoype

Constructors which are functions whose names usally start with a capital letter can be used with athe new operator to create new objects

the new objects protoypr will be the object found in the prototpe proprotery of the constructor

you can make good use of this by putting the properties that all values of a given type share into their prototype

you can define getts and setters to secretly call methods every time an objects proprtey is access

statis methods are methods stored in a class's constructor rahter than its prototype

the isntanceof operator can given an object and constructor tell you whetehrhter that object is an instance of that constructro

moer than one type may implement the same interface

code written to use an interface automatically knows how to work with any number of different objects that provide the interface

this is called polymorphism

when implementing multiple classes that differen in only some detauls it can be helpful to write the new classes as subslasses of an exisiting class, ineheriting part of its behavior

# Chapter 7: A Robot

TBD

# Chapter 8: Bugs and Errors

## Strict mode

Javascript can be made a little stricter by enabling strict mode - this is done by putting the string "use strict" at the top of a file or a function body

```javascript
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log(happy);
  }
}

canYouSpotTheProblem();
// -> referenceError: counter is not defined
```

in short, putting "use strict" at the top of your program reately hurts and might help you spot a problem

## Types

Some languages want to know the types of all your bidnings and expressions before even running a program

they will tell you right away when a type is used in a inconsistent way

JS considers tpyes only when actually running the program and even there often tries to implicitly conver values to the type it expects so its not much help

when the types of a program are known, its possible for the computer to check them for you, pointing out mistakes before the program is run - the most popular one is called typescript

## Testing

Testing by hand again and again is a really bad idea

not only is it annoying, it also tends to be ineffective since it takes too much to test everything every time you make a change

Computers are good at reptivie tasks and testings is the ideal repetitive task

automated testings is the porcess of writing a program that tests another program

it takes you only seconds to verifiy that your program sitllbehaves properly in all the sitautions you wrote tests for

when you break something you'll immediately notice - rather than running into it at some later time.

## Debugging

Once you notice there is something wrong with your program because it misbehaves or produces errors, the next step is to figure out what the problem is

putting a few strategic console.log calls into the program is good way to get additional information about what the program is doing

An alternative approach to using console.log is to peek into the programs behavior by using the debugger capabilities of your browser

Browsers come with the abilitty to set a breakppoint on a specific line of your code

when the execution of the program reachs a line witha breakpoint, it is paused and you can inspect the values of bidnings at that point

## Error Propagation

Not all problems can be prevented by the programmer - if your program communicates with the outside world in any way, it is possible to get malformed input, to become overloaded with work or to have the network fail

if you're programing only for yourself, you can afford to just ignore such problems until they occur

but if you build somehting that is going to be used by anybody else you usally want the program to do better than just crash - the program has to actively do something in response to the problem

## Excepetions

When a function cannot proceed normally what we would like to do is stop what we are doing and immediately jump to a place that knows how to handle the problem - this is what exception handling does

exceptions are mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception

an exceptions can be any value - raising one somewhat resembles a super-charged return from a function: it jumps out of not just the current function but also its calleds, all the way down to the first call that started the current execution

this is called unwinding the stack

the power lies in the fact that you can set "obstacles" alon g the stack to catch the exception as it is zooming down

once you've caught an exception you do somnething with it to address the problem and then continue to run the program

heres an example:

```javascript
function promptDirection(question) {
    let result = prompt(questions)
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction " + result);
}
function look () {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    }else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " error);
}
```

the throw keyword is used to raise an exception

catching one is done by wrapping a piece of code in try block, followed by the keyword catch

when the code in the try block causes an exception to be raised, the catch block is evaluated, with the name in parentheses bound to the exception value - after the catch block finishes or if the try block finishes without problems, the program proceeds normally.

## Cleaning up after exceptions

The effect of an exception is another kind of control flow

every action that might cause an exception - which is pretty much every function call and property access, might cause control to suddenly leave your code

this means whene code has several side effectd, even if its "regular" control flow looks like they'll always all happen, an exception might prevent some of them from taking place

there is another feature that try stamenets have - they may be dollowed by a finally block either instead of or in addition to a catch block

a finally block says "no matter what ahppens run this code after trying to run the code in the try block"

```javascript
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    acounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```

## Selective Catching

For programmer mistakes, just letting the rror go through is often the best you can do - an unhandled exception is reasonable way to singel a broken program and the javascript console will on bodern browsers, povide you with some information about which function call were on the stack when the problem occuered

when a catch body is enetered, all we know is that something in our try body causes an exception - but we dont know what did or which exception it caused

Javascript doesn't provide direct support for selectively catching exceptions: either you catch them all or you dont catch any

As a general rule, dont blanket-catch exceptions unless it is for the purpose of "routing" them somewhere - for example, over the network to tell another system that our program crashed - and even then think carefuly how you might be hdining information

so we want to catch a specific kind of exception - we can dothis by checking in the catch block whether the exception we got is the one we are interested in and rethrowing it otherwise

## Assertions

Assertions are checks inside a program that verify that something is the way it is supposed to be

they are used not to handle situations that can come up in normal operations, but to find programmer mistakes

you want to reserver them for mistakres that are easy to make or that you find yourself making

## Summary

An important part of programming is finding, diagnosing, and fixing bugs - problems can become easier to notice if you have an automated test suite or add assertions to your porgrams

throwing an exception causes the call stack to be unwound until the next enclosing try/catch block or until the bottom of the stack

the exception value will be given to the catch block that catches it, which should verify that it is acutally the expected kind of exception and then do something wiht it - to help adress the unpredicable control flow caused by exceptions, finally blocks can be used to ensure that a piece of code always runs whena block finishes

# Chapter 9: Regular Expressions
