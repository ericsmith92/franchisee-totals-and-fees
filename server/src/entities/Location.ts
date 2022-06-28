import {  Field, ObjectType } from "type-graphql"

@ObjectType()
export class Location {

  @Field()
  id!: string;

  @Field()
  address: string;
}