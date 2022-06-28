"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Location_1 = require("../entities/Location");
const readFile_1 = require("../utils/readFile");
let LocationResolver = class LocationResolver {
    async locations() {
        var _a;
        const results = await (0, readFile_1.readFile)();
        return (_a = results === null || results === void 0 ? void 0 : results.data) === null || _a === void 0 ? void 0 : _a.locations;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Location_1.Location], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationResolver.prototype, "locations", null);
LocationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LocationResolver);
exports.LocationResolver = LocationResolver;
//# sourceMappingURL=location.js.map