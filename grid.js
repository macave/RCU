function generateGrid() {
  // array of GRIDS
  var avGrids = [
    "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
    "AP1,MC/PR2:MC1,AP2",
    "AP/PR1,NO:MC1,AP2",
    "ARU2,NO:AP/PR2,NO",
    "AP/PR3,NO:ARU3,AP/PR3",
  ];
  // get a random tag from the array
  return avGrids[Math.floor(Math.random() * avGrids.length)];
}
