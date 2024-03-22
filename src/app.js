import express from "express";
import cors from 'cors';
import session from 'express-session';
import flash from 'express-flash';
import { readFile } from 'node:fs/promises';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import { resolvers } from '../resolvers.js';
import { authMiddleware, handleLogin } from "../auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.post('/login', handleLogin);

app.use(flash());

const typeDefs = await readFile('./schema.graphql', 'utf8');
const apolloServer = new ApolloServer({typeDefs, resolvers});
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer));

export default app;
