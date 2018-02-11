"use strict"
const es6Const = "ES6 Const";
var es5Var = "ES5";

function display(){
    console.log("This is "+es5Var+" varibale inside display funct !");

    let esVar = "ES6";
    console.log("This is "+esVar+" variable!");
    esVar = "ES6 changed";

    console.log("This is "+es6Const+" varibale inside display funct !");

}
display();
var es5Var = "ES5 changed";

console.log("This is "+es5Var+" varibale outside display funct !");
