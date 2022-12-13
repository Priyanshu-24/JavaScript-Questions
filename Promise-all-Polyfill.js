// accepts an array of promises
// returns a promise
// resolves when all the promises are resolved with all value of all the resolved promises
// rejects with the reason of the first promise that rejects

// polyfill

const myPromiseAll = (taskList) => {
  let results = [];
  let promiseResolved = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((res) => {
          results[index] = res;
          promiseResolved++;

          if (promiseResolved === taskList.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
