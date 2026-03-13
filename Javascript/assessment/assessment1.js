let students = [];

function addStudent() {
    const name = document.getElementById('stuName').value;
    const roll = document.getElementById('stuRoll').value;
    const math = parseFloat(document.getElementById('stuMath').value);
    const science = parseFloat(document.getElementById('stuScience').value);
    const english = parseFloat(document.getElementById('stuEnglish').value);

    if (name && roll && !isNaN(math) && !isNaN(science) && !isNaN(english)) {
        const student = { name, roll, math, science, english };
        students.push(student);
        alert("Student Added!");
        clearInputs();
    } else {
        alert("Please fill all fields correctly");
    }
}

function displayAll() {
    let output = "";
    for (let s of students) {
        output += `<p>Roll: ${s.roll} | Name: ${s.name} | Math: ${s.math}, Science: ${s.science}, English: ${s.english}</p>`;
    }
    render(output || "No records found.");
}

function calculateTotals() {
    let output = "";
    for (let s of students) {
        const total = s.math + s.science + s.english;
        output += `<p>${s.name} (Roll ${s.roll}) - Total: ${total}</p>`;
    }
    render(output || "No records found.");
}

function calculateAverage() {
    let output = "";
    for (let s of students) {
        const avg = (s.math + s.science + s.english) / 3;
        output += `<p>${s.name} - Average: ${avg.toFixed(2)}</p>`;
    }
    render(output || "No records found.");
}

function filterHigh() {
    let output = "";
    for (let s of students) {
        const avg = (s.math + s.science + s.english) / 3;
        if (avg > 80) {
            output += `<p>${s.name} - Avg: ${avg.toFixed(2)}</p>`;
        }
    }
    render("<h3>High Scorers:</h3>" + (output || "None"));
}

function filterFail() {
    let output = "";
    for (let s of students) {
        const avg = (s.math + s.science + s.english) / 3;
        if (avg < 40) {
            output += `<p>${s.name} - Avg: ${avg.toFixed(2)} (Failed)</p>`;
        }
    }
    render("<h3>Failed Students:</h3>" + (output || "None"));
}

function countStudents() {
    render(`<h3>Total Students: ${students.length}</h3>`);
}

function render(content) {
    document.getElementById('results').innerHTML = content;
}

function clearInputs() {
    document.querySelectorAll('input').forEach(i => i.value = '');
}
