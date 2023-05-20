let filter = "available";

function handleFilterChange(e) {
  filter = e.target.value;

  render();
}

function render() {
  document.querySelector("#randomGrid").textContent = window.grid;

  const tbody = document.querySelector("#unit-table-body");

  tbody.innerHTML = "";

  let units = window.units;
  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }

  units.slice(0, 10).map((unit) => {
    const row = document.createElement("tr");
    Object.keys(unit)
      .filter((key) => key !== "d_group")
      .forEach((key) => {
        const cell = document.createElement("td");
        cell.innerText = unit[key];
        row.appendChild(cell);
      });
    tbody.appendChild(row);
  });
}
