import {  Field, ObjectType } from "type-graphql"

@ObjectType()
export class Franchisee {

  @Field()
  id!: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field(() => [String])
  location_ids: string[];
}