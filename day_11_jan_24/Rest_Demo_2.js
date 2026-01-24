function demo(a, b, ...c) {
    console.log(a, b, c)
}
demo(10, 20, 30, 40, 50); // a=10 b=20 c=[30,40,50]

// Rest parameter must be last formal parameter