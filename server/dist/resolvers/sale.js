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
exports.SaleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Sale_1 = require("../entities/Sale");
const readFile_1 = require("../utils/readFile");
const date_fns_1 = require("date-fns");
let SaleResolver = class SaleResolver {
    async sales() {
        var _a;
        const results = await (0, readFile_1.readFile)();
        return (_a = results === null || results === void 0 ? void 0 : results.data) === null || _a === void 0 ? void 0 : _a.sales;
    }
    async sale(searchFilter, franchisee_id, location_ids, date) {
        var _a, _b, _c, _d;
        const results = await (0, readFile_1.readFile)();
        const formattedDate = (0, date_fns_1.format)(new Date(date), 'MMMM dd, yyyy');
        if (searchFilter === "location") {
            return (_b = (_a = results === null || results === void 0 ? void 0 : results.data) === null || _a === void 0 ? void 0 : _a.sales) === null || _b === void 0 ? void 0 : _b.filter((sale) => sale.location_id === location_ids[0] && sale.date === formattedDate);
        }
        if (searchFilter === "franchisee") {
            return (_d = (_c = results === null || results === void 0 ? void 0 : results.data) === null || _c === void 0 ? void 0 : _c.sales) === null || _d === void 0 ? void 0 : _d.filter((sale) => sale.franchisee_id === franchisee_id && location_ids.includes(sale.location_id) && sale.date === formattedDate);
        }
        return null;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Sale_1.Sale], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sales", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Sale_1.Sale], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("searchFilter", () => String)),
    __param(1, (0, type_graphql_1.Arg)("franchisee_id", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("location_ids", () => [String], { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("date", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array, String]),
    __metadata("design:returntype", Promise)
], SaleResolver.prototype, "sale", null);
SaleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], SaleResolver);
exports.SaleResolver = SaleResolver;
//# sourceMappingURL=sale.js.map