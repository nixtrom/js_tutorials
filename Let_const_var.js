// Let,Const and Var Tutorial
// Tutorial Followed :  Let, const and var ki kahani | chai aur #javascript 
// Link: https://www.youtube.com/watch?v=yY0bKZNYmJs&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=4
// ChannelName : Chai aur Code


//Constant : Something which is declared will not be changed
//Variable : Something which can be changed or overide


// --Declararion--
const accountId = 14422
let accountEmail = "niket.chandil@example.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState  //Not initialising just to check the output

// --Let's try to change Every Decalration value--

//accountId = 0  //not allowed due to const declaration for this variable

accountEmail = "nik@example.com"
accountPassword = "32312"
accountCity = "Chennai"


//To print in tabular string format , use console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Except Const keyword, variable attached to other keywords are over-rideable.
So why to use var and let ?
Earlier version of JS , could not function properly inside block scope and functional scope ({...})
Therefore, Update to 'var' team brought 'let' keyword which can deal with above issue and work perfectly.
So, now 'let' is used widely , and 'var' keyword can be avoided
*/


//Although we can declare a variable without using any keyword ('let' or 'var').But it's not a good practice. so kindly avoid it !

//---Thank you------//
