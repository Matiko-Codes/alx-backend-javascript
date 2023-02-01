/**
 * Interface for a Teacher object
 */
interface Teacher {
    /**
     * First name of the teacher
     */
    firstName: string,
    
    /**
     * Last name of the teacher
     */
    lastName: string,
    
    /**
     * Indicates whether the teacher is a full time employee
     */
    fullTimeEmployee: boolean,
    
    /**
     * The number of years of experience the teacher has
     */
    yearsOfExperience?: number,
    
    /**
     * The location of the teacher
     */
    location: string,
    
    /**
     * Key-value pairs for any additional attributes
     */
    [key: string]: any,
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // should print:
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"
  