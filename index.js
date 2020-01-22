const chalk = require('chalk');

const fizzbuzz = (options = {}) => {
  const log = console.log;
  const { from = 1, to = 100 } = options

  for (let i = from; i <= to; ++i) {
    const test = `${i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}`;
    const val = `${test.length ? test : i}`;
    let color = val === `${i}` ? 'white' : val.length === 4 ? 'blue' : 'red';
    log(chalk[color](val));
  }
};

fizzbuzz({from: 1, to: 100});
