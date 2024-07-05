//Part 1
let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let currentCell = '';

for (let i = 0; i < csvString.length; i++) {
    let char = csvString[i];

    if (char === ',') {
        console.log(currentCell);
        currentCell = '';
    } else if (char === '\r' && csvString[i + 1] === '\n') {
        console.log(currentCell);
        currentCell = '';
        i++;
    } else if (char === '\n') {
        console.log(currentCell);
        currentCell = '';
    } else {
        currentCell += char;
    }
}

if (currentCell !== '') {
    console.log(currentCell);
}

//--------Part 2: Expanding Functionality-------

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'

//step 1
let rows = csvData.split('\n').map(row => row.split(','));

//step 2
let columnCount = rows[0].length;

console.log("Number of columns:" , columnCount)

//step 3
let resultArray = rows.map(row => {
    if (row.length !== columnCount) {
        throw new Error('Row length does not match')
    }
    return row;
});

//step 4
let cachedArray = resultArray;

console.log('Two-Dimensional Array:', cachedArray);


//-------Part 3: Transforming Data--------

let data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor's Assistant", "26"]
];

//step 1
let headers = data[0].map(header => header.toLowerCase());

//step 2
let result = data.slice(1).map(row => {
    //we create empty object
    let obj = {}
    row.forEach((value, index) => {
        obj[headers[index]] = value;
    })
    return obj
});

console.log("Transform Data:", result)

// ------Part 4: Sorting and Manipulating Data-----


//step 1
//removes last object from the array
result.pop();

//step 2
result.splice(1, 0,{id: "48", name: "Barry", occupation: "Runner", age: "25"});

//step 3 add new object to end of array
result.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})

console.log("manipulated data:" , result)

//step 4
let totalAge = 0

for (let i = 0; i < result.length; i++) {
    totalAge += parseInt(result[i].age, 10)
}

//calculate the average age 
let averageAge = totalAge / result.length;

//step 5
console.log("Average Age:", averageAge)

// -----Part 5: Full Circle-----

//step 1 Extract headers
let csvHeaders = Object.keys(result[0]).map(header => header.charAt(0).toUpperCase() + header.slice(1));

// Step 2 Convert data rows
let csvRows = result.map(obj => csvHeaders.map(header => obj[header.toLowerCase()]));

// Step 3 Join rows
let finalCsvData = [csvHeaders.join(',')].concat(csvRows.map(row => row.join(','))).join('\n');

// step 4 Log the final CSV data
console.log("Final CSV Data:\n" + finalCsvData);
