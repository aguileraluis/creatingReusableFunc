// Part 3: Thinking Critically 
let obj = {id: '42', name: 'Luis', job: 'software engineer'}; 
let objTwo = {id: '42', name: 'Luis', job: 'software engineer', age: 29}; 

function increaseAge(person) {
  if (person.hasOwnProperty('age')) {
    person.age++; 
  } else {
    person.age = 0; 
  }
  return person; 
}

function copyIncrease(person) {
  let copy = {...person}; 
  if (copy.hasOwnProperty('age')){
    copy.age++; 
  } else {
    copy.age = 0; 
  }
  return copy; 
}


console.log(copyIncrease(obj)); 
console.log(copyIncrease(objTwo)); 



