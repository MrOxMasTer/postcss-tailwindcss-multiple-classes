const postcss = require("postcss");
const { equal } = require("node:assert");
const { test } = require("node:test");

const plugin = require("./");

async function run(input, output, opts = {}) {
	const result = await postcss([plugin(opts)]).process(input, {
		from: undefined,
	});

	equal(result.css, output);
	equal(result.warnings().length, 0);
}

test("does something", async () => {
	await run(
		"@apply mm:bg-redOrange,text-green;",
		"@apply mm:bg-redOrange mm:text-green;",
		{ separator: ",", opBracket: "(", clBracket: ")" },
	);
});

/* Write tests here



*/
