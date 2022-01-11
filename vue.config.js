module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/talk/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    }
}