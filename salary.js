
// netSalaryCalculator.js

function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.3; // 30%
    const nhifRate = 0.05; // 5%
    const nssfRate = 0.08; // 8%

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Salary Details:");
console.log(salaryDetails);
