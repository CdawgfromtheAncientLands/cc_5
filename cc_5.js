//U9414-0233
const  MONTHS_IN_A_YEAR = 12
//Convert num to USD string
function USDconvert(amount) {
    return(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount))
}
//Create a JavaScript class called Employee with properties for name and salary. 
class Employee {
    constructor(employeeName, employeeMonthlySalary) {
      this.employeeName = employeeName;
      this.employeeMonthlySalary = Number(employeeMonthlySalary);
    //Console log the name and monthly salary upon instantiation.
      console.log ("Employee: " + this.employeeName + ". " + "Monthly Salary: " + USDconvert(employeeMonthlySalary))
    }
    //Include a method to calculate and return the annual salary. 
    annualSalaryCalc() {
        return this.employeeMonthlySalary * MONTHS_IN_A_YEAR;
    }
}