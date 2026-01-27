// create a new Map Object with initial value
const userMap = new Map([['name', 'sanjay']]); // Entry 
console.log(userMap);

// Add/Update value
userMap.set('age', 50); // Add
userMap.set('address', 'Bangalore'); // Add
userMap.set('role', 'Admin'); // Add
userMap.set('role', 'Trainer'); // Update

// Check Map Size
console.log('Size: ', userMap.size);

// Print the Map
console.log(userMap);

// Read 1 value
console.log('Name: ', userMap.get('name')); // Sanjay

// Iterate Map
for (const [key, value] of userMap) {
   console.log(`${key} ==== ${value}`);
}

// Remove an Entry
userMap.delete('age');

// Remove all entries
userMap.clear();
