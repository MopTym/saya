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
    }
}