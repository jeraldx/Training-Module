// When the "Add Record" button is clicked
document.getElementById("addTeam").addEventListener("click", function () {
  // Get input values
  const tour_id = document.getElementById("tour_id").value;
  const sports_id = document.getElementById("sports_id").value;
  const team_id = document.getElementById("team_id").value;
  const games = document.getElementById("no_games_played").value;
  const wins = document.getElementById("no_wins").value;
  const loss = document.getElementById("no_loss").value;
  const draw = document.getElementById("no_draw").value;
  const gold = document.getElementById("no_gold").value;
  const silver = document.getElementById("no_silver").value;
  const bronze = document.getElementById("no_bronze").value;

  // Simple validation
  if (!tour_id || !sports_id || !team_id) {
    alert("Please fill out Tournament ID, Sports ID, and Team ID!");
    return;
  }

  // Get table body
  const table = document.getElementById("teamTable").querySelector("tbody");

  // Create a new row
  const row = table.insertRow();

  // Fill row with data
  row.innerHTML = `
    <td>${tour_id}</td>
    <td>${sports_id}</td>
    <td>${team_id}</td>
    <td>${games}</td>
    <td>${wins}</td>
    <td>${loss}</td>
    <td>${draw}</td>
    <td>${gold}</td>
    <td>${silver}</td>
    <td>${bronze}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Clear inputs
  document.querySelectorAll(".form-container input").forEach(input => input.value = "");

  // Add delete functionality
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });
});