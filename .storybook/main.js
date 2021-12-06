const path = require("path");

const toPath = path_ => path.join(process.cwd(), path_);

module.exports = {
	reactOptions: {
		fastRefresh: true,
		strictMode: true,
	},
	stories: [
		"../stories/introduction.stories.mdx",
		"../stories/docs/getting-started.stories.mdx",
		"../stories/docs/configuration.stories.mdx",
		"../stories/docs/components/grid.stories.mdx",
		"../stories/docs/components/row.stories.mdx",
		"../stories/docs/components/column.stories.mdx",
		"../stories/docs/components/breakout-column.stories.mdx",
		"../**/*.stories.@(tsx|mdx)",
	],
	addons: [
		"@storybook/addon-docs",
		{
			name: "@storybook/addon-essentials",
			options: {
				actions: false,
				controls: false,
				measure: false,
				outline: false,
				backgrounds: false,
			},
		},
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("babel-loader"),
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript",
							"@babel/preset-react",
							"@emotion/babel-preset-css-prop",
						],
						plugins: ["@babel/plugin-transform-runtime", "@emotion/babel-plugin"],
					},
				},
			],
		});
		config.resolve.alias = {
			...config.resolve.alias,
			"@emotion/core": toPath("node_modules/@emotion/react"),
			"emotion-theming": toPath("node_modules/@emotion/react"),
			"@contour/hooks": toPath("packages/hooks/src"),
			"@contour/react": toPath("packages/react/src"),
			"@contour/theme": toPath("packages/theme/src"),
			"@contour/utils": toPath("packages/utils/src"),
		};
		return config;
	},
	core: {
		builder: "webpack5",
	},
};
