var webpack = require('webpack')
var npmCfg = require('../package.json')

var banner = [
    'Saya v' + npmCfg.version,
    '(c) ' + (new Date().getFullYear()) + ' ' + npmCfg.author,
    'Released under the ' + npmCfg.license + ' License.',
    'Homepage - ' + npmCfg.homepage
].join('\n')

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'saya.js',
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
        new webpack.BannerPlugin(banner)
    ]
}