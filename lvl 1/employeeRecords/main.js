//first create a empty array for employees

var employeeNames = []

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation or (represent as) and the fourth will be 
// defaulted to "Full Time".
// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

function Employee(name,jobtitle, salary){
    // this refers back to its self meaning this."property here"= "to something here like data"
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = "Full Time";
   
}
//A prototype is an object which associates with all the functions. Additionally, it is invisible, but all the properties inside the prototype are accessible.
//When a programmer needs to add new properties like variables and methods at a later point of time, and these properties need sharing across all the instances, 
//then the prototype will be very handy.
//The prototype can add both variables and methods to an existing object dynamically.
Employee.prototype.print = print

function print(){
    //                               "\n" this means new line or line break
    console.log("Name: " + this.name + "\nJob Title: " + this.jobtitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
    // console.log(this)
}
// Instantiateor or (represent as ) four employees
var bobBarker = new Employee("Bob Barker", "Host", 4500000)
var happyGilmore = new Employee("Happy Gilmore", "Not a golfer", 100000)
var chrisRobbin= new Employee("Christopher Robin", "Lost Child", 150)
var dannyDivto= new Employee("Danny Divto", "Actor", 300000)
//Override the status attribute of one of them to either "Part Time" or "Contract"

happyGilmore.status = "Contractor"

// Call the printEmployeeForm method for each employee
happyGilmore.print()
bobBarker.print()
chrisRobbin.print()
dannyDivto.print()
// Put the generated employees into the employees array using whichever method you prefer.

var newEmployees = ["Bob Barker", "Happy Gilmore", "Christopher Robin","Danny Divto"]
for (i = 0; i < newEmployees.length; i++){
// here we are pushing newEmployees into the emtpy array which has the function employee for it 
    employeeNames.push(newEmployees[i])
}
console.log(employeeNames)