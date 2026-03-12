let employees = [];

function addEmployee() {
    const name = document.getElementById('empName').value;
    const id = document.getElementById('empID').value;
    const salary = parseFloat(document.getElementById('empSalary').value);
    const dept = document.getElementById('empDept').value;

    if (name && id && salary && dept) {
        
        const emp = { name, id, salary, dept };
        employees.push(emp);
        alert("Employee Added!");
        clearInputs();
    } else {
        alert("Please fill all fields");
    }
}

function displayAll() {
    const output = employees.map(e => 
        `<p>ID: ${e.id} | Name: ${e.name} | Dept: ${e.dept} | Salary: ₹${e.salary}</p>`
    ).join('');
    render(output || "No records found.");
}

function filterHighSalary() {
    const highEarners = employees.filter(e => e.salary > 50000);
    const output = highEarners.map(e => `<p>${e.name} - ₹${e.salary}</p>`).join('');
    render("<h3>High Salaries:</h3>" + (output || "None"));
}

function calculateTotalPayout() {
    const total = employees.reduce((sum, e) => sum + e.salary, 0);
    render(`<h3>Total Payout: ₹${total}</h3>`);
}

function calculateAverage() {
    if (employees.length === 0) return render("No employees to average.");
    const total = employees.reduce((sum, e) => sum + e.salary, 0);
    const avg = total / employees.length;
    render(`<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`);
}

function countInDept() {
    const deptToFind = prompt("Enter Department Name:");
    const count = employees.filter(e => e.dept.toLowerCase() === deptToFind.toLowerCase()).length;
    render(`<h3>Employees in ${deptToFind}: ${count}</h3>`);
}

function render(content) {
    document.getElementById('results').innerHTML = content;
}

function clearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}