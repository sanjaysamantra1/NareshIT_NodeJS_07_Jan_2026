const minimist = require('minimist'); // import minimist package
const args = process.argv.slice(2); // args = ['a=10','b=20']
const argsObj = minimist(args)
console.log(argsObj.a , argsObj.b)

// node .\minimist_demo_2.js --a=10 --b=20