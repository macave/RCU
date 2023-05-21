let filter = "available";
let extraMICA = 5;

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

function resetFilter() {
  document.getElementById("all").checked = false;
  document.getElementById("available").checked = true;
  //Only allow one dispatch vallidation
  //document.getElementById("all").disabled = false;
  //document.getElementById("available").disabled = false;
  filter = "available";
}

function handleFilterChange(e) {
  filter = e.target.value;
  render();
  //Only allow one dispatch vallidation
  //document.getElementById("all").disabled = true;
  //document.getElementById("available").disabled = true;
}

function render() {
  document.querySelector("#randomGrid").textContent = window.grid.grid;
  document.querySelector("#randomEventType").textContent = window.grid.evtype;
  document.querySelector("#randomEventDescriptor").textContent = window.grid.evdescriptor;
  extraMICA = 0;
  const tbody = document.querySelector("#unit-table-body");

  tbody.innerHTML = "";

  let units = [...window.units];
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

/*Add ALL units
function addAllUnits() {
  const tbody = document.querySelector("#unit-table-body");
  tbody.innerHTML = "";

  let units = [...window.units];
  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }

  const limited_units = units.splice(0, 14);
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
}*/

//Add MICA Units
function addMICAUnits() {

  const tbody = document.querySelector("#unit-table-body");
  extraMICA = extraMICA + 5;

  let units = [...window.units];


  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }

  units.splice(0, 15);

  units = units.filter((unit) => {
    return ["MICA"].includes(unit.unit_type);
  });
  units.splice(0, extraMICA);
  const limited_units = units.splice(0, 5);

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
