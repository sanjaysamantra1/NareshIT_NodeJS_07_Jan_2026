console.log('I am API TEST File')

async function fetchData() {
    for (let i = 1; i <= 1000000000; i++) {
        await fetch('http://localhost:3000/employees')
    }
}
fetchData();