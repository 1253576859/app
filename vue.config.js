const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    configureWebpack: {
        node: {
            fs: 'empty'
        },
        resolve: {
            fallback: {path: require.resolve('path-browserify')}
        }
    },
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://sph-h5-api.atguigu.cn",
                pathRewrite: {"^/api": ""}
            }
        }
    }
})

