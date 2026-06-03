# raw-matter

Low-level front-matter extractor.

Useful when you need to separate the front-matter and the content, and you want to parse the front-matter by yourself.

## Install

```text
npm install raw-matter
```

## Usage

```js
import parse from "raw-matter";
import yaml from "js-yaml";

// Input string
const input = `---
title: Hello
description: greating
---
Hello world`;

// Extract the input
const parsed = parse(input);
console.log(parsed);
// {
//   matter: 'title: Hello\ndescription: greating',
//   content: 'Hello world',
//   original: '---\ntitle: Hello\ndescription: greating\n---\nHello world'
// }

// Now you can parse the front-matter
const data = yaml.safeLoad(parsed.matter);
console.log(data);
// { title: 'Hello', description: 'greating' }
```

## API

### `parse(input: string, options?: ParseOptions): ParseResult`

Parse the string that contains front-matter and return the parsed object.

### `ParseOptions` <sup>type</sup>

```ts
interface ParseOptions {
	/**
	 * Front-matter delimiter
	 */
	delimiter: string;
	/**
	 * Include excerpt or not?
	 *
	 * - `false`: don't include the excerpt
	 * - `true`: include the excerpt that separated with {@link ParseOptions["delimiter"]}
	 * - `string`: include the excerpt that separated with this string
	 * - `Function`: function to control how the excerpt is parsed and added
	 */
	excerpt: boolean | string | ((file: ParseResult, options: ParseOptions) => void);
}
```

### `ParseResult` <sup>type</sup>

```ts
interface ParseResult {
	/**
	 * Front-matter block string, You can parse this.
	 */
	matter: string;
	/**
	 * Input content under the front-matter.
	 */
	content: string;
	/**
	 * Original input string.
	 */
	original: string;
	/**
	 * Excerpt string.
	 */
	excerpt?: string;
}
```

## License

MIT
