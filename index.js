import express from 'express';
// Graphql
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

const serverURI = `http://localhost:8000${server.graphqlPath}`;

app.listen({ port: 8000 }, () => console.log(`Server Running on ${serverURI}`));