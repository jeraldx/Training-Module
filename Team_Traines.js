function addVenue() {
  const name = document.getElementById("venueName").value;
  const building = document.getElementById("venueBuilding").value;
  const room = document.getElementById("venueRoom").value;
  const desc = document.getElementById("venueDescription").value;
  const isActive = document.getElementById("isActive").checked ? "✅" : "❌";

  if (!name || !building || !room || !desc) {
    alert("Please fill in all text fields!");
    return;
  }

  const table = document.getElementById("venueTable").querySelector("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${building}</td>
    <td>${room}</td>
    <td>${desc}</td>
    <td style="text-align:center;">${isActive}</td>
    <td><button class="disable-btn" onclick="disableRow(this)">Disable</button></td>
  `;

  table.appendChild(row);

  // Clear inputs
  document.querySelectorAll('.form-group input[type="text"]').forEach(input => input.value = "");
  document.getElementById("isActive").checked = false;
}

function disableRow(button) {
  button.disabled = true;
  button.textContent = "Disabled";
  button.closest("tr").style.opacity = "0.5";
}
