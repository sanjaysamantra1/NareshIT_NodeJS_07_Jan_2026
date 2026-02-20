import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.route.js'
import {connectDB} from './utils/db_util.js'

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', usersRoutes)

app.listen(3000, async() => {
    await connectDB();
    console.log('Server running at 3000')
})