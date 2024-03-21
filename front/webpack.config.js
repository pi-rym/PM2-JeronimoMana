const path = require('path');

module.exports = [
    {
        entry: './scripts/index.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle_index.js',
        },
    },
    {
        entry: './scripts/masPopulares.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle_masPopulares.js',
        },
    }
];