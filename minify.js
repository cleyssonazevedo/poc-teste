const minify = require('@node-minify/core');
const babelMinify = require('@node-minify/babel-minify');
const fs = require('fs');
const path = require('path');

const srcFolder     = path.join("src");
const distFolder    = path.join("dist");

const outputFile = path.join(distFolder, "script.min.js");

function minifyProject() {
    minify({
        compressor: babelMinify,
        input: path.join(srcFolder, "script.js"),
        output: outputFile,
        callback: (err) => err ? console.error(err) : null
    });
}

const exists = fs.existsSync(distFolder);
if (exists && fs.existsSync(outputFile)) fs.rmSync(outputFile)

minifyProject();
