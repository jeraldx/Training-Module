document.getElementById("addBtn").addEventListener("click", function() {
  const id = document.getElementById("activity_id").value.trim();
  const name = document.getElementById("activity_name").value.trim();
  const sport = document.getElementById("sports_id").value.trim();
  const duration = document.getElementById("duration").value.trim();
  const repetition = document.getElementById("repetition").value.trim();
  const isActive = document.getElementById("is_active").checked;

  if (!id || !name || !sport || !duration || !repetition) {
    alert("Please fill in all fields.");
    return;
  }

  const tableBody = document.querySelector("#activityTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${sport}</td>
    <td>${duration}</td>
    <td>${repetition}</td>
    <td class="status">${isActive ? "Yes" : "No"}</td>
    <td><button class="${isActive ? 'disable' : 'enable'}Btn">${isActive ? "Disable" : "Enable"}</button></td>
  `;

  tableBody.appendChild(newRow);

  // Clear inputs
  document.querySelectorAll(".input-group input").forEach(input => input.value = "");
  document.getElementById("is_active").checked = false;

  // Add toggle functionality
  const actionBtn = newRow.querySelector("button");
  const statusCell = newRow.querySelector(".status");

  actionBtn.addEventListener("click", function() {
    if (statusCell.textContent === "Yes") {
      statusCell.textContent = "No";
      actionBtn.textContent = "Enable";
      actionBtn.classList.remove("disable");
      actionBtn.classList.add("enable");
      actionBtn.style.backgroundColor = "#28a745";
    } else {
      statusCell.textContent = "Yes";
      actionBtn.textContent = "Disable";
      actionBtn.classList.remove("enable");
      actionBtn.classList.add("disable");
      actionBtn.style.backgroundColor = "#6c757d";
    }
  });
});
