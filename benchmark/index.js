import * as fs from "node:fs";
import * as path from "node:path";

import { format } from "prettier";
import prettierConfig from "../prettier.config.js";
import { Bench } from "tinybench";
import YAML from "js-yaml";

import front from "front-matter";
import gray from "gray-matter";
import { parse as raw } from "../src/index.js";

const fixturesPath = path.resolve(import.meta.dirname, "fixtures");
const fixtures = fs.readdirSync(fixturesPath);
const results = [];
const libraries = [
	["front-matter", front],
	["gray-matter", gray],
	[
		"gray-matter+yaml_disabled",
		(input) =>
			gray(input, {
				engines: {
					yaml: {
						parse: String,
					},
				},
				language: "yaml",
			}),
	],
	["raw-matter", raw],
	[
		"raw-matter+yaml",
		(input) => {
			const result = raw(input);
			if (result.matter !== "") {
				result.data = YAML.safeLoad(result.matter);
			}
			return result;
		},
	],
];

let salt = 0;

for (const fixture of fixtures) {
	const start = Date.now();

	const { name } = path.parse(fixture);
	console.log(`[${name}]`, "Preparing...");

	const bench = new Bench({ name, throws: true });
	const content = fs.readFileSync(path.join(fixturesPath, fixture), "utf8");

	for (const [library, fn] of libraries) {
		bench.add(library, () => fn(`${content}${salt++}`));
	}

	console.log(`[${name}]`, "Benchmarking...");
	await bench.run();
	console.log(`[${name}]`, `Done in ${(Date.now() - start) / 1000}s`);

	results.push({
		file: bench.name,
		libraries: bench.tasks.map((task) => ({
			name: task.name,
			throughput: {
				mean: task.result.throughput.mean,
				rme: task.result.throughput.rme,
			},
			samples: task.result.latency.samplesCount,
		})),
	});
}

let markdown = "# Benchmarks\n\n> This benchmark is using different content (salted) in every iterations.\n\n";

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

const destination = path.resolve(import.meta.dirname, "result.md");
fs.writeFileSync(destination, markdown);
console.log(`Saved to ${destination}!`);
