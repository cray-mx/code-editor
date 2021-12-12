import { readFileSync } from "fs";

export const typeDefs = readFileSync(__dirname + "/schema.gql").toString(
  "utf-8"
);
