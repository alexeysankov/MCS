var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

var argv = require('minimist')(process.argv.slice(2));

var apiHost;
var setupAPI = function () {
    switch (process.env.NODE_ENV) {
        case "Prod":
            // apiHost = "'http://192.168.50.64:8080'";
            // break;
        case "ciDev":
            // apiHost = "'http://192.168.50.137:8080'";
            // break;
        case "development":
        default:
            apiHost = "'http://localhost:4200'";
            break;
    }
}
setupAPI();

module.exports = {
    // exprContextCritical: false,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    output: {
        path: path.resolve('./src/output'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.js', '.ts', 'css']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: 'url-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "to-string-loader",
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "to-string-loader",
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new webpack.DefinePlugin({
            __API__: apiHost
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            "/api/**": {
                target: "http://localhost:5000",
                secure: false,
                cache: false,
                changeOrigin: true
            }
        }
    }
};
