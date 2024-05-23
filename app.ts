// Student Management System in TypeScript

// Define a Student class to represent each student
class Student {
    // Static variable to generate unique IDs for new students
    private static nextId = 10000;
    // Public properties for student ID and enrolled courses
    public id: number;
    public courses: string[] = [];

    // Constructor to initialize a new student with a name and unique ID
    constructor(public name: string) {
        this.id = Student.nextId++;
    }

    // Method to enroll a student in a new course
    enroll(courseName: string) {
        this.courses.push(courseName);
        console.log(`Student ${this.name} enrolled in ${courseName}`);
    }

    // Method to get the list of courses a student is enrolled in
    getCourses() {
        return this.courses;
    }
}

// Define a StudentManagementSystem class to handle student operations
class StudentManagementSystem {
    // Array to store all students
    private students: Student[] = [];

    // Method to add a new student to the system
    addStudent(name: string) {
        const student = new Student(name);
        this.students.push(student);
        console.log(`Added student ${name} with ID: ${student.id}`);
    }

    // Method to find a student by their ID
    findStudent(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    // Method to enroll a student in a course by their ID
    enrollStudent(id: number, courseName: string) {
        const student = this.findStudent(id);
        if (student) {
            student.enroll(courseName);
        } else {
            console.log(`Student with ID: ${id} not found`);
        }
    }

    // Method to display all students and their courses
    showAllStudents() {
        this.students.forEach(student => {
            console.log(`Student ID: ${student.id}, Name: ${student.name}, Courses: ${student.getCourses().join(", ")}`);
        });
    }
}

// Example usage of the StudentManagementSystem class
const system = new StudentManagementSystem();
system.addStudent('Alice'); // Adding a new student named Alice
system.addStudent('Bob');   // Adding a new student named Bob
system.enrollStudent(10000, 'Mathematics'); // Enrolling Alice in Mathematics
system.enrollStudent(10001, 'Physics');     // Enrolling Bob in Physics
system.showAllStudents(); // Displaying all students and their enrolled courses

