// Define the Student interface with four properties: firstName, lastName, age, and location
interface Student {
    firstName: string;   // first name of the student, type string
    lastName: string;    // last name of the student, type string
    age: number;         // age of the student, type number
    location: string;    // location of the student, type string
  }
  
  // Create two student objects that conform to the Student interface
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    location: "London"
  };
  
  // Store the two student objects in an array named studentsList
  const studentsList: Student[] = [student1, student2];
  
  // Create a table element
  const table = document.createElement("table");
  
  // Iterate through each student in the studentsList array
  studentsList.forEach(student => {
    // Create a row element
    const row = document.createElement("tr");
  
    // Create two cells, one for the first name and one for the location
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    // Set the innerHTML of the cells to the first name and location of the current student
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
  
    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    // Append the row to the table
    table.appendChild(row);
  });
  
  // Append the table to the body of the HTML document
  document.body.appendChild(table);
  