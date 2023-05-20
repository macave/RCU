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

  const limited_units = units.splice(0, 9);

  limited_units.push(units.find((unit) => unit.unit_type === "MICA"));

  limited_units.map((unit) => {
    const row = document.createElement("tr");
    Object.keys(unit)
      .filter((key) => key !== "d_group")
      .forEach((key) => {
        const cell = document.createElement("td");
        const content =
          key === "distance" ? unit[key].toFixed(1) + " km" : unit[key];
        cell.innerText = content;
        row.appendChild(cell);
      });
    tbody.appendChild(row);
  });
}
