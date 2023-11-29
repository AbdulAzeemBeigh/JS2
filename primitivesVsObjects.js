let lastName = 'Beigh';
let oldLastName = lastName;
lastName = 'Beig'
console.log(lastName,oldLastName);

const azeem = {
    firstName : 'Azeem',
    lastName : 'Beigh',
    age : 85,
};

const friend = azeem;
friend.lastName = 'John';
console.log('hi',azeem);
console.log('hello',friend);


// friend = {};

const azeem2 = {
    firstName:'John',
    lastName:'jon',
    age: 78,
    family: ['lee','bob']
};

const azeemCopy = Object.assign({}, azeem2);
azeem2.lastName = 'lewis';
console.log('hi',azeem2);

azeemCopy.family.push('Mary');
azeemCopy.family.push('Martin');
console.log('hello',azeemCopy);