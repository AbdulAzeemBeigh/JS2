'use strict';

const firstName = 'Azeem';

function calcAge(birthYear) {
  const age = 2040 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      
      const firstName = 'Steven';

    
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);   // str has a block level scope
    console.log(millenial);
    // console.log(add(2, 3));  // add function has a block level scope
    console.log(output);
  }
  printAge();

  return age;
}


calcAge(1995);
// console.log(age); //age variable has a function scope
// printAge(); // printAge function has a function scope