"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandlers = void 0;
const glob_1 = __importDefault(require("glob"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { fileURLToPath } from "url";
// const __filenamePath = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filenamePath);
// const __filename = path.basename(__filenamePath)
var getDirectories = function (src) {
    return new Promise((resolve, reject) => {
        glob_1.default(src + '/**/*', (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
};
async function registerHandlers(folderPath) {
    await importFilesWithText(folderPath, ["CommandHandler", "extends IHandler"]);
}
exports.registerHandlers = registerHandlers;
async function importFilesWithText(folderPath, text) {
    const directories = await getDirectories(folderPath);
    for (const handlerPath of directories.filter((el) => (el.includes(".ts") && !el.includes("node_modules")))) {
        const handlerRelativePath = path_1.default.relative(__dirname, handlerPath);
        const handlerAbsolutePath = path_1.default.resolve(__dirname, handlerRelativePath);
        if (handlerRelativePath === __filename) {
            continue;
        }
        let file = fs_1.default.readFileSync(handlerAbsolutePath, 'utf8');
        if (file.includes("@") && text.every(el => file.includes(el))) {
            await Promise.resolve().then(() => __importStar(require(handlerRelativePath)));
        }
    }
    return Promise.resolve();
}
