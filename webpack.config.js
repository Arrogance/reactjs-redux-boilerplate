'use strict';

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
    entry: {
        app: ['./src/code/app.js']
    },
    output: {
        path: './public/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: [ 'es2015', 'react' ] }
            },
            {
                test: /\.sass$/,
                loader: extractCSS.extract(['css','sass'])
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')]
    },
    plugins: [
        extractCSS
    ]
};