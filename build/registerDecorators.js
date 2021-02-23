import glob from 'glob';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
const __filenamePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filenamePath);
const __filename = path.basename(__filenamePath);
var getDirectories = function (src) {
    return new Promise((resolve, reject) => {
        glob(src + '/**/*', (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
};
export async function registerHandlers(folderPath) {
    await importFilesWithText(folderPath, ["CommandHandler", "extends IHandler"]);
}
async function importFilesWithText(folderPath, text) {
    const directories = await getDirectories(folderPath);
    for (const handlerPath of directories.filter((el) => (el.includes(".js") && !el.includes("node_modules")))) {
        const handlerRelativePath = path.relative(__dirname, handlerPath);
        const handlerAbsolutePath = path.resolve(__dirname, handlerRelativePath);
        if (handlerRelativePath === __filename) {
            continue;
        }
        let file = fs.readFileSync(handlerAbsolutePath, 'utf8');
        if (file.includes("__decorate") && text.every(el => file.includes(el))) {
            await import(handlerRelativePath);
        }
    }
    return Promise.resolve();
}
