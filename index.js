const CalculatorLexer = require("./tokens.jacoblex.out");
const lexer = new CalculatorLexer();

const CalculatorParser = require("./grammar.jacobgram.out");
const parser = new CalculatorParser();

lexer.setInput(
	"((10 / 2) + 3 /* this is a comment\n   on multiple lines */ - 5) MAX 9 % 5 ^ 2"
);
parser.parse(lexer);
