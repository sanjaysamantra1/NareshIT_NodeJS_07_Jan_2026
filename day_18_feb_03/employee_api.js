const http = require('http');

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
const server = http.createServer((req, res) => {
    if (req.url === '/employees') {
        res.end(JSON.stringify(employees))
    }
})
server.listen(3000, () => {
    console.log('server running at port 3000')
})