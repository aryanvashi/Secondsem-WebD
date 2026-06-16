function addStudent() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const course = document.getElementById("course").value.trim();

  if (!name || !roll || !course) {
    alert("Please fill all fields!");
    return;
  }

  const tableBody = document.querySelector("#studentTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${course}</td>
    <td class="actions">
      <button class="edit-btn" onclick="editStudent(this)">Edit</button>
      <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("course").value = "";
}

function deleteStudent(button) {
  button.parentElement.parentElement.remove();
}

function editStudent(button) {
  const row = button.parentElement.parentElement;
  const name = row.cells[0].textContent;
  const roll = row.cells[1].textContent;
  const course = row.cells[2].textContent;

  document.getElementById("name").value = name;
  document.getElementById("roll").value = roll;
  document.getElementById("course").value = course;

  row.remove();
}
