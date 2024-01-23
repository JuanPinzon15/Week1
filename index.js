console.log('Hello World');

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log("even " + i);
    } else {
      console.log("odd " + i);
    }
  }

  let _ = require('lodash');
  let myVariable = 'blue house';

  console.log(_.camelCase(myVariable));