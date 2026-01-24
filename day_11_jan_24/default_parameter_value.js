function add(a, b, c) {
    console.log(a + b + c); // a=10 b=20 c=undefined
}
add(10, 20); // NaN


function sum(a, b, c = 0) { // c=0 default value
    console.log(a + b + c);
}
sum(10, 20);


function greet(msg, user = 'Guest') {
    console.log(`Hello ${user} , ${msg}`)
}
greet('Good Morning', 'Nayan');
greet('Good Morning');
