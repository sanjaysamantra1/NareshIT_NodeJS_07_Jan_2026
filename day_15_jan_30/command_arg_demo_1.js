console.log(process.argv);
// we dont need [0]=nodejs [1]=filename value from process.argv
let a = +process.argv[2];
let b = +process.argv[3];
console.log(`Addition of ${a} and ${b} is ${a + b}`); 