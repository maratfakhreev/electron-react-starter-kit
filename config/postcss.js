const autoprefixer = require('autoprefixer');
const postcssInlineComment = require('postcss-inline-comment');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssColorFunction = require('postcss-color-function');
const postcssPxtorem = require('postcss-pxtorem');

module.exports = webpack => {
  return [
    postcssInlineComment,
    postcssImport({
      addDependencyTo: webpack
    }),
    postcssMixins,
    postcssNested,
    postcssSimpleVars,
    postcssColorFunction,
    postcssPxtorem(),
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ];
};
