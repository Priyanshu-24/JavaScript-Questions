// accepts an array of promises
// resolves or reject as soon as the first promise value or reason

const myPromiseRace = (taskList) => {
  return new Promise((resolve, reject) => {
    taskList.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};
