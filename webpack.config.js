module.exports = {
    cache: true,
    entry: {
        index: './index'
    },
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader'
        }]
    }
};