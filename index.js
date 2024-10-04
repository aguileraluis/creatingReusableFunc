// Part 1: Thinking Functionally
function sum(numArray) {
let numbers = numArray; 
let sum = 0; 

numbers.forEach((n) => {
  sum += n;

}); 

let averageArray = [6, 7, 8, 9, 10]; 
let sumAverage = 0; 
let divisor = 0; 

averageArray.forEach((n) => {
  sumAverage += n; 
  divisor = divisor + 1;

}); 

console.log(`The sum is ${sum}.`); 

};

sum([1,2,3,4,5]); 

function average(numArray) {
let sumAverage = 0; 
let divisor = 0; 

numArray.forEach((n) => {
  sumAverage += n; 
  divisor = divisor + 1;

}); 

let average = sumAverage / divisor; 

console.log(`The average is ${average}.`); 

}; 

average([1, 2, 3, 4, 5]); 

function strArr(strings){

  let nums = []; 

  strings.forEach((s) => {
    nums.push(s.length)

  }); 

  nums.sort(); 
  let highest = nums.pop()

  strings.forEach((str) => {
    if (str.length === highest) {
      console.log(`${str} is the longest string in the array.`)

    }
  })
}

strArr([`banana`, `apple`, `oears`, `oranges`]); 

function arrayString(arr, num) {

  let strLength = num; 
  let longerArr = []; 

  arr.forEach((item) => {  
    if (item.length > strLength) {
      longerArr.push(item); 
    }

  })

  console.log(`${((longerArr))}`)

}

arrayString(['say', 'hello', 'in', 'the', 'morning'], 3)

function recursion(n) {

  let newNum = n -1; 
  
  if (n > 1) {
    console.log(n)
   recursion(newNum)

  }
}

recursion(10); 

