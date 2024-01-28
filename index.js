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

  let myadd1= 10
  let myadd2= 5
  console.log(_.add(myadd1,myadd2))

  let mydivide1= 20
  let mydivide2= 2
  console.log(_.divide(mydivide1,mydivide2))

  let mysubtract1= 10
  let mysubtract2= 3
  console.log(_.subtract(mysubtract1,mysubtract2))

  let mymultiply1= 10
  let mymultiply2= 10
  console.log(_.multiply(mymultiply1,mymultiply2))

  let str1=_.capitalize("dream");
  let str2=_.capitalize("team");
  console.log(str1,str2);
