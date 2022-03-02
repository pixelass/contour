/**
 * {@see https://eslint.org/docs/user-guide/configuring/rules}
 */
module.exports = {
	env: ["browser", "node"],
	extends: ["xo-react"],
	ignores: ["lib", "public", "*.config.js", "node_modules", "**/*.d.ts", "docs", "stories"],
	overrides: [
		{
			files: "**/__tests__/*.{ts,tsx}",
			globals: ["test", "expect"],
			rules: {
				"import/no-extraneous-dependencies": 0,
				"unicorn/no-fn-reference-in-iterator": 0,
			},
		},
		{
			files: "**/*.stories.{ts,tsx}",
			rules: {
				"import/no-extraneous-dependencies": 0,
			},
		},
		{
			files: "**/*.{ts,tsx}",
			rules: {
				"@typescript-eslint/consistent-type-assertions": [
					1,
					{
						assertionStyle: "as",
						objectLiteralTypeAssertions: "allow-as-parameter",
					},
				],
				"import/no-extraneous-dependencies": 1,
				"react/prop-types": 0,
				"react/display-name": 0,
				"arrow-body-style": 0,
				"@typescript-eslint/triple-slash-reference": 0,
				"@typescript-eslint/no-unsafe-member-access": 0,
				"import/extensions": [
					1,
					{
						js: "never",
						jsx: "never",
						ts: "never",
						tsx: "never",
						css: "always",
						json: "always",
					},
				],
			},
		},
	],
	plugins: ["prettier"],
	prettier: true,
	rules: {
		"unicorn/no-unreadable-array-destructuring": 0,
		"unicorn/prefer-node-protocol": 0,
		"import/order": 0,
	},
};
