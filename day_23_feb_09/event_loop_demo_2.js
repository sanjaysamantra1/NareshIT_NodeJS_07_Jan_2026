console.log(1);

async function f1(){
    return 'f1...'
}
f1().then(()=>{
    console.log('f1 resolved')
})

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);