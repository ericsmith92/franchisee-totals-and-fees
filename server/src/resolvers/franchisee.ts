import { Resolver, Query, Arg } from "type-graphql"
import { Data } from "../types"
import { Franchisee } from "../entities/Franchisee"
import { readFile } from "../utils/readFile"


/*
in a real application these resolvers might use an ORM to perform CRUD operations on the DB
I have chosen to simulate this by reading from a JSON file
*/

@Resolver()
export class FranchiseeResolver {
  @Query(() => [Franchisee], {nullable: true})
  async franchisees(){
    const results: Data = await readFile();

    return results?.data?.franchisees  
  }
  @Query(() => Franchisee, {nullable: true})
  async franchisee(
    @Arg("id", () => String) id: string,
  ): Promise<Franchisee | undefined> {
    const results: Data = await readFile();
    const franchisee = results?.data?.franchisees?.find((franchisee) => franchisee.id === id)

    return franchisee
  }
}