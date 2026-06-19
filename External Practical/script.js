document.getElementById("calcBtn").addEventListener("click", function() {
    let input = document.getElementById("marksInput").value;
    let resultDiv = document.getElementById("result");


    let marks = input.split(",").map(Number);


    if (input.trim() === "" || marks.some(isNaN)) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "<span style='color:#e74c3c; font-weight:bold;'>Please enter valid numeric marks.</span>";
        return;
    }

    let total = 0;
    let pass = true;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] < 40) {
            pass = false; 
        }
    }

    let average = total / marks.length;
    let grade = "F";

    if (pass) {
        if (average >= 90) grade = "A";
        else if (average >= 75) grade = "B";
        else if (average >= 50) grade = "C";
        else grade = "D";
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <strong>Total Marks:</strong> ${total} <br>
        <strong>Average Score:</strong> ${average.toFixed(2)}% <br>
        <strong>Status:</strong> ${pass ? "<span style='color:#2ecc71; font-weight:bold;'>PASS</span>" : "<span style='color:#e74c3c; font-weight:bold;'>FAIL</span>"} <br>
        <strong>Grade Assigned:</strong> ${grade}
    `;
});