"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocumentation = exports.createMarkdownFromComments = exports.getCommentsFromText = exports.mdSeparator = exports.mdBlankLine = exports.endIdentifier = exports.startIdentifier = void 0;
const fp_1 = require("lodash/fp");
exports.startIdentifier = '/*DOC';
exports.endIdentifier = '*/';
exports.mdBlankLine = '\n\n';
exports.mdSeparator = `${exports.mdBlankLine}---${exports.mdBlankLine}`;
function getCommentsFromText(text) {
    const comments = [];
    let comment = {
        text: '',
        line: null,
    };
    const formattedText = text.split('\n').entries();
    let inComment = false;
    for (const [index, line] of formattedText) {
        if (inComment) {
            if (!line.includes(exports.endIdentifier)) {
                comment.text += line;
            }
            else {
                inComment = false;
                comment.line = index + 2;
                comments.push(comment);
                comment = {
                    text: '',
                    line: null,
                };
            }
        }
        if (line.includes(exports.startIdentifier)) {
            inComment = true;
        }
    }
    return comments;
}
exports.getCommentsFromText = getCommentsFromText;
function createMarkdownFromComments(comments) {
    let markdown = `# Documentation\n  `;
    const markdownComments = comments.map((comment) => {
        return `> ${comment.text}${exports.mdBlankLine}_line ${comment.line}_${exports.mdSeparator}`;
    });
    markdown += markdownComments.join('\n');
    return markdown;
}
exports.createMarkdownFromComments = createMarkdownFromComments;
exports.generateDocumentation = (0, fp_1.compose)(createMarkdownFromComments, getCommentsFromText);
//# sourceMappingURL=index.js.map