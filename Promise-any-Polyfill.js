// accepts an iterable of promises
// returns a promise
// resolves as the first promise resolves with it's value
// rejects with all the promise rejected reason

// opposite of promise.all()

// polyfill

const myPromiseAny = (taskList) => {
  let errors = [];
  let rejectCount = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errors[rejectCount] = err;
          rejectCount++;

          if (rejectCount === taskList.length) {
            reject(errors);
          }
        });
    });
  });
};
