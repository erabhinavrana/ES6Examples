"use strict"
function displayMessage(){
    console.log("My simple function!");
}
displayMessage();

function returnFn(){
    return "My simple return function!"
}
console.log(returnFn());

function paramFn(message){
    console.log(message);
}
var message = "My simple param function!";
paramFn(message);

function defaultFn(defaultMsg = 'My simple default function!'){
    console.log(defaultMsg);
}
defaultFn();

function restFn(...msgs){
    if(msgs.length > 0)
        console.log(msgs);
    else
        console.log("Nothing to show");
}

restFn();
restFn("Example of rest function!");

var fn = function(){
    return "My simple anonymous function!"
}
console.log(fn());
var firstName = "Test";
var lastName = " Data";
var constrFn = new Function("firstName", "lastName","return (firstName+lastName);");
console.log("My simple Constructor Function :: "+constrFn(firstName,lastName));

var lamdaFn = (firstName,lastName) => { return (firstName+lastName);};
console.log("My simple lambda function :: "+ lamdaFn(firstName,lastName));

function* generatorFn() { 
   const firstName = yield "What is your first name?"; 
   const lastName = yield "What is your last name?"; 
   return `Full Name :: ${firstName} ${lastName}`; 
}  
const it = generatorFn(); 
console.log(it.next()); 
console.log(it.next('Test'));  
console.log(it.next('Data')); 