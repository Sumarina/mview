const path=require('path');
const CleanWepackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    entry:{
        app:'./src/index.js'
    },
    plugins:[
        new CleanWepackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.scss$/,
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