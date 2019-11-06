//has the job of bundling the files
const path = require('path');//path comes with  nodejs ...read the paths of your files
//The path module provides utilities for working with file and directory paths.
// It can be accessed using:
//const path = require('path');
module.exports = {// exporting an object
    entry: './src/playground/redux-101.js',//entry point //bundle app.js
    output: {//produce an output
        path: path.join(__dirname, 'public'),//path of where the file is
        filename: 'bundle.js'//name if the bundle
    },
    module: { //specifies the rules
        rules: [{
            loader: 'babel-loader',//converts the code into waht the broswer can understand
            test: /\.js$/,//rule that tells babel loader to convert only js files
            exclude: /node_modules///tells babel not to bundle node modules
        },{
            test: /\.s?css$/,//scss another framework,,,only css or scss files ? stands for or
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {//running server....create a server and then checks the contents of the path
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};