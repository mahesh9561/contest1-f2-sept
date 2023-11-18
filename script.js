const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

const data1 = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (const person of data) {
    if (person.profession.toLowerCase() === "developer") {
      console.log(person);
    }
  }
}

// 2. Add Data
function addData() {
  const name = prompt("Enter Name: ");
  const age = prompt("Enter age:");
  const profession = prompt("Enter profession:");

  const newData = { name, age, profession };
  data.push(newData);
  console.log("Data added successfully:");
  console.log(newData);
}

// 3. Remove Admins
function removeAdmin() {
  const nonAdmin = data.filter(
    (person) => person.profession.toLowerCase() !== "admin"
  );
  data.length = 0;
  data.push(...nonAdmin);
  console.log("Data successfull removed");
}

// 4. Concatenate Array
function concatenateArray() {
  const concatinationArr = data.concat(data1);
  console.log(concatinationArr);
  console.log("Concatinaton Successfull");
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;

  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  if (isAbove25) {
    console.log("At least one person is older than 25.");
  } else {
    console.log("No person is older than 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set(data.map((person) => person.profession));
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);

  console.log("Unique Professions:");
  console.log(uniqueProfessionsArray);
}

// 8. Sort by Age f
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  console.log("Sorted Array by Age (Ascending):");
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name.toLowerCase() === "john");

  if (john) {
    john.profession = "manager";
    console.log("John's profession updated to 'manager':");
    console.log(data);
  } else {
    console.log("John not found in the array.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const totalDevelopers = data.filter(
    (person) => person.profession.toLowerCase() === "developer"
  ).length;
  const totalAdmins = data.filter(
    (person) => person.profession.toLowerCase() === "admin"
  ).length;

  console.log("Total Developers:", totalDevelopers);
  console.log("Total Admins:", totalAdmins);
}
