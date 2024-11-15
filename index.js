
function calculateTax(salary){
let employeeContributionRate = 0.05;
let pension = salary * employeeContributionRate;
let taxableSalary = salary - pension;

let taxRateBetween80And250 = 0.04;
let taxRateBetween250And400 = 0.08;
let taxRateAbove450 = 0.1;

let taxBetween80And250;
   if(taxableSalary >= 250){
    taxBetween80And250 =  170 * taxRateBetween80And250;
   }else if(taxableSalary > 80){
    taxBetween80And250 = (taxableSalary - 80) * taxRateBetween80And250;
   }else{
    taxBetween80And250 = 0;
   }

let taxBetween250And450;
  if(taxableSalary >= 450){
    taxBetween250And450 = 200 * taxRateBetween250And400;
   }else if(taxableSalary > 250){
    taxBetween250And450 = (taxableSalary - 250) * taxRateBetween250And400;
   }else{   
    taxBetween250And450 = 0;
   }

let taxAbove450;
 if(taxableSalary > 450){
    taxAbove450 = (taxableSalary - 450) * taxRateAbove450;
   }else{
    taxAbove450 = 0;
   }

let totalTaxes = taxBetween80And250 + taxBetween250And450 + taxAbove450;
let netSalary = salary - pension - totalTaxes;
console.log(`
    Your Salary is : ${salary.toFixed(2)}€
    Employee Contribution Rate is : ${employeeContributionRate.toFixed(2)}€
    Pension is : ${pension.toFixed(2)}€
    Taxable Salary is : ${taxableSalary.toFixed(2)}€
     
    Taxes:
   -Tax Between 80-250 is : " ${taxBetween80And250.toFixed(2)}€
   -Tax Between 250-450 is : " ${taxBetween250And450.toFixed(2)}€
   -Tax Above 450 is : " ${taxAbove450.toFixed(2)}€
   -Total: ${totalTaxes.toFixed(2)}€

    Your net Salary is :${netSalary.toFixed(2)}€`
);
}
let salary = Number(prompt("What is your salary"));
if(Number.isNaN(salary)){
    console.log("Please enter a valid number");
}else{
    calculateTax(salary);
}