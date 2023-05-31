function generateGrid() {
  const grid_dup = [...GRID_DATA];
  let selectedGrid = grid_dup[Math.floor(Math.random() * grid_dup.length)]

  console.log(selectedGrid.notification);

  //CLIN NOTIFY
  if (selectedGrid.notification === "C") {
    a = document.getElementById('PseudoCLIN')
    a.className = "";
  } else {
    a = document.getElementById('PseudoCLIN')
    a.className = "hidden";
  }

  //GOODSAM NOTIFY
  if (selectedGrid.notification === "G") {
    a = document.getElementById('PseudoGOODSAM')
    a.className = "";
  } else {
    a = document.getElementById('PseudoGOODSAM')
    a.className = "hidden";
  }

  //AAV NOTIFY
  if (selectedGrid.notification === "H") {
    a = document.getElementById('PseudoAAV')
    a.className = "";
  } else {
    a = document.getElementById('PseudoAAV')
    a.className = "hidden";
  }

  //DM NOTIFY
  if (selectedGrid.notification === "D") {
    a = document.getElementById('PseudoDM')
    a.className = "";
  } else {
    a = document.getElementById('PseudoDM')
    a.className = "hidden";
  }

  // get a random tag from the array
  return selectedGrid;
}
