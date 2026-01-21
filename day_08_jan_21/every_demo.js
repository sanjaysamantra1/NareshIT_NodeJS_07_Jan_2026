let arr1 = [10, 12, 14, 16, 17];

// returns true if every element satisfies the condition
let is_every_element_even = arr1.every((ele) => ele % 2 == 0);
console.log('is_every_element_even: ', is_every_element_even);

// returns true if atleast 1 element satisfies the condition
let atleast_1_element_even = arr1.some((ele) => ele % 2 == 0);
console.log('atleast_1_element_even: ', atleast_1_element_even);