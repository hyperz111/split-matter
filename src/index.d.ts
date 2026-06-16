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
	excerpt: boolean | string | ((file: ParseResult, options: Partial<ParseOptions>) => void);
}

/**
 * Parse the string that contains front-matter and return the parsed object.
 * @param {string} input Input string
 * @param {Partial<ParseOptions>} [options] Parser options
 * @return {ParseResult} Result object
 */
export declare const parse: (input: string, options?: Partial<ParseOptions>) => ParseResult;
