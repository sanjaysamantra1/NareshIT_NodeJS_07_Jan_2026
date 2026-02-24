import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from 'mongoose';
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from './graphql/resolvers.js'


// connect to DB
await mongoose.connect('mongodb://localhost:27017/nareshit_jan_2026')
console.log('MongoDB Connected successfully');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);