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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FranchiseeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Franchisee_1 = require("../entities/Franchisee");
const readFile_1 = require("../utils/readFile");
let FranchiseeResolver = class FranchiseeResolver {
    async franchisees() {
        var _a;
        const results = await (0, readFile_1.readFile)();
        return (_a = results === null || results === void 0 ? void 0 : results.data) === null || _a === void 0 ? void 0 : _a.franchisees;
    }
    async franchisee(id) {
        var _a, _b;
        const results = await (0, readFile_1.readFile)();
        const franchisee = (_b = (_a = results === null || results === void 0 ? void 0 : results.data) === null || _a === void 0 ? void 0 : _a.franchisees) === null || _b === void 0 ? void 0 : _b.find((franchisee) => franchisee.id === id);
        return franchisee;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Franchisee_1.Franchisee], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FranchiseeResolver.prototype, "franchisees", null);
__decorate([
    (0, type_graphql_1.Query)(() => Franchisee_1.Franchisee, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FranchiseeResolver.prototype, "franchisee", null);
FranchiseeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FranchiseeResolver);
exports.FranchiseeResolver = FranchiseeResolver;
//# sourceMappingURL=franchisee.js.map