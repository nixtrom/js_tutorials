// Let,Const and Var Tutorial
// Tutorial Followed :  Datatype conversion confusion | chai aur #javascript 
// Link: https://www.youtube.com/watch?v=X7hDBhd_L5U
// ChannelName : Chai aur Code


//conversion in javascript is very confusing . let's break it step by step
//--conversion in Number----
let score = "40"
console.log(typeof score) //string

let scoreInNumber=Number(score) //to convert into number
console.log(typeof scoreInNumber) //number


//Let's take another example

let newScore = "40abc"
console.log(typeof newScore) //string

let newScoreInNumber=Number(newScore) //to convert into number
console.log(typeof newScoreInNumber) //number

//But we know that '40abc' can't be a number as it looks like alpha-numeric value, then why it's type became number now ?
//To investigate it let's print 'newScoreInNumber' 

console.log(newScoreInNumber)

//The above output will be NaN (Not a Number)
//DataType of NaN is Number
//NaN can be termed as special type which get returns when a value consit of otehr characters apart from digit


let marks = null 
console.log(marks) //null
console.log(typeof marks) //object

let marksInNumber = Number(marks)
console.log(marksInNumber) // 0
console.log(typeof marksInNumber) //number

//When Null was converted into number it became '0', which can further lead to wrong code excecution.

let count = undefined 
console.log(count) //undefined
console.log(typeof count) //undefined

let countInNumber = Number(count)
console.log(countInNumber) // NaN
console.log(typeof countInNumber) //number



//--Conversion in Bool----
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //converting '1' into bool
console.log(booleanIsLoggedIn) //true

//so, basically 1 = true ; 0 = false

//let's consider another example

let userLoggedIn = 3 //you can try with positve/negative decimal value too
let booleanUserIsLoggedIn = Boolean(userLoggedIn)
console.log(booleanUserIsLoggedIn)  //true

//Conclusion : 0 = false ; any other integer or fraction value of any sign will give =  true
//empty strings " " will be false ; whereas "randomString" will give true

//-----Thank You-----------