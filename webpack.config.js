const webpack = require('webpack');
const path = require('path');

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'source-map';
    config.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM'
    };

}
else {
    config.devtool = 'cheap-module-source-map'

    config.devServer = {
        contentBase: path.resolve(__dirname, 'public'),
        clientLogLevel: 'none',
        quiet: true,
        port: 8000,
        compress: true,
        hot: true,
        historyApiFallback: {
            disableDotRule: true
        }
    };
    config.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ];
}

module.exports = config;