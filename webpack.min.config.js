var webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'saya.min.js',
        library: ['Saya'],
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-assign']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Saya - Personal JS library for MopTym<moptym@163.com>')
    ],
    devtool: 'source-map'
}