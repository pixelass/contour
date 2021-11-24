const path = require("path");

const toPath = path_ => path.join(process.cwd(), path_);

module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["/dist/"],
	verbose: false,
	setupFilesAfterEnv: ["jest-enzyme"],
	testEnvironment: "enzyme",
	moduleNameMapper: {
		"^@contour/hooks": toPath("packages/hooks/src"),
		"^@contour/react": toPath("packages/react/src"),
		"^@contour/theme": toPath("packages/theme/src"),
		"^@contour/utils": toPath("packages/utils/src"),
	},
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform)",
	],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	globals: {
		"ts-jest": {
			tsConfig: "./tsconfig.json",
		},
	},
};
