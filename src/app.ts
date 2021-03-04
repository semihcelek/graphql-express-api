import express from "express";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";

const app = express();
app.use(express.json());
app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
export default app;
