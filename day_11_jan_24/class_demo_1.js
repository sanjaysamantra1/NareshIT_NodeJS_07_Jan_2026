// es_5
function Trainer(name, course, time) { // constructor function
    this.name = name;
    this.course = course;
    this.time = time
}
let trainer1 = new Trainer('sanjay', 'Nodejs', '7.00 Pm');
let trainer2 = new Trainer('Harikrishna', 'Core Java', '8.00 AM')
console.log(trainer1)
console.log(trainer2)

// es_6
class Student {
    constructor(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
let std1 = new Student(1, 'Shivaji', 'NodeJs');
let std2 = new Student(2, 'Nayan', 'reactJS');
console.log(std1)
console.log(std2)