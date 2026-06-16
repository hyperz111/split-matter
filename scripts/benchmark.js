import * as fs from "node:fs";
import * as path from "node:path";

import { format } from "prettier";
import prettierConfig from "../prettier.config.js";
import { Bench } from "tinybench";
// @ts-ignore -- @types/js-yaml isn't installed
import yaml from "js-yaml";

import front from "front-matter";
import gray from "gray-matter";
import { parse as raw } from "../src/index.js";

/**
 * @typedef {Object} BenchLibrary
 * @property {string} name
 * @property {{ mean: number, rme: number }} throughput
 * @property {number} samples
 */

/**
 * @typedef {Object} BenchResult
 * @property {string} file
 * @property {Array<BenchLibrary>} libraries
 */

const fixturesPath = path.resolve(import.meta.dirname, "fixtures");
const fixtures = fs.readdirSync(fixturesPath);
/** @type {Array<BenchResult>} */
const results = [];
/** @type {Array<[string, (input: string) => any]>} */
const libraries = [
	// @ts-ignore -- "has no call signature"?
	["front-matter", (input) => front(input, {})],
	// Disable gray-matter internal cache
	["gray-matter", (input) => gray(input, {})],
	[
		"gray-matter+yaml_disabled",
		(input) =>
			gray(input, {
				engines: {
					yaml: {
						parse: Object,
					},
				},
				language: "yaml",
			}),
	],
	["split-matter", raw],
	[
		"split-matter+yaml",
		(input) => {
			const result = raw(input);
			if (result.matter !== "") {
				// @ts-ignore -- Parse method
				result.data = yaml.safeLoad(result.matter);
			}
			return result;
		},
	],
];

for (const fixture of fixtures) {
	const start = Date.now();

	const { name } = path.parse(fixture);
	console.log(`[${name}]`, "Preparing...");

	const bench = new Bench({ name, throws: true });
	const content = fs.readFileSync(path.join(fixturesPath, fixture), "utf8").trim();

	for (const [library, fn] of libraries) {
		bench.add(library, () => fn(content));
	}

	console.log(`[${name}]`, "Benchmarking...");
	await bench.run();
	console.log(`[${name}]`, `Done in ${(Date.now() - start) / 1000}s`);

	results.push({
		file: /** @type {string} */ (bench.name),
		libraries: bench.tasks.map((task) => ({
			name: task.name,
			throughput: {
				// @ts-expect-error -- exist
				mean: task.result.throughput.mean,
				// @ts-expect-error -- exist
				rme: task.result.throughput.rme,
			},
			// @ts-expect-error -- exist
			samples: task.result.latency.samplesCount,
		})),
	});
}

let markdown = "# Benchmarks\n\n";

for (const result of results) {
	markdown += `## ${result.file}\n\n\`\`\`text\n`;

	for (const library of result.libraries) {
		markdown += `${library.name} × ${Math.round(library.throughput.mean).toLocaleString("en")} ops/sec ±${library.throughput.rme.toFixed(2)}% (${library.samples.toLocaleString("en")} runs sampled)\n`;
	}

	markdown += "```\n\n";
}

markdown = await format(markdown, {
	...prettierConfig,
	parser: "markdown",
});

const destination = path.resolve(import.meta.dirname, "benchmark.md");
fs.writeFileSync(destination, markdown);
console.log(`Saved to ${destination}!`);
