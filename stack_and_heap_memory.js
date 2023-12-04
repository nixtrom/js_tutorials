// Stack and heap Memory
// Tutorial Followed :  Stack and Heap memory in javascript
// Link: https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10
// ChannelName : Chai aur Code


//How memory work in javascript

//There are two types of memory : Stack and Heap

//Stack Memory is used at primitive Datatype (string, Number , Booleab , null , undefined, Symbol , BigInt)
//  - We will get a copy of declared variable in stack Memory

//Heap Memory is used at Non - Primitive Datatype or Reference Type ( Array , Object , Functions)
//  - When a memory is defined in heap we get a reference of original value


let myGitHubName = "nixtrom"

let anotherName = myGitHubName
anotherName = "John Doe"

console.log(myGitHubName) //nixtrom
console.log(anotherName) //John Doe (since a new copy of declared variable is created)




let userone = {   
    email : "user@google.com",
    upi : "user@ybl"  
}

let userTwo = userone

userTwo.email = "hero@oksbi"

console.log(userone)  // hero@oksbi

//Got changed as it targeted the reference and override the value instead of copying unlike in stack memory.

//----- Thank you -----