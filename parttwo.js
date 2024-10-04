// Part 2: Thinking Methodically 
let cellData = [];
let objArray = [];

const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let myData = data.split("\n");

for (let i = 0; i < myData.length; i++) {
  let columns = myData[i];
  let cells = columns.split(",");
  cellData.push(cells);

}

for (let i = 0; i < cellData[0].length; ) {
  headers = cellData[i];
  break;

}

for (let i = 1; i < myData.length; i++){
  let myLoop = (cellData[i]);
  let temp = [];
  let item = {};
  
  for (let i = 0; i < myLoop.length; i++) {
    const values = myLoop;
    item[headers[i].toLowerCase()] = values[i];
    temp.push(item);

  }

  const mergedItem = Object.assign({}, ...temp);
  temp = [];
  item = {};
  objArray.push(mergedItem);

}

objArray.pop();
objArray.splice(1, 0, {id: '48', name: "Barry", occupation: "Runner", age: "25"});
objArray.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});
let average = 0;
let averageNum = 0;

for (const user of objArray) {
   num = Number(user.id);
   average += num;
   averageNum+=1;

}

let averageAge = average / averageNum;

let sorted = objArray.sort((a, b) => {
  let aAge = Number(a.age);
  let bAge = Number(b.age);

  if (aAge < bAge) return -1; 
  return aAge > bAge ? 1 : 0; 
});

let filtered = objArray.filter((person) => Number(person.age) < 50);

const updatedObjArray = objArray.map(object => {

  let newAge = Number(object.age) + 1; 
 
  return {
    id: object.id,
    name: object.name, 
    job: object.occupation, 
    age: newAge.toString()
  }

})

let ages = []; 
let numNumbers = 0; 

for (const user of objArray) {
  ages.push(Number(user.age)); 
  numNumbers += 1; 
}

const sum = ages.reduce((acc, curr) => {
  return acc + curr; 
}, 0);

const averageReducer = sum / numNumbers; 

const averageAgeReducer = averageReducer.toFixed(0); 

console.log(`The array sorted by age:`); 
console.log(sorted); 
console.log(`People that are older than 50:`)
console.log(filtered); 
console.log('Updated array with occupation changed to job and age increased by one:');
console.log(updatedObjArray); 
console.log(`The average age using the reducer function is ${averageAgeReducer}`); 

