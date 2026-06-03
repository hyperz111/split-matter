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

### `parse(input, options?)`

Parse the string that contains front-matter and return the parsed object.

Parameters:

- `input` **{String}**: Input string.
- `[options]` **{Object}**: Parser options.
  - `[delimiter]` **{String}**: Front-matter delimiter.
  - `[excerpt]` **{Boolean|String|Function}**: Include excerpt or not?

Returns: **{Object}**

- `matter` **{String}**: Front-matter block string, You can parse this.
- `content` **{String}**: Input content under the front-matter.
- `original` **{String}**: Original input string.
- `[excerpt]` **{String}**: Excerpt string.

## License

MIT
