var path = require("path");
var webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        root: [
            path.resolve(__dirname,"..","node_modules")
        ],
        alias: {
            view: path.resolve(__dirname,"..","test","app","view"),
            context: path.resolve(__dirname,"..","test","app","context")
        }
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $ : "jquery",
            _ : "underscore",
            Backbone : "backbone"
        })
    ]
};