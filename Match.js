document.getElementById("addMatch").addEventListener("click", function () {
  const game_no = document.getElementById("game_no").value;
  const sked_date = document.getElementById("sked_date").value;
  const sked_time = document.getElementById("sked_time").value;
  const venue_id = document.getElementById("venue_id").value;
  const umpire_id = document.getElementById("match_umpire_id").value;
  const manager_id = document.getElementById("match_sports_managers_id").value;
  const match_type = document.getElementById("match_type").value;

  if (!game_no || !sked_date || !sked_time || !venue_id || !umpire_id || !manager_id || !match_type) {
    alert("Please fill out all fields!");
    return;
  }

  const table = document.getElementById("matchTable").querySelector("tbody");
  const row = table.insertRow();

  row.innerHTML = `
    <td>${game_no}</td>
    <td>${sked_date}</td>
    <td>${sked_time}</td>
    <td>${venue_id}</td>
    <td>${umpire_id}</td>
    <td>${manager_id}</td>
    <td>${match_type}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Clear input fields
  document.querySelectorAll(".form-container input, .form-container select").forEach(el => el.value = "");

  // Add delete functionality
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });
});