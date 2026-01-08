let a = 10;
let b = 20;
console.log(`Addition of ${a} and ${b} is ${a + b}`); // works both in browser and in nodejs
console.log('Maximum is: ', Math.max(10, 20, 30, 40, 50));

// Browser Specific code
document.write(`Addition of ${a} and ${b} is ${a + b}`)
alert(`Addition of ${a} and ${b} is ${a + b}`)

// line-7&8 will not work in nodejs
// nodejs doesnt have window,document objects