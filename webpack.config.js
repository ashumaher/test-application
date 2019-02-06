module.exports = {
    mode: 'production',
    entry: {
        application: __dirname + '/src/application/entry.js'
    },
    output: {
        path: __dirname + '/out/assets/js/',
        filename: "[name].[hash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    ignore: '/node_modules/'
                }
            }]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    }
};