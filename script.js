function createTable() {
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Get number of rows and columns
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Convert input to integers
  const rows = parseInt(rn, 10);
  const cols = parseInt(cn, 10);

  // Validate input
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Invalid input. Please enter positive numeric values.");
    return;
  }

  // Create the table dynamically
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

