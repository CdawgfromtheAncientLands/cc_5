//U9414-0233
const  MONTHS_IN_A_YEAR = 12
managerSalaryBonusMultiplier = 0.15

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
      console.log ("---------------------------------------------");
      console.log ("Employee: " + this.employeeName + "\nMonthly Salary: " + USDconvert(employeeMonthlySalary));
    }

    //Include a method to calculate and return the annual salary. 
    annualSalaryCalc() {
        return (this.employeeMonthlySalary * MONTHS_IN_A_YEAR);
    }
}


//Create a subclass called Manager that inherits from the Employee class. 
//Add a department property and override the annual salary calculation method to include a 15% bonus. 
class Manager extends Employee {
  constructor(employeeName, employeeMonthlySalary, department) {
    super(employeeName, employeeMonthlySalary)
    this.department = department
  }

  annualSalaryCalc() {
    let baseAnnualSalary = super.annualSalaryCalc();
    let salaryBonus = baseAnnualSalary * managerSalaryBonusMultiplier;
    let totalAnnualSalary = baseAnnualSalary + salaryBonus;
        //Log the amount of the bonus and the total annual salary including the bonus.
    console.log("Bonus: " + USDconvert(salaryBonus) + "\nTotal Annual Salary: " + USDconvert(totalAnnualSalary));
  }
}
testEmployee = new Employee ("Alan", 12);
testManager = new Manager ("James",1203038, "Sales")
testManager.annualSalaryCalc()
testEmployee.annualSalaryCalc()