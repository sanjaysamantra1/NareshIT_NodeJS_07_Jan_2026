// var , doesn't support block scope

function f1() {
    var a = 10; // this is accessible only inside the function
    if (true) {
        var courseName = 'NodeJS';
        console.log('Block: ', courseName);
    }
    console.log('outside Block: ', courseName);
}
f1();
// console.log('accessing a function variable outside ', a); a is not defined

// even though courseName is declared inside if block , it is accesible outside the block
// which proves var doesnt have block scope
