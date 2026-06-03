import * as fs from "node:fs";
import * as path from "node:path";
import { Bench } from "tinybench";
import front from "front-matter";
import gray from "gray-matter";
import raw from "../src/index.js";

const fixturesPath = path.resolve(import.meta.dirname, "fixtures");
const fixtures = fs.readdirSync(fixturesPath);
const suites = [];
const libraries = [
	["front-matter", front],
	["gray-matter", gray],
	["raw-matter", raw],
];
const time = 100;

for (const fixture of fixtures) {
	const { name } = path.parse(fixture);
	const bench = new Bench({ name, time });
	const content = fs.readFileSync(path.join(fixturesPath, fixture), "utf8");

	for (const [library, fn] of libraries) {
		bench.add(library, () => fn(content));
	}

	suites.push(bench);
}

console.time("bench");
const results = await Promise.all(
	suites.map(async (suite) => {
		await suite.run();
		return {
			file: suite.name,
			libraries: Object.fromEntries(
				suite.tasks.map((task) => [
					task.name,
					{
						throughput: {
							p50: Math.round(task.result.throughput.p50),
							mad: Math.round(task.result.throughput.mad),
						},
						samples: task.result.latency.samplesCount,
					},
				]),
			),
		};
	}),
);
console.timeEnd("bench");

console.dir(results, { depth: null });
