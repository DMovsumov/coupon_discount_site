const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

const styleLoader = ext => {
    const loader = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
    },'css-loader']

    if(ext){
        loader.push(ext)
    }
    return loader
}


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analitic: './src/JS/analitics/analitic.js',
        admin: './src/JS/admin/admin.js',
        admin_analitic: './src/JS/admin/admin_analitic.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'SkidWood',
            template: './src/index.html',
            chunks: ['main', 'analitic']
        }),
        new HTMLWebpackPlugin({
            filename: 'admin',
            title: 'Admin Panel',
            template: './src/admin.html',
            chunks: ['admin', 'admin_analitic']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })        
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: styleLoader()
            },
            {
                test: /\.s[ac]ss$/,
                use: styleLoader('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                loader: ['svg-inline-loader']
            }
        ]
    }
}