
    const { resolve } = require('path');

    module.exports = {
        // 调整打包后静态资源路径问题
        publicPath: '',

        chainWebpack: config => {
            // 配置标题
            config.plugin('html').tap(args => {
                args[0].title = "vue2.0项目模板";
                return args;
            });
        },

        devServer: {
            open: true,
            port: 8080,
            proxy: {
                "^/api": {
                    target: "http://localhost:8080",
                    changeOrigin: true,
                }
            },
        },

        configureWebpack: {
            // sourcemap类型配置
            devtool: 'source-map',

            // 配置模块别名(必须为绝对路径)
            resolve: {
                alias: {
                    $root: resolve('./src/views/root'),
                    $content: resolve('./src/views/content'),
                    $layout: resolve('./src/views/layout'),
                    $aside: resolve('./src/views/aside')
                },
            }
        }
    };