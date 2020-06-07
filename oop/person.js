class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        })
        return bio;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

// Subclass inherits from Person
class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName,age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`;
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade;
    }
    getBio() {
        const status = this.grade > 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the course.`;
    }
    updateGrade(grade) {
        const newGrade = this.grade + grade;
        if(newGrade > 0) {
            this.grade = newGrade
        } else {
            console.log("Value can't be lower than zero.");
        }
    }
}


// const myPerson = new Person('Andrew', 'Mead', '27', ['Teaching']);
const myEmployee = new Employee('Alexis', 'Turner', '27', 'Teacher', ['Teaching']);
myEmployee.fullName = 'Clancey Turner';
/* const student = new Student('Andrew', 'Mead', 27, 88);
student.fullName = 'Clancey Turner';
student.updateGrade(-20); */
console.log(myEmployee.getBio());


/* Alternative to using classes.
// constructor function for Person object
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}
Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`;
    })
    return bio;
}
Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking']);
me.setName('Andrew Mead');
console.log(me.getBio()); */