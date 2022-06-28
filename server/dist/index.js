"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const franchisee_1 = require("./resolvers/franchisee");
const location_1 = require("./resolvers/location");
const sale_1 = require("./resolvers/sale");
const cors_1 = __importDefault(require("cors"));
const main = async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [franchisee_1.FranchiseeResolver, location_1.LocationResolver, sale_1.SaleResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });
};
main().catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map