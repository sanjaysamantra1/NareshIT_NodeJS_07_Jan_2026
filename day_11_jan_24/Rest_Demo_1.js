// write a function that can add N # of arguements
function add(...arr) { // REST parameter
    let sum = 0;
    for (ele of arr) {
        sum = sum + ele
    }
    console.log(`Sum: ${sum}`)
}
add(10, 20)
add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)