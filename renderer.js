let filter = "available";

const RENDERERS = {
  status: (unit, row) => {
    const cell = document.createElement("td");
    cell.innerText = unit.status;
    row.classList.add(unit.status);
    row.appendChild(cell);
  },
  distance: (unit, row) => {
    const cell = document.createElement("td");
    cell.innerText = unit.distance.toFixed(1) + " km";
    row.appendChild(cell);
  },
  dw: (unit, row) => {
    const cell = document.createElement("td");
    cell.innerText = unit.dw;
    cell.classList.add("text-nowrap");
    row.appendChild(cell);
  }
};

function handleFilterChange(e) {
  filter = e.target.value;

  render();
}

function render() {
  document.querySelector("#randomGrid").textContent = window.grid.grid;
  document.querySelector("#randomEventType").textContent = window.grid.evtype;
  document.querySelector("#randomEventDescriptor").textContent = window.grid.evdescriptor;

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

        if (RENDERERS[key]) {
          RENDERERS[key](unit, row);
        } else {
          let cell = document.createElement("td");
          cell.textContent = unit[key];
          row.appendChild(cell);
        }
      });
    tbody.appendChild(row);
  });
}
