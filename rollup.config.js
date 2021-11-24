const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const json = require("@rollup/plugin-json");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");

const createBanner = ({ name, version, author, repository, license }) => `/*!
 * Copyright (c) Gregor Adams
 * @author ${typeof author === "object" ? author.name : author}
 * @license ${license}
 * @name ${name}
 * @version ${version}
 *${
		repository
			? ` @see ${typeof repository === "object" ? repository.url : repository}\n */`
			: "/"
 }`;

const commonPlugins = [
	commonjs(),
	json(),
	babel({
		babelHelpers: "runtime",
		extensions: [".ts", ".tsx"],
	}),
];

module.exports = () => {
	const cwd = process.cwd();
	const pkg = require(path.resolve(cwd, "package.json"));
	const packageExports = pkg.exports
		? Object.keys(pkg.exports)
				.filter(key => key !== ".")
				.map(key => key.replace(/^\.\//, ""))
		: [];
	const tsconfig = path.resolve(cwd, "tsconfig.json");
	const external = [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.dependencies || {}).map(key => new RegExp(`${key}/.*`)),
		...Object.keys(pkg.peerDependencies || {}),
		...Object.keys(pkg.peerDependencies || {}).map(key => new RegExp(`${key}/.*`)),
		"path",
		"fs",
	];
	return [
		{
			input: `src/index.ts`,
			external,
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/index.js`,
					format: "cjs",
				},
			],
			plugins: [
				...commonPlugins,
				typescript({
					tsconfig,
				}),
			],
		},
		{
			input: `src/index.ts`,
			external,
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/esm/index.js`,
					format: "esm",
				},
			],
			plugins: [
				...commonPlugins,
				typescript({
					tsconfig,
					declaration: false,
				}),
			],
		},
		...packageExports.map(packageExport => ({
			input: `src/${packageExport}.ts`,
			external,
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/${packageExport}.js`,
					format: "cjs",
				},
			],
			plugins: [
				...commonPlugins,
				typescript({
					tsconfig,
				}),
			],
		})),
		...packageExports.map(packageExport => ({
			input: `src/${packageExport}.ts`,
			external,
			output: [
				{
					banner: createBanner(pkg),
					file: `dist/esm/${packageExport}.js`,
					format: "esm",
				},
			],
			plugins: [
				...commonPlugins,
				typescript({
					tsconfig,
					declaration: false,
				}),
			],
		})),
	];
};
