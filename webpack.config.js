const path = require('path');

module.exports = {
    entry: './src/colorgen.js',
    output: {
        path: path.resolve(__dirname, 'docs/dist'),
        filename: 'colorgen.js',
        globalObject: 'this',
        library: 'colorgen',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    }
}