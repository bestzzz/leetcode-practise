const {PromiseTest} = require('.');

const p1 = new PromiseTest((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 1000);
});

const p2 = p1.then(res => {
  console.log(res);
  return new PromiseTest(resolve => {
    setTimeout(() => {
      resolve('p2');
    }, 1000);
  });
});

p2.then(res => {
  console.log(res);
});

const resolveP1 = PromiseTest.resolve(p1);
resolveP1.then(res => console.log(res, 'resolve static'));

const allP1 = PromiseTest.all([p1, p2]);
allP1.then(res => console.log(res, 'all'));


const raceDemo = new PromiseTest((resolve, reject) => {
  setTimeout(() => {
    resolve('raceDemo');
  }, 200);
});
const raceP1 = PromiseTest.race([p1, raceDemo]);
raceP1.then(res => console.log(res, 'race'));
