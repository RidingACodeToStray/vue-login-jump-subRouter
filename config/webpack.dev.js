const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //打包css
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //打包vue
const optimizeCss = require('optimize-css-assets-webpack-plugin'); //压缩css
module.exports = {
    //打包模式
    mode: "development",
    //入口文件
    entry: {
        main: "./src/main.js"
    },
    //输出文件
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    //模块：例如解读css，图片如何转换压缩等
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    },
    //插件，用于生产模板和各项功能
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app.html', //指定要打包的html路径和文件名
            filename: '../index.html' //指定输出路径和文件名（相对js的路径）
        }),
        new MiniCssExtractPlugin({
            filename: "./main.css" //如果需要将css文件单独放入css文件夹中需要../
        }),
        new VueLoaderPlugin(),
        new optimizeCss()
        // new optimizeCss({
        //     cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
        //     cssProcessorOptions: { 
        //     	discardComments: { removeAll: true } 
        //     },
        //     canPrint: true //是否将插件信息打印到控制台
        // })
    ],
    //给vue配置别名，import引入不用写易长串
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    //配置webpack开发服务功能
    devServer: {

    }
}