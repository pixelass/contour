module.exports = {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-prettier",
		"stylelint-config-styled-components",
		"stylelint-config-property-sort-order-smacss",
	],
	customSyntax: "@stylelint/postcss-css-in-js",
	plugins: ["stylelint-order", "stylelint-a11y"],
	rules: {
		"order/order": ["custom-properties", "declarations"],
		"selector-type-case": [
			"lower",
			{
				ignoreTypes: ["/^\\$\\w+/"],
			},
		],
		"function-name-case": [
			"lower",
			{
				ignoreFunctions: [/^[$[]/, "cssVar", "cssVarChain"],
			},
		],
		"value-keyword-case": [
			"lower",
			{
				ignoreKeywords: ["dummyValue", /^PUBLIC_CSS_VARS/],
			},
		],
		"property-no-unknown": [
			true,
			{
				ignoreProperties: [/^PUBLIC_CSS_VARS/],
			},
		],
		"selector-type-no-unknown": [
			true,
			{
				ignoreTypes: ["/^\\$\\w+/"],
			},
		],
	},
};
