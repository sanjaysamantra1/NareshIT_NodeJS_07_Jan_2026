const express = require('express');
const cors = require('cors');
const commentsArr = require('./comments.json');
const { buildSchema } = require('graphql');
const { ruruHTML } = require('ruru/server');
const  { createHandler }  = require('graphql-http/lib/use/express');


const app = express();
app.use(cors());

//1. construct a schema
let commentSchema = buildSchema(`
            type Query{
                comments:[Comment],
                comment(id:Int):Comment,
            }
            type Comment{
                id:Int
                postId:Int
                name:String
                email:String
                body:String
            }
`);
let root = { // resolver functions
    comments: function () {
        return commentsArr;
    },
    comment: function (args) {
        return commentsArr.find(comment => comment.id == args.id)
    }
}

app.all('/api/comments', createHandler({ schema: commentSchema, rootValue: root }));


// graphql UI
app.get('/', (req, res) => {
    res.type('html')
    res.end(ruruHTML({ endpoint: "/api/comments" }))
})

app.listen({ port: 5000 });
console.log('Listening to port 5000');