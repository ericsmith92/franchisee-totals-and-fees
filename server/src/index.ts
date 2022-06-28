import "reflect-metadata"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { FranchiseeResolver } from "./resolvers/franchisee"
import { LocationResolver } from "./resolvers/location"
import { SaleResolver } from "./resolvers/sale"
import cors from "cors";

const main = async() => {
  const app = express();

  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }))

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FranchiseeResolver, LocationResolver, SaleResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  
  app.listen(4000, () => {
    console.log('server started on localhost:4000')
  })
}

main().catch(err => {
  console.error(err)
})