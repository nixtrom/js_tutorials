// Basic Arthematic Operations
// Tutorial Followed :   Why string to number conversion is confusing | chai aur #javascript  
// Link: https://www.youtube.com/watch?v=N9el4APFtAo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=7
// ChannelName : Chai aur Code


let value = 3
let negValue = -value
console.log(negValue) //-2

console.log(2+2); //addition
console.log(2-2); //Substraction
console.log(2*2); //Multiplication
console.log(2**3); //power
console.log(2/2); //division
console.log(2%2); //remainder (modulus)

let str1 = "Hello"
let str2 = "Niket"

let str3 = str1  + str2
console.log(str3) // Hello Niket

console.log("1" + 2 ); //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2 ") //32  But why ? 

// In above senerios when operation consist of string and Number, the data type of preceding value  is considered first and operation is carried out .
//for eg.

console.log(1 + 2 + "2" + 4) //324
console.log("1" + 2 + "2" + 4) //1224
console.log(1 +  3  +"2" + "3" + 4 + 5  ) //42345 
 
//Increment operator
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);


let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);

//Explaination for above senerio https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

//---- Thank you ----