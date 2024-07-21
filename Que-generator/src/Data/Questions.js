export const javascriptQues = [
    {   
      question:
        "1. Which of the following code snippets does not correctly declare a variable in JavaScript?",
      questionDescription:
        "Consider the variable `x` that needs to be declared.",
      options: ["var x = 10;", "const x = 10;", "let x = 10;", "int x = 10;"],
      answer: [3],
      explanation:
        "In JavaScript, variables can be declared using the `var`, `const`, or `let` keyword. The correct options are `var x = 10;`, `const x = 10;`, and `let x = 10;`.",
    },
    {
      question:
        "2. What will be the output of the following JavaScript code?\n```javascript\nconsole.log(5 + '5');```",
      questionDescription: "The code concatenates a number and a string.",
      options: ["55", "10", "NaN", "Error"],
      answer: [0],
      explanation:
        "When a number is concatenated with a string in JavaScript, the number is implicitly converted to a string and then concatenated. The correct option is `55`.",
    },
    {
      question:
        "3. Which of the following code snippets correctly displays a message on the web page using JavaScript?",
      questionDescription:
        "Consider the HTML element with the id `message`. The JavaScript code should display a message inside this element.",
      options: [
        "document.getElementById('message').innerHTML = 'Hello, World!';",
        "document.querySelector('message').innerHTML = 'Hello, World!';",
        "document.getElementById('#message').innerHTML = 'Hello, World!';",
        "document.querySelector('.message').innerHTML = 'Hello, World!';",
      ],
      answer: [0],
      explanation:
        "To display a message on the web page using JavaScript, we need to select the HTML element with the appropriate id or tag name. The correct options are `document.getElementById('message').innerHTML = 'Hello, World!';` and `document.querySelector('#message').innerHTML = 'Hello, World!';`.",
    },
    {
      question:
        "4. What will be the output of the following JavaScript code?\n```javascript\nconsole.log(10 < '5');```",
      questionDescription:
        "The code compares a number and a string using the less than operator.",
      options: ["true", "false", "NaN", "Error"],
      answer: [1],
      explanation:
        "When comparing a number and a string in JavaScript, the string is converted to a number before the comparison is made. If the string cannot be converted to a valid number, the result is `NaN`. The correct option is `false`.",
    },
 
    {
      question:
        "5. Which of the following code snippets does not correctly define a function in JavaScript?",
      questionDescription:
        "Consider the function `multiply` that takes two parameters `a` and `b` and returns their product.",
      options: [
        "function multiply(a, b) { return a * b; }",
        "var multiply = function(a, b) { return a * b; };",
        "const multiply = (a, b) => { return a * b; };",
        "int multiply(int a, int b) { return a * b; };",
      ],
      answer: [3],
      explanation:
        "In JavaScript, functions can be defined using the `function` keyword or as arrow functions. The correct options are `function multiply(a, b) { return a * b; }`, `var multiply = function(a, b) { return a * b; };`, and `const multiply = (a, b) => { return a * b; };`.",
    },
  ]
