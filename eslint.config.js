import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: { globals: globals.node },
		rules: {
			"no-console": "warn",
			"no-unused-vars": 2,
			"no-undef": 2,
			"semi": 2
		}
	},
]);
