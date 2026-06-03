const matter = (input, options = {}) => {
	const file = {
		matter: "",
		content: input,
		original: input,
	};

	// Blank file
	if (input === "") {
		return file;
	}

	const open = options.delimiter || "---";
	const close = `\n${open}`;

	if (input.startsWith(open)) {
		// get the length of the opening delimiter
		const openLength = open.length;

		// if the next character after the opening delimiter is
		// a character from the delimiter, then it's not a front-
		// matter delimiter
		if (input[openLength] === open.slice(-1)) {
			return file;
		}

		input = input.slice(openLength);
		const length = input.length;

		// get the index of the closing delimiter
		let closeIndex = input.indexOf(close);
		if (closeIndex === -1) {
			closeIndex = length;
		}

		file.matter = input.slice(0, closeIndex).trim();

		// update file.content
		if (closeIndex === length) {
			file.content = "";
		} else {
			file.content = input.slice(closeIndex + close.length);
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

		// if enabled, get the excerpt defined after front-matter
		const index = file.content.indexOf(delimiter);
		if (index !== -1) {
			file.excerpt = file.content.slice(0, index);
		}
	}

	return file;
};

export default matter;
