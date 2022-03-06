import { promises } from "fs";
import path from "path";
import process from "process";

const { writeFile } = promises;
const cwd = process.cwd();
const build = process.argv.includes("--build");

(async () => {
	console.log("Generated package names as JSON");
	const { default: tsconfig } = await import("./tsconfig.tpl.json");
	if (build) {
		await writeFile(path.resolve(cwd, "tsconfig.json"), JSON.stringify(tsconfig, null, 4));
	} else {
		const paths = {
			"@contour/hooks": ["./packages/hooks/src"],
			"@contour/hooks/*": ["./packages/hooks/src/*"],
			"@contour/react": ["./packages/react/src"],
			"@contour/theme": ["./packages/theme/src"],
			"@contour/theme/*": ["./packages/theme/src/*"],
			"@contour/utils": ["./packages/utils/src"],
			"@contour/utils/*": ["./packages/utils/src/*"],
		};
		await writeFile(
			path.resolve(cwd, "tsconfig.json"),
			JSON.stringify(
				{
					...tsconfig,
					compilerOptions: {
						...tsconfig.compilerOptions,
						baseUrl: "./",
						paths,
					},
				},
				null,
				4
			)
		);
	}

	console.log("Added package aliases to tsconfig");
})();
