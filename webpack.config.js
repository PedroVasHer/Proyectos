const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output:{/*Donde se guardan los archivos resultantes al compilar */
        path: path.resolve(__dirname,'dist'), /*__dirname: es donde estamos y dist es donde van a quedar guardados los archivos al compilar */
        filename: 'bundle.js' //donde quedara guardado el archivo principal para el despliegue
    },
    //resuleve las extensiones del proyecto
    resolve: {
        extensions: ['.js','.jsx']
    },
    //este modulo crea las reglas del proyecto
    module:{
        //revision de archiso js y jsx
        rules:[
            {
            test: /\.(js|jsx)$/,
            exclude: /node-module/, //Se excluye la carpeta de node modules
            use:{
                loader: "babel-loader"
            }
            
        },
        //regla para html
        {
            test: /\.html$/,
            use:[
                {
                    loader: 'html-loader'
                }
            ]
        },
        //regla para css y sass
        {
            test: /\.(s*)css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }),

    ]
}