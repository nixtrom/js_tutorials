// Comparison of datatypes
// Tutorial Followed :   Comparison of datatypes in javascript | chai aur #javascript 
// Link: https://www.youtube.com/watch?v=giP2uXMlv4c
// ChannelName : Chai aur Code

console.log (null > 0) //false
console.log (null == 0) //false
console.log (null >= 0) //true
console.log (null <  0) //false
console.log (null <=  0) //true

//Let's understand the above senerio
// '==' Known as equality check
// '>' '>=' '<' '=<' are known comparisons
// equality check and comparisions worked differently

// Comparison coverert null into a number treating it as  0

//therefore null >= 0  is true whereas , null > 0 is false


// === strict check (basically it will check the datatype)

console.log("3" == 3) //true
console.log("3" === 3)  //false (because data type is not same)


//------ Thank you -----