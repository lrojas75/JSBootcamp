const path = require('path');

module.exports = {
    // Tells webpack where to find the code to process.
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}