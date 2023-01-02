// 31

// sleep function halts the function execution for the given amount of time
// many launguages have their inbuild sleep function
// javascript doesnot have any inbuild sleep function
// we can implement it using promises

const sleep = (miliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};

// using .then
sleep(2000).then(() => {
  //do stuff
  console.log("I run after 2000 milliseconds");
});

// using async await
const performAction = async () => {
  await sleep(4000);
  console.log("I run after 4000 milliseconds");
};
performAction();
