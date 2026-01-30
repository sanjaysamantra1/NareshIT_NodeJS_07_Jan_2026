// process : inbuilt module from nodejs
console.log(process.argv);
const args = process.argv.slice(2); // discard first 2 arguements

let obj = {};
for (ele of args) { // ele = 'a=10'
    const [k, v] = ele.split('=');
    obj[k] = v
}
console.log(obj)