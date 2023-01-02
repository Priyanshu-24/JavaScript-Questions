// 29

// create a toggle function
// that accepts list of arguments
// toggles each of them when invoked in cycle
// return the functions in clockwise direction and then again to the first one
// return the closure

const toggle = (...list) => {
  let current = -1;
  const lenght = list.length;
  return () => {
    current = (current + 1) % lenght;
    return list[current];
  };
};

const hello = toggle("1", "2", "3");
console.log(hello()); // "1"
console.log(hello()); // "2"
console.log(hello()); // "3"
console.log(hello()); // "1"
console.log(hello()); // "2"
