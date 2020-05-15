const path = require('path');

module.exports = {
    entry: './common.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './com_bundle.js'
    }
};