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

# Chapter 3: Functions


