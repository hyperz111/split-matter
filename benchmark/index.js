import * as fs from "node:fs";
import * as path from "node:path";

import { Bench } from "tinybench";
import YAML from "js-yaml";

import front from "front-matter";
import gray from "gray-matter";
import raw from "../src/index.js";

const fixturesPath = path.resolve(import.meta.dirname, "fixtures");
const fixtures = fs.readdirSync(fixturesPath);
const suites = [];
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
	const bench = new Bench({ name: path.parse(fixture).name, throws: true });
	const content = fs.readFileSync(path.join(fixturesPath, fixture), "utf8");

	for (const [library, fn] of libraries) {
		bench.add(library, () => fn(`${content}${salt++}`));
	}

	suites.push(bench);
}

const results = await Promise.all(
	suites.map(async (suite) => {
		await suite.run();
		return {
			file: suite.name,
			libraries: suite.tasks.map((task) => ({
				name: task.name,
				throughput: {
					mean: task.result.throughput.mean,
					rme: task.result.throughput.rme,
				},
				samples: task.result.latency.samplesCount,
			})),
		};
	}),
);

let markdown = "# Benchmarks\n\n> This benchmark is using different content (salted) in every iterations.\n\n";

for (const result of results) {
	markdown += `## ${result.file}\n\n\`\`\`text\n`;

	for (const library of result.libraries) {
		markdown += `${library.name} × ${Math.round(library.throughput.mean).toLocaleString("en")} ops/sec ±${library.throughput.rme.toFixed(2)}% (${library.samples.toLocaleString("en")} runs sampled)\n`;
	}

	markdown += "```\n\n";
}

fs.writeFileSync(path.resolve(import.meta.dirname, "result.md"), markdown);
