// Part 1 & 2 -  Refractored and Expanded Functionality

let data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let array = data.split("\n");

// console.log(array);
//---------------------------------
let rows = [];
for (let i = 0; i < array.length; i++){
    rows.push(array[i].split(","));
}
// console.log(rows);
//---------------------------------

// // console.log(newRows);
// Part 3: Transforming Data


let newRows = rows.slice(1);

// console.log(newRows);
// ---------------------------------
  const finalData = newRows.map(row => {
    return {
      id: row[0],
      name: row[1],
      occupation: row[2],
      age: row[3]
    };
  });


//Part 4

//  1. 
 finalData.pop();

//  2. 
let person = { id: "48", name: "Barry", occupation: "Runner", age: "25" } 

  finalData.splice(1, 0, person); 

//   3. 
finalData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

// console.log(finalData);

// 4.
let averageAge;
let ageCombined = 0;

for (let i = 0; i < finalData.length; i++){

  ageCombined += parseInt(finalData[i].age);

 averageAge = ageCombined / finalData.length;
    
}


//Part 5 - As a final task, transform the final set of data back into CSV format.

let show = finalData.map((rows)=> {
    return [rows.id,rows.name,rows.occupation,rows.age].join(",");
  });

let header = 'id,name,occupation,age';
show.unshift(header);


let csvData = show.toString();
console.log(rows);
console.log(finalData);
console.log(show);
console.log(averageAge);
console.log(csvData);