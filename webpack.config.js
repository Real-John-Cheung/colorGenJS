const path = require('path');

module.exports = {
    entry: './src/colorgen.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'colorgen.js',
        globalObject: 'this',
        library: {
            name: 'ColorGen',
            type: 'umd',
        }
    }
}