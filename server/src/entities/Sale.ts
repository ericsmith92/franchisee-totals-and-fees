import {  Field, ObjectType } from "type-graphql"

@ObjectType()
export class Sale {

  @Field()
  id!: string;
  
  @Field()
  franchisee_id: string;

  @Field()
  location_id: string;

  @Field()
  date: string;

  @Field()
  subtotal: number;

  @Field()
  tax: number;

  @Field()
  total: number;
}