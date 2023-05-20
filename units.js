const UNIT_COUNT = 150;

const DW_OPTIONS = [
  "CODE 1",
  "PRI 0",
  "NO STRETCHER",
  "S/O",
  "1700/1900 CODE 1",
  "PRI 0 CB",
];

const STATUS_OPTIONS = ["AM", "AS", "ER", "E2", "AR", "DP", "LD", "AD"];

function generateUnits() {
  const units_dup = [...UNIT_DATA];
  const generated_units = [];

  for (let index = 0; index < UNIT_COUNT; index++) {
    const base_unit = units_dup.splice(
      Math.floor(Math.random() * units_dup.length),
      1
    )[0];

    base_unit.dw =
      Math.random() > 0.5
        ? DW_OPTIONS[Math.floor(Math.random() * DW_OPTIONS.length)]
        : "";

    base_unit.status =
      STATUS_OPTIONS[Math.floor(Math.random() * STATUS_OPTIONS.length)];

    base_unit.distance = Math.floor(Math.random() * 400) / 10;

    generated_units.push(base_unit);
  }

  return generated_units.sort((a, b) => a.distance - b.distance);
}
