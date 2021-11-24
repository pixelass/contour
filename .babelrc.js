module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-typescript",
		"@babel/preset-react",
		"@emotion/babel-preset-css-prop",
	],
	plugins: ["@babel/plugin-transform-runtime", "@emotion/babel-plugin"],
	exclude: "node_modules/**",
};
