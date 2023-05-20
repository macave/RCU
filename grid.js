function generateGrid() {
  const grid_dup = [...GRID_DATA];
  
  // get a random tag from the array
  return grid_dup[Math.floor(Math.random() * grid_dup.length)];
}
