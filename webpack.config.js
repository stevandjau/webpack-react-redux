//output path have to be absolute path
const path = require('path');

module.exports = {
    //the entry point of our app
    entry: './src/app.js',
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
    }
}

//loader to process files (scss or es6)

