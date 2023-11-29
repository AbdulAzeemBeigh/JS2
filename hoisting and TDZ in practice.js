console.log(me);
// console.log(job);
// console.log(year);

var me = 'Abdul'; // undefined error: hoisting
// let job = 'teacher'; // hoisting & TDZ error
// const year = 1995; // hoisting & TDZ error

// Functions

console.log(addDecl(2,3));
// console.log(addExpr(2,3)); // expression function has hoisting.
// console.log(addArrow(2,3)); // arrow function has hoisting.

function addDecl(a,b){
    return a +b;
}

const addExpr = function(a,b){
    return a + b;
}

const addArrow = (a,b) => a +b;

// var variable

console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted');
}

var x = 1;
let y=2 ;
const z = 3;

console.log(x===window.x);
console.log(y===window.y);
console.log(z=== window.z);