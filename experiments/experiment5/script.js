let employees = [];
function addEmployee() {
let name = document.getElementById("name").value;
let id = document.getElementById("empId").value;
let salary = parseFloat(document.getElementById("salary").value);
let dept = document.getElementById("department").value;
let emp = {
name: name,
id: id,
salary: salary,
department: dept
};
employees.push(emp);
alert("Employee Added Successfully");
document.getElementById("name").value = "";
document.getElementById("empId").value = "";
document.getElementById("salary").value = "";
document.getElementById("department").value = "";
}
function displayAll() {
let result = "";
employees.forEach(emp => {
result += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Department:
${emp.department} <br>`;
});
document.getElementById("result").innerHTML = result;
}
function salaryAbove50k() {
let result = "";
employees.filter(emp => emp.salary > 50000)
.forEach(emp => {
result += `Name: ${emp.name}, Salary: ${emp.salary} <br>`;
});
document.getElementById("result").innerHTML = result;
}
function totalSalary() {
let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
document.getElementById("result").innerHTML = "Total Salary: " + total;
}
function averageSalary() {
if (employees.length === 0) {
document.getElementById("result").innerHTML = "No Employees";
return;
}
 let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
let avg = total / employees.length;
 document.getElementById("result").innerHTML = "Average Salary: " + avg;
}
function countByDepartment() {
let dept = document.getElementById("department").value;
 let count = employees.filter(emp => emp.department === dept).length;
document.getElementById("result").innerHTML =
`Employees in ${dept}: ${count}`;
}