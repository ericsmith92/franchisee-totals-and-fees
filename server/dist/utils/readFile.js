"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
async function readFile() {
    try {
        const rawdata = await promises_1.default.readFile(path_1.default.join(__dirname, '../data/data.json'));
        const data = JSON.parse(rawdata);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}
exports.readFile = readFile;
//# sourceMappingURL=readFile.js.map