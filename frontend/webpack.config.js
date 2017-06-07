entry: {
  'app': './src/main.ts'
},
output: {
  filename: 'app.js'
},
module: {
	rules: [
	  {
	    test: /\.ts$/,
	    loader: 'awesome-typescript-loader'
	  },
	  {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
      	test: /\.js$/,
	    loader: 'babel',
	    exclude: /node_modules/
      },
	  {
	    test: /\.css$/,
	    loaders: 'style-loader!css-loader'
	  }
	]
}