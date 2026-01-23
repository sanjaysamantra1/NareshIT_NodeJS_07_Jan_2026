let inputStr = '([{ }])';
let obj = {   // object
    '}': '{',
    ']': '[',
    ')': '(',
}
let stack = []; // array
for (let char of inputStr) {
    let values = Object.values(obj);
    if (values.includes(char)) {
        stack.push(char)
    } else {
        let lastValue = stack[stack.length - 1];
        if (obj[char] === lastValue) {
            stack.pop();
        }
    }
    console.log(stack)
}
console.log(stack.length === 0 ? 'valid' : 'invalid')
