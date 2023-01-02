// 30

// a function that takes a function as an input and a count
// i.e. function has 2 arguments
// calls the input function once after given count of calls

// different from throttling as throttling restrict time and this one restricts no of call

const sampler = (func, count, context) => {
  let counter = 0;
  return (...args) => {
    context = this ?? context;
    counter++;
    if (counter !== count) return;
    func.apply(context, args);
    counter = 0;
  };
};

function message() {
  console.log("hello");
}
const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // hello
sample();
sample();
sample();
sample(); // hello
