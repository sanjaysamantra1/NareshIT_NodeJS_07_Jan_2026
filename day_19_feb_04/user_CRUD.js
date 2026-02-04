/* C-Create , R-Read, U-Update , D-Delete
http://localhost:3000/users   
GET    /users
GET    /users/{id}
POST   /users
PUT    /users/{id}
PATCH  /users/{id}
DELETE /users/{id} */
const http = require('http');

let users = [
    { "id": 1, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "id": 2, "name": "geeta", "sal": 8000, "gender": "female" },
    { "id": 3, "name": "sameer", "sal": 7000, "gender": "male" },
    { "id": 4, "name": "sita", "sal": 9000, "gender": "female" },
    { "id": 5, "name": "deepak", "sal": 8000, "gender": "male" }
];
const server = http.createServer((req, res) => {
    const userId = req.url.split('/')[2];

    if (req.url === '/users') {
        res.end(JSON.stringify(users))
    } else if (req.url.includes('/users') && userId) {
        const userObj = users.find(user => user.id == userId);
        if (userObj) {
            res.end(JSON.stringify(userObj))
        }
    }
})
server.listen(3000, () => {
    console.log('server running at port 3000')
})