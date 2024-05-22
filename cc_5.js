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
    super(employeeName, employeeMonthlySalary);
    this.department = department;
    console.log ("Department: " + this.department);
  }

  annualSalaryCalc() {
    let baseAnnualSalary = super.annualSalaryCalc();
    let salaryBonus = baseAnnualSalary * managerSalaryBonusMultiplier;
    let totalAnnualSalary = baseAnnualSalary + salaryBonus;
        //Log the amount of the bonus and the total annual salary including the bonus.
    console.log("Yearly Bonus: " + USDconvert(salaryBonus) + "\nTotal Annual Salary: " + USDconvert(totalAnnualSalary));
  }
}

//Create two instances of the Manager class using the provided test data. Calculate and log their annual salaries, including bonuses.
//Manager 1: Bob Ross works in the Digital Marketing department and earns $6600.00 a month.
let manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.annualSalaryCalc();

//Manager 2: Debbie Little works in the Finance department and earns $7205.00 a month.
let manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.annualSalaryCalc();
