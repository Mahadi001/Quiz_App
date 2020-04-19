const qBank = [
  {
    question:
      "Which of the following equivalence operations evaluates to true if the two operands are not of the same data type or do not have the same value?",
    answers: ["!==", "===", "!=", "=="],
    correct: "!==",
    questionId: "099099"
  },
  {
    question:
      'Which of the following options is/are correct regarding variable scopes in PHP?',
    answers: ["script, function and class", "class, global and script", "global, function and class", "global, script and function"],
    correct: "global, function and class",
    questionId: "183452"
  },
  {
    question:
      "Which one of the following four logical operators of PHP is not binary?",
    answers: ["AND", "NOT", "XOR", "OR"],
    correct: "NOT",
    questionId: "267908"
  },
  {
    question: "Which of the following operators has the highest precedence order?",
    answers: [
      "--",
      "-",
      "++",
      "["
    ],
    correct: "[",
    questionId: "333247"
  },
  {
    question: "Which of the following will you use to iterate a PHP associative array?",
    answers: ["foreach", "for in", "while", "for"],
    correct: "foreach",
    questionId: "496293"
  }  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
