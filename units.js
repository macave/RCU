const UNIT_COUNT = 150;

const DW_OPTIONS = [
  "CODE 1",
  "PRI 0",
];
const DW_COMPLEX_OPTIONS = [
  "NO STRETCHER",
  "S/O",
  "1700/1900",
]

const STATUS_OPTIONS = ["AM", "AS", "ER", "E2", "AR", "DP", "LD", "AD"];


function generateUnits() {
  const units_dup = [...UNIT_DATA];
  const generated_units = [];

  let fleet_availability = document.getElementById("fleetAvailability").value;
  let complexDW = document.getElementById("useComplexDW").value;
  console.log(complexDW);

  for (let index = 0; index < UNIT_COUNT; index++) {
    const base_unit = units_dup.splice(
      Math.floor(Math.random() * units_dup.length),
      1
    )[0];

    base_unit.dw =
      Math.random() > fleet_availability
        ? DW_OPTIONS[Math.floor(Math.random() * DW_OPTIONS.length)]
        : "";

    if (complexDW == 1) {
      base_unit.dw = base_unit.dw + " " +
        (Math.random() > 0.5 ? DW_COMPLEX_OPTIONS[Math.floor(Math.random() * DW_COMPLEX_OPTIONS.length)] : "");
    }

    base_unit.status =
      STATUS_OPTIONS[Math.floor(Math.random() * STATUS_OPTIONS.length)];

    base_unit.distance = Math.floor(Math.random() * 400) / 10;

    generated_units.push(base_unit);
  }

  return generated_units.sort((a, b) => a.distance - b.distance);
}
