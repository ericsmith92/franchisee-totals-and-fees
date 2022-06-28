import { Resolver, Query, Arg } from "type-graphql"
import { Data } from "../types"
import { Sale } from "../entities/Sale"
import { readFile } from "../utils/readFile"
import { format } from 'date-fns'


/*
in a real application these resolvers might use an ORM to perform CRUD operations on the DB
I have chosen to simulate this by reading from a JSON file
*/

@Resolver()
export class SaleResolver {
  @Query(() => [Sale], {nullable: true})
  async sales(){
    const results: Data = await readFile();

    return results?.data?.sales
  }
  @Query(() => [Sale], {nullable: true})
  async sale(
      @Arg("searchFilter", () => String) searchFilter: string,
      @Arg("franchisee_id", () => String , {nullable: true}) franchisee_id: string,
      @Arg("location_ids", () => [String] , {nullable: true}) location_ids: string[],
      @Arg("date", () => String) date: string,
    ){
      const results: Data = await readFile();
      const formattedDate = format(new Date(date), 'MMMM dd, yyyy')

      if(searchFilter === "location"){
        return results?.data?.sales?.filter((sale) => sale.location_id === location_ids[0] && sale.date === formattedDate)
      }

      if(searchFilter === "franchisee"){
        return results?.data?.sales?.filter((sale) => sale.franchisee_id === franchisee_id && location_ids.includes(sale.location_id) && sale.date === formattedDate)
      }

      return null
  }
}