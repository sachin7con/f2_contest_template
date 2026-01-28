/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //SGN Write your code here , just console.log
  arr.map((item, index)=> {
    if(item.profession === "developer"){
      console.log(item);
    }
    
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if(item.profession === "developer"){
      console.log(item);
    }
})
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {
    id:4,
    name: "susan",
    age: "20",
    profession: "intern"
  }
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => {
    return item.profession !== "admin";
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id: 5, name: "mike", age: "22", profession: "developer" },
    { id: 6, name: "anna", age: "21", profession: "intern" },
    { id: 7, name: "robert", age: "23", profession: "admin" },
  ];
  const result = arr.concat(newArr);
  console.log(result);
}
