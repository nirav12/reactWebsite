var webpack = require('webpack');
module.exports = {

	context: __dirname+'/src',	
	entry: [
	'react-hot-loader/patch',
	// activate HMR for React

	'webpack-dev-server/client?http://localhost:8080',
	// bundle the client for webpack-dev-server
	// and connect to the provided endpoint

	'webpack/hot/only-dev-server',
	// bundle the client for hot reloading
	// only- means to only hot reload for successful updates

	'./index.js'
	// the entry point of our app
	],

	devtool: 'source-map',
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx']
    },

	devServer: {
		historyApiFallback: true,
		
		hot: true,
		// enable HMR on the server

		contentBase: __dirname+'/dist',
		// match the output path

		publicPath: '/'
		// match the output `publicPath`
	},

    module: {
	    loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
				  presets: ['es2015', 'react']
				}
			}, {
				exclude: /(node_modules|bower_components)/,
				test: /\.js$/,
				loader: 'babel-loader'
			},{
				 test: /\.css$/, 
				 loader: "style-loader!css-loader" 
			},{ 
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, 
				loader: 'url-loader?limit=100000' 
			},{
		        test: /\.json$/,
		        loader: "json-loader"
		    },{
		        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "file-loader"
		    }
	    ]
  	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		
		new webpack.DefinePlugin({
			'__DEV__': JSON.stringify(true),
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates
	],
}

