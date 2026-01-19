let str = 'This is javascript class';

let res1 = str.split(' ');
console.log(res1); // [ 'This', 'is', 'javascript', 'class' ]

let res2 = str.split('');
console.log(res2); // [ 'T','h','i','s'..... ]

let res3 = str.split('javascript');
console.log(res3); // [ 'This is ', ' class' ]

let res4 = str.split('python');
console.log(res4); // [ 'This is javascript class' ]

let res5 = str.split('This');
console.log(res5); // [ '',' is javascript class' ]

let res6 = str.split('class');
console.log(res6); // [ 'This is javascript ','' ]