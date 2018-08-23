const merge=require('webpack-merge');
const common=require('./webpack.commom.js');

module.exports=merge(common,{
    mode:'development',
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    }
})