module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-typescript",
		"@babel/preset-react",
		"@emotion/babel-preset-css-prop",
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@emotion/babel-plugin",
		[
			"babel-plugin-transform-inline-environment-variables",
			{
				include: ["NODE_ENV"],
			},
		],
	],
	exclude: "node_modules/**",
};
