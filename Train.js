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
    <td>
      <button class="${isActive ? 'disable-btn' : 'enable-btn'}">
        ${isActive ? "Disable" : "Enable"}
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  // Reset input fields
  document.querySelectorAll(".input-group input[type='text']").forEach(input => input.value = "");
  document.getElementById("is_active").checked = false;

  // Toggle enable/disable button
  const actionBtn = newRow.querySelector("button");
  const statusCell = newRow.querySelector(".status");

  actionBtn.addEventListener("click", function() {
    if (statusCell.textContent === "Yes") {
      statusCell.textContent = "No";
      actionBtn.textContent = "Enable";
      actionBtn.classList.remove("disable-btn");
      actionBtn.classList.add("enable-btn");
    } else {
      statusCell.textContent = "Yes";
      actionBtn.textContent = "Disable";
      actionBtn.classList.remove("enable-btn");
      actionBtn.classList.add("disable-btn");
    }
  });
});
