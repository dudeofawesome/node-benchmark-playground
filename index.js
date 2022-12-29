const { Suite } = require('benchmark');
const suite = new Suite();

const suite_name = process.argv[2];
console.info(`Running suite ${suite_name}\n`);
const suite_cases = require(`./benchmarks/${suite_name}`);

for (const suite_case in suite_cases) {
  suite.add(suite_case, suite_cases[suite_case]);
}
suite
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('');
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
