const path = require('path');

module.exports = {
    cache: true,
    entry: ['./app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0']
                }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=image/svg+xml"
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        port: 3000
    }
}
