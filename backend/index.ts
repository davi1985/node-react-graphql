import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { log } from "console";
import path from "path";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  log(`Server running on ${url}`);
}

main();
