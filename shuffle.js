function generateTable() {
  debugger;
  var RCUNumber = 10;

  // Generate the random dispatch Number, Suburb, EvType, Grid
  var numberElem = document.querySelector("#randomNumber");
  var suburbElem = document.querySelector("#randomSuburb");
  var tagElem = document.querySelector("#randomTag");
  var gridElem = document.querySelector("#randomGrid");

  // Generate a random Event number
  var randomNumber = Math.floor(Math.random() * 2000) + 10001;

  // Array of suburbs
  var suburbs = [
    "Abbotsford",
    "Brunswick",
    "Carlton",
    "Collingwood",
    "Fitzroy",
    "Northcote",
    "Prahran",
    "Richmond",
    "South Yarra",
    "St Kilda",
  ];
  // get a random suburb from the array
  var randomSuburb = suburbs[Math.floor(Math.random() * suburbs.length)];
  // display the random suburb
  suburbElem.textContent = "Event Location: 123 Fake St, " + randomSuburb;

  // array of EvTypes
  var tags = ["*Event Type Descriptor*"];
  // get a random type from the array
  var randomTag = tags[Math.floor(Math.random() * tags.length)];
  // display the random tag
  tagElem.textContent =
    "Event Number: E232204" + randomNumber + "  |  Event Type: " + randomTag;

  // shuffle the units array
  units = shuffle(units);
  // create a new row for each unit and add it to the table body
  var tableBody = document.querySelector("#unitTable tbody");
  tableBody.innerHTML = "";
  var rows = [];

  // sort rows by distance
  rows.sort(function (a, b) {
    var aDistance = parseFloat(a.cells[4].textContent);
    var bDistance = parseFloat(b.cells[4].textContent);
    return aDistance - bDistance;
  });

  // add MICA unit to 10th row
  var micaRow = document.createElement("tr");
  var micaUnitCell = document.createElement("td");

  var micaUnits = [
    "ZR1",
    "ZR2",
    "ZR3",
    "ZR4",
    "ZR5",
    "Z6",
    "ZR7",
    "Z8",
    "ZR9",
    "ZR10",
    "Z11",
    "Z12",
    "Z13",
    "Z14",
    "Z15",
    "Z16",
    "ZR17",
    "ZR18",
    "ZR19",
    "ZR20",
    "ZR21",
    "ZR22",
    "Z23",
    "Z24",
    "Z25",
    "Z26",
  ];
  micaUnitCell.textContent =
    micaUnits[Math.floor(Math.random() * micaUnits.length)];
  var micaTypeCell = document.createElement("td");
  micaTypeCell.textContent = "MICA";
  var micaDwCell = document.createElement("td");
  micaDwCell.textContent = dws[Math.floor(Math.random() * dws.length)];
  var micaStCell = document.createElement("td");
  micaStCell.textContent = "AM";

  var micaDistanceCell = document.createElement("td");
  micaDistanceCell.textContent = (Math.random() * 7 + 29).toFixed(1) + " km";
  micaRow.appendChild(micaUnitCell);
  micaRow.appendChild(micaTypeCell);
  micaRow.appendChild(micaDwCell);
  micaRow.appendChild(micaStCell);

  micaRow.appendChild(micaDistanceCell);
  rows.splice(9, 0, micaRow);

  // append sorted rows to table body
  for (var i = 0; i < rows.length; i++) {
    tableBody.appendChild(rows[i]);
  }
}
