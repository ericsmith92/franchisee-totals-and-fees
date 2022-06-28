import { Resolver, Query } from "type-graphql"
import { Data } from "../types"
import { Location } from "../entities/Location"
import { readFile } from "../utils/readFile"


/*
in a real application these resolvers might use an ORM to perform CRUD operations on the DB
I have chosen to simulate this by reading from a JSON file
*/

@Resolver()
export class LocationResolver {
  @Query(() => [Location], {nullable: true})
  async locations(){
    const results: Data = await readFile();

    return results?.data?.locations  
  }
}