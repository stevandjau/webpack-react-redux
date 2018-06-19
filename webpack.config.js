//output path have to be absolute path
const path = require('path');

module.exports = {
    //the entry point of our app
    entry: './playground/redux101.js',
    output: {
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
}

//loader to process files (scss or es6)

