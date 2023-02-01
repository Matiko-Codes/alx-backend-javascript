namespace Subjects {
    export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    }
    
    export class Subject {
    teacher: Teacher;
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
    }
    export class Cpp extends Subject {
    getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    }
    }