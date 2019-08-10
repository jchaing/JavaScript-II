// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, arrayLength => console.log(arrayLength)); // 4

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, last => console.log(last)); // Gum

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sumCalc = x + y;
  return cb(sumCalc);
}

sumNums(2, 4, sum => console.log(sum)); // 6

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiCalc = x * y;
  return cb(multiCalc);
}

multiplyNums(5, 5, multiply => console.log(multiply)); // 25

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

contains('Gum', items, bool => console.log(bool)); // true
contains('Yum', items, bool => console.log(bool)); // false
contains('yo-yo', items, bool => console.log(bool)); // true

/* STRETCH PROBLEM */

const dupArrays = ['john', 'john', 'jen', 'joe', 'james', 'jane', 'james'];

// filter and indexOf array methods
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDuplicates = array.filter(
    (name, index) => array.indexOf(name) >= index
  );
  cb(noDuplicates);
}

removeDuplicates(dupArrays, noDup => console.log(noDup)); // [ 'john', 'jen', 'joe', 'james', 'jane' ]

// from method and Set object
function removeDups(array, cb) {
  const remove = Array.from(new Set(array));
  cb(remove);
}

removeDups(dupArrays, newArray => console.log(newArray)); // [ 'john', 'jen', 'joe', 'james', 'jane' ]
