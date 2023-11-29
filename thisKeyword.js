
console.log(this);
const azeem = {
 year: 2040,
 calcAge : function(birthYear){
    console.log(2040-birthYear);
    console.log(this);
 }
};
calcAge(1991);

const matilda = {
    year: 2017
};

matilda.calcAge = azeem.calcAge;
matilda.calcAge();

const f = azeem.calcAge;
f();