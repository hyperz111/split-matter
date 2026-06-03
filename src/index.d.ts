export interface ParseResult {
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

export interface ParseOptions {
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

/**
 * Parse the string that contains front-matter and return the parsed object.
 * @param {string} input input string
 * @param {Partial<ParseOptions>} [options] parse options
 * @return {ParseResult} result object
 */
declare const parse: (input: string, options?: Partial<ParseOptions>) => ParseResult;

export default parse;
