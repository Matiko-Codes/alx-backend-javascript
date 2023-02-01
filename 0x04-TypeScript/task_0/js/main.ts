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
    location: "Nairobi"
  };
  
  const student2: Student = {
    firstName: "Alex",
    lastName: "Sanchez",
    age: 29,
    location: "Cairo"
  };
  
  // Store the two student objects in an array named studentsList
  const studentsList: Student[] = [student1, student2];
  
  /**
   * Function to render a table from the studentsList array
   * @param {Student[]} studentsList - an array of Student objects
   */
  const renderTable = (studentsList: Student[]): void => {
    // Create a table element
    const table = document.createElement("table");
    const headRow = document.createElement("tr");
    table.appendChild(headRow);
  
    // Insert headers for the table
    headRow.innerHTML = "<th>First Name</th><th>Location</th>";
  
    // Iterate through each student in the studentsList array
    studentsList.forEach(student => {
      // Create a row element
      const row = document.createElement("tr");
  
      // Create two cells, one for the first name and one for the location
      row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  
      // Append the row to the table
      table.appendChild(row);
    });
  
    // Append the table to the body of the HTML document
    document.body.appendChild(table);
  };
  
  // Call the renderTable function to render the table
  renderTable(studentsList);  