document.getElementById("addPreference").addEventListener("click", function() {
  const prefId = document.getElementById("prefId").value;
  const personId = document.getElementById("personId").value;
  const activityId = document.getElementById("activityId").value;
  const rating = document.getElementById("rating").value;
  const dateEval = document.getElementById("dateEval").value;
  const teamId = document.getElementById("teamId").value;

  if (!prefId || !personId || !activityId || !rating || !dateEval || !teamId) {
    alert("Please fill all fields.");
    return;
  }

  // Add row to table
  const table = document.getElementById("preferenceTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${prefId}</td>
    <td>${personId}</td>
    <td>${activityId}</td>
    <td>${rating}</td>
    <td>${dateEval}</td>
    <td>${teamId}</td>
    <td><button class="disable-btn">Disable</button></td>
  `;

  // Disable row function
  newRow.querySelector(".disable-btn").addEventListener("click", function() {
    newRow.classList.add("disabled-row");
    this.textContent = "Disabled";
    this.disabled = true;
  });

  // Clear input fields
  document.querySelectorAll("input").forEach(input => input.value = "");

  // Update summary
  updateBottomDisplay();
});

function updateBottomDisplay() {
  const table = document.getElementById("preferenceTable").getElementsByTagName("tbody")[0];
  const rows = table.querySelectorAll("tr");
  let displayHTML = "";

  if (rows.length === 0) {
    displayHTML = "<p>No data entered yet.</p>";
  } else {
    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
      displayHTML += `
        <div>
          <strong>Preference ID:</strong> ${cells[0].textContent}, 
          <strong>Person ID:</strong> ${cells[1].textContent}, 
          <strong>Activity ID:</strong> ${cells[2].textContent}, 
          <strong>Rating:</strong> ${cells[3].textContent}, 
          <strong>Date:</strong> ${cells[4].textContent}, 
          <strong>Team ID:</strong> ${cells[5].textContent}
        </div>
        <hr>
      `;
    });
  }

  document.getElementById("displayData").innerHTML = displayHTML;
}
