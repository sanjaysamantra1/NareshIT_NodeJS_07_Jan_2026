import { createClient } from "redis";
import express from 'express';
import axios from 'axios';

const redisClient = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

const app = express();

app.get('/fetchData', async (req, res) => {
    let countryName = req.query?.country || 'india';
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${countryName}`;

    // check if the data is alredy there in Redis Cache
    let dataInRedis = await redisClient.get(countryName);
    if (dataInRedis) {
        console.log('Data Found in Redis');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'REDIS', output })
    } else { // If data is not available in Redis
        console.log("Data is Not Present in Redis");
        let response = await axios.get(url,{headers:{'User-Agent':''}});
        let output = response.data;

        // Store the Data in Redis, so that next time we can fetch data FROM REDIS
        await redisClient.set(countryName, JSON.stringify(output), { EX: 600, NX: true });
        console.log("data is Stored in Redis");
        res.send({ source: 'API', output });
    }

})

app.listen(3000, () => {
    console.log('Server running at 3000')
})