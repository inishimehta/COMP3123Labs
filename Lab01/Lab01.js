//Nishi Bipin Mehta (101514172)
//COMP3123 (Full-Stack Development I)
//Lab 01


//EXERCISE 01

console.log("---Exercise 01---");
console.log(" ");

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("the quick brown fox"));



//EXERCISE 02

console.log(" ");
console.log("---Exercise 02---");
console.log(" ");

function max(a, b, c) {
  return Math.max(a, b, c);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));



//EXERCISE 03

console.log(" ");
console.log("---Exercise 03---");
console.log(" ");

function right(str) {
  if (str.length < 3) return str;
  return str.slice(-3) + str.slice(0, str.length - 3);
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));



//EXERCISE 04

console.log(" ");
console.log("---Exercise 04---");
console.log(" ");

function angle_Type(angle) {
  if (angle < 90) return "Acute angle";
  else if (angle === 90) return "Right angle";
  else if (angle < 180) return "Obtuse angle";
  else if (angle === 180) return "Straight angle";
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));



//EXERCISE 05

console.log(" ");
console.log("---Exercise 05---");
console.log(" ");

function array_max_sum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
