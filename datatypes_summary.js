// Primitive
// types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference or non-primitive
// Arrays, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const heros = ["Shaktiman, Ben 10, Doga"]
let myObj = {
    name: "hitesh", age: 22, 
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// --------------------------------------------------------------------------------------

// Stack Memory and Heap Memory

// Stack memory is used in primitive type
// gets a copy

// Heap memory is used in non primitive type
// gets a reference

let myYoutubename = "Sridhar_Das"
let anotherName = myYoutubename
anotherName = "Das_sri"

console.log(myYoutubename);

console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    upi : "userybl"
}

let user2 = user1

user2.email = "sri@gmail.com"

console.log(user1.email);
console.log(user2.email);


