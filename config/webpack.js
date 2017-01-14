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
            path.resolve(__dirname,"..","node_modules")
        ],
        alias: {
            view: path.resolve(__dirname,"..","..","..","src","app","view"),
            context: path.resolve(__dirname,"..","..","..","src","app","context"),
            lib: path.resolve(__dirname,"..","..","..","src","app","lib"),
        }
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.gif$/, loader: "file-loader" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },

    htmlLoader: {
        //minimize: true,
        removeAttributeQuotes: false
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