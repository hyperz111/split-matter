# raw-matter

Low-level front-matter extractor.

Useful when you **ONLY** need to separate a front-matter and a content as its string block.

## Install

```text
npm install raw-matter
```

## Usage

```js
import { parse } from "raw-matter";
// NOTE: this example is using js-yaml@3 (legacy)
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
//   matter: '\ntitle: Hello\ndescription: greating',
//   content: 'Hello world'
// }

// Now you can parse the front-matter
const data = yaml.safeLoad(parsed.matter);
console.log(data);
// { title: 'Hello', description: 'greating' }
```

## API

### `parse(input, options?)`

Parse the string that contains front-matter and return the parsed object.

Parameters:

- `input` **{string}**: Input string.
- `[options]` **{object}**: Parser options.
- `[options.delimiter]` **{string}**: Front-matter delimiter.
- `[options.excerpt]` **{boolean|string|function}**: Include excerpt or not?

Returns: **{object}**

- `matter` **{string}**: Front-matter block string, You can parse this.
- `content` **{string}**: Input content under the front-matter.
- `[excerpt]` **{string}**: Excerpt string.

## Benchmark

See `scripts/benchmark.md` file in this repository.
You can update it manually by running `pnpm run bench`.

## Credits

Thanks for [`gray-matter`](https://github.com/jonschlinkert/gray-matter), some codes are borrowed from them.
I **ONLY** grab the content separation logic.

## License

MIT
