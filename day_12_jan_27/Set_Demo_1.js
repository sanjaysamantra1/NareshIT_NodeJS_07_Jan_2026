// create a set object
const planets = new Set();

// add items to set object
planets.add('Mercury');
planets.add('Earth');
planets.add('Venus')
planets.add('Earth').add('Mars'); // Chainable Method

// To Print the complete set
console.log(planets); // { 'Mercury', 'Earth', 'Venus', 'Mars' }

// check the size of a set
console.log('Set Size:', planets.size);  // 4

// check an item exists in a set or not
console.log(planets.has('Earth')); // true

// Delete an item from a set
planets.delete('Earth'); // deletes 1 item

// After delete
console.log(planets); // { 'Mercury', 'Venus', 'Mars' }

// Delete All the items 
planets.clear();

console.log(planets); // {}