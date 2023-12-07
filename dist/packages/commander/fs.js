"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocument = void 0;
const promises_1 = require("node:fs/promises");
const path = require('path');
const index_1 = require("../core/index");
async function createDocument(pathOfFileIn, pathOfFileOut) {
    const rootDir = process.cwd();
    const filePath = path.join(rootDir, pathOfFileIn);
    try {
        const file = await (0, promises_1.readFile)(filePath, 'utf-8');
        const documentation = (0, index_1.generateDocumentation)(file);
        let outputPath;
        if (!pathOfFileOut) {
            pathOfFileOut = pathOfFileIn.replace(/\.mjs$/, '');
        }
        if (pathOfFileOut.endsWith('.md')) {
            outputPath = path.join(rootDir, pathOfFileOut);
        }
        else {
            outputPath = path.join(rootDir, pathOfFileOut + '.md');
        }
        (0, promises_1.writeFile)(outputPath, documentation);
    }
    catch (e) {
        throw new Error(e);
    }
}
exports.createDocument = createDocument;
//# sourceMappingURL=fs.js.map