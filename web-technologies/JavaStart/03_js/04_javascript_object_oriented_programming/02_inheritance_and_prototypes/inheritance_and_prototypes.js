function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " : " + this.lastName;
}

Person.prototype.country = "Poland";

let p1 = new Person("Jan", "Kowalski");
let p2 = new Person("Jan", "Kowalski");

console.log(p1.country);
console.log(p2.country);

p1.country = "Germany";
p2.country = "France";

console.log(p1.country);
console.log(p2.country);

console.log(p1.__proto__.country);
console.log(p2.__proto__.country);

console.log(p1);
console.log(p2);

console.log(p1.fullName === p2.fullName);
console.log(p2.fullName === p2.fullName);

console.log(p1.__proto__ === Person.prototype);

console.log("--------------------");


function PersonStudent(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonStudent.prototype.fullName = function() {
    return this.firstName + " : " + this.lastName;
}

function Student(fn, ln, id) {
    PersonStudent.call(this, fn, ln);
    this.id = id;
}

Student.prototype = Object.create(PersonStudent.prototype);
Student.prototype.fullInfo = function() {
    return this.firstName + " : " + this.lastName + " : " + this.id;
}

let personStudent = new PersonStudent("Jan", "Kowalski");
console.log(personStudent.fullName());
let student = new Student("Paweł", "Zalewski", "12345");
console.log(student.fullInfo());