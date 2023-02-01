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

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
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