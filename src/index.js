/* @ts-self-types="./index.d.ts" */

// From https://github.com/jonschlinkert/gray-matter

export const parse = (input, options = {}) => {
	const file = {
		matter: "",
		content: input,
	};

	if (input === "") {
		return file;
	}

	const open = options.delimiter || "---";

	if (input.startsWith(open)) {
		const openLength = open.length;

		if (input[openLength] === open[openLength - 1]) {
			return file;
		}

		input = input.slice(openLength);
		const length = input.length;

		let closeIndex = input.indexOf(`\n${open}`);
		if (closeIndex === -1) {
			closeIndex = length;
		}

		file.matter = input.slice(0, closeIndex);

		if (closeIndex === length) {
			file.content = "";
		} else {
			file.content = input.slice(closeIndex + openLength + 1);

			if (file.content[0] === "\r") {
				file.content = file.content.slice(1);
			}
			if (file.content[0] === "\n") {
				file.content = file.content.slice(1);
			}
		}
	}

	if (typeof options.excerpt === "function") {
		options.excerpt(file, options);
	} else if (options.excerpt) {
		const delimiter = typeof options.excerpt === "string" ? options.excerpt : open;

		const index = file.content.indexOf(delimiter);
		if (index !== -1) {
			file.excerpt = file.content.slice(0, index);
		}
	}

	return file;
};
