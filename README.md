# raw-matter

Low-level front-matter extractor.

Useful when you need to separate the front-matter and the content in the raw format.
This package is NOT parse front-matter to YAML format by default. So, You need to parse
the front-matter by yourself.

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
- `original` **{string}**: Original input string.
- `[excerpt]` **{string}**: Excerpt string.

## Benchmark

See `benchmark/result.md` file in this repository.
You can update it manually by running `pnpm run bench`.

## Credits

Thanks for [`gray-matter`](https://github.com/jonschlinkert/gray-matter), some codes are borrowed from them.

## License

MIT
