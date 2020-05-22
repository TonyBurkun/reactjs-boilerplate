const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    entry: ['./src/index.jsx', './src/styles/main.scss'],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module:  {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: 'babel-loader',

            },
            {
                test: /\.s[ca]ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
});