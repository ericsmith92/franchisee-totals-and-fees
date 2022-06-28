"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function writeFile(data) {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, '../data/data.json'), JSON.stringify(data));
    return data;
}
exports.writeFile = writeFile;
//# sourceMappingURL=writeFile.js.map