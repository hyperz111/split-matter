import { describe, test } from "node:test";
import * as assert from "node:assert/strict";
import { parse } from "../src/index.js";

describe("split-matter", () => {
	/**
	 * @param {Array<string>} lines
	 * @return {string}
	 */
	const createString = (lines = []) => lines.join("\n");

	test("normal input", () => {
		const input = createString(["---", "title: Hello", "description: for you", "---", "Hello world"]);

		assert.deepEqual(parse(input), {
			matter: createString(["", "title: Hello", "description: for you"]),
			content: createString(["Hello world"]),
		});
	});

	test("without front-matter", () => {
		const input = createString(["Hello world"]);

		assert.deepEqual(parse(input), {
			matter: createString([]),
			content: createString(["Hello world"]),
		});
	});

	test("without closer", () => {
		const input = createString(["---", "title: Hello", "description: for you"]);

		assert.deepEqual(parse(input), {
			matter: createString(["", "title: Hello", "description: for you"]),
			content: createString([]),
		});
	});

	test("custom delimiter", () => {
		const input = createString(["+++", "title: Hello", "description: for you", "+++", "Hello world"]);

		assert.deepEqual(parse(input, { delimiter: "+++" }), {
			matter: createString(["", "title: Hello", "description: for you"]),
			content: createString(["Hello world"]),
		});
	});

	describe("excerpt", () => {
		test("true", () => {
			const input = createString(["---", "title: Hello", "description: for you", "---", "My world", "---", "Hello world"]);

			assert.deepEqual(parse(input, { excerpt: true }), {
				matter: createString(["", "title: Hello", "description: for you"]),
				content: createString(["My world", "---", "Hello world"]),
				excerpt: createString(["My world", ""]),
			});
		});

		test("string", () => {
			const input = createString(["---", "title: Hello", "description: for you", "---", "My world", "+++", "Hello world"]);

			assert.deepEqual(parse(input, { excerpt: "+++" }), {
				matter: createString(["", "title: Hello", "description: for you"]),
				content: createString(["My world", "+++", "Hello world"]),
				excerpt: createString(["My world", ""]),
			});
		});

		test("Function", () => {
			const input = createString([
				"---",
				"title: Hello",
				"description: for you",
				"---",
				"My world",
				"> more v",
				"Hello world",
			]);

			assert.deepEqual(
				parse(input, {
					excerpt: (file) => {
						const mark = "> more v";
						const index = file.content.indexOf(mark);
						file.excerpt = file.content.slice(0, index);
						file.content = file.content.slice(index + mark.length).trimStart();
					},
				}),
				{
					matter: createString(["", "title: Hello", "description: for you"]),
					content: createString(["Hello world"]),
					excerpt: createString(["My world", ""]),
				},
			);
		});
	});
});
