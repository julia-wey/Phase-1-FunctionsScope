/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

// semicolons are optional in JS

/*

    - function: reusable blocks of code
        - function definition: stores the code to be reused
        - function call: uses the code
    - parameter: takes inputted code into a function definition
    - argument: passes inputted code from a function call
    - return statement: passes code from inside a function scope to the function call's scope
    - callback function: function passed as an argument

    - scope: which portion of a file can access a piece of code
        - global scope: seen by entire file
        - local scope: seen only within a block of code (often in between curly brackets)

*/

/* ----------------------------------------------------- 
    NAMED FUNCTIONS
----------------------------------------------------- */
function sayHello() {
    console.log("Hello there!")
}

//sayHello()

function sayHelloToYou(name) {
    console.log(`Hello there, ${name}!`)
}
//sayHelloToYou("Nick")

function addTwoNumbers(num1, num2) {
   // console.log(num1 + num2)
    return num1 + num2
}
addTwoNumbers(2, 4)

//sum = addTwoNumbers(5, 400)

//console.log(sum)


/* ----------------------------------------------------- 
    ANONYMOUS FUNCTIONS
----------------------------------------------------- */
const squaredNum = function (num) {
    return num ** 2
}

square = squaredNum(6)

//console.log(square)
 

/* ----------------------------------------------------- 
    ARROW FUNCTIONS
----------------------------------------------------- */

const cubedNum = (num) => { return num ** 3}

cube = cubedNum(3)

//console.log(cube)



/* ----------------------------------------------------- 
    SCOPE
----------------------------------------------------- */
let num1 = 3

function incrementer() {
    let num2 = 8

    num1 = num1 + 1
    num2 = num2 + 1

    return num2
}

console.log(`num1: ${num1}`)

/* ----------------------------------------------------- 
    ARRAY METHODS WITH CALLBACK FUNCTIONS
----------------------------------------------------- */

const num = [1, 2, 3, 4, 5, 6]

//num.forEach((num) => console.log(num+1))
