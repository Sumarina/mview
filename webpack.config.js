const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack=require('webpack');

module.exports={
    mode:'development',
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js'
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    devtool:'inline-source-map',//调试 定位问题
    plugins:[
        new HtmlWebpackPlugin({
            title:'output management',
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),//显示相对路径 容易查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    module:{
        rules:[{
            test:/\.sass$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test:/\.vue$/,
            loader:'vue-loader'
        }]
    }
}