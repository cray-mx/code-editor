import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import expressPlayground from "graphql-playground-middleware-express";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
const app: Application = express();

const server = new ApolloServer({ typeDefs, resolvers });
const PORT: number = 4000;

app.get("/", expressPlayground({ endpoint: "/graphql" }));

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(PORT, (): void =>
    console.log(`Server started on http://localhost:${PORT}`)
  );
});
