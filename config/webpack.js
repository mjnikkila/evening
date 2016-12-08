var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname,"..","..","..","init.js"),

    output: {
        path: path.resolve(__dirname,"..","..","..","app"),
        filename: "bundle.js"
    },

    resolve: {
        root: [
            path.resolve(__dirname,"..","src","lib"), // todo: If there is nothing more than this consider putting it as an alias
            path.resolve(__dirname,"..","node_modules")
        ],
        alias: {
            view: path.resolve(__dirname,"..","..","..","src","app","view"),
            context: path.resolve(__dirname,"..","..","..","src","app","context")
        }
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.gif$/, loader: "file-loader" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $ : "jquery",
            Backbone : "backbone",
            _ : "underscore"
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};