const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'file-loader'
            }        
        },
          {
            test: /\.css$/,
            loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]}, {
            test: /\.scss$/,
            loaders: [
               'style?sourceMap',
               'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
               'resolve-url',
               'sass?sourceMap'
           ]
         },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!less-loader"
              }
        ]
    },
    plugins:    [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};