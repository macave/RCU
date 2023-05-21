let filter = "available";

let extraMICA = 5;
let extraAGP = 5;
let extraMATS = 5;
let extraALL = 5;


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
  filter = "available";
}

function handleFilterChange(e) {
  filter = e.target.value;
  render();
}

//Master Render
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

//Add additional MICA Units
function addMICAUnits() {

  const tbody = document.querySelector("#unit-table-body");
  extraMICA = extraMICA + 5;
  let units = [...window.units];

  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }
  //Remove the 10 units that have already been shown
  units.splice(0, 15);
  //Filter by unit type
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

//Add additional AGP Units
function addAGPUnits() {
  const tbody = document.querySelector("#unit-table-body");
  extraAGP = extraAGP + 5;

  let units = [...window.units];


  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }
  //Remove the 10 units that have already been shown
  units.splice(0, 15);
  //Filter by unit type
  units = units.filter((unit) => {
    return ["AGP"].includes(unit.unit_type);
  });
  units.splice(0, extraAGP);
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

//Add additional MATS Units
function addMATUnits() {
  const tbody = document.querySelector("#unit-table-body");
  extraMATS = extraMATS + 5;

  let units = [...window.units];

  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }
  //Remove the 10 units that have already been shown
  units.splice(0, 10);

  //Filter by unit type
  units = units.filter((unit) => {
    return ["MATS"].includes(unit.unit_type);
  });

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

//Add additional ALL Units
function addALLUnits() {
  const tbody = document.querySelector("#unit-table-body");
  extraALL = extraALL + 5;

  let units = [...window.units];

  if (filter == "available") {
    units = units.filter((unit) => {
      return ["AS", "AM"].includes(unit.status);
    });
  }
  //Remove the 10 units that have already been shown
  units.splice(0, 15);
  //Filter by unit type
  units = units.filter((unit) => {
    return ["AGP","ARU","MICA","MBR","MATS"].includes(unit.unit_type);
  });
  units.splice(0, extraALL);
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