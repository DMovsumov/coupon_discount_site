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
        main: ['@babel/polyfill', './src/index.js'],
        analitic: './src/JS/analitics/analitic.js',
        admin: './src/JS/admin/admin.js',
        admin_analitic: './src/JS/admin/admin_analitic.js',
        service: './src/JS/views_scripts/service.js',
        partners: './src/JS/views_scripts/partners.js',
        contacts: './src/JS/views_scripts/contacts.js',
        journal: './src/JS/journal/journal.js'
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
            filename: 'admnfngfn',
            title: 'Admin Panel',
            template: './src/admnfngfn.html',
            chunks: ['admin', 'admin_analitic']
        }),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: 'about_service',
            title: 'About_service',
            template: './src/views/about_service.html',
            chunks: ['service']
        }),
        new HTMLWebpackPlugin({
            filename: 'partners',
            title: 'Partners',
            template: './src/views/partners.html',
            chunks: ['partners']
        }),
        new HTMLWebpackPlugin({
            filename: 'journal',
            title: 'SkidWood_Journal',
            template: './src/journal.html',
            chunks: ['journal']
        }),
        new HTMLWebpackPlugin({
            filename: 'contacts',
            title: 'Contacts',
            template: './src/views/contacts.html',
            chunks: ['contacts']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/assets/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
        }])        
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
            },
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                } 
            }
        ]
    }
}