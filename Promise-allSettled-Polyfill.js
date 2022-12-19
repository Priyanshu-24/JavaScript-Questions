// takes an iterable of promises as an input
// return a single promise that fulfills after all the given promises are fulfilled or rejected
// with an array of object that describes outcome of each promise

const allSettled = (promisesList) => {
  const allPromises = promisesList.map((p) => {
    Promise.resolve(p).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    );
  });

  return Promise.all(allPromises);
};
