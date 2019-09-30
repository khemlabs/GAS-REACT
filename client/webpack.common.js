const path = require('path');

module.exports = {
	entry: {
		app: './client/src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [require('autoprefixer')];
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ['@babel/plugin-transform-runtime'],
					presets: ['@babel/preset-react', '@babel/preset-env']
				}
			}
		]
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			components: path.resolve(__dirname, 'src', 'components'),
			screens: path.resolve(__dirname, 'src', 'screens'),
			scss: path.resolve(__dirname, 'src', 'scss'),
			services: path.resolve(__dirname, 'src', 'services')
		},
		extensions: ['*', '.js', '.jsx', '.json']
	}
};
