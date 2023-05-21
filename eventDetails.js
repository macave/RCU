const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
const streets = [
    "MAPLE AVE",
    "ELM ST",
    "OAK LN",
    "CEDAR RD",
    "PINE ST", "BIRCH AVE",
    "WILLOW LN",
    "CHERRY ST",
    "POPLAR RD",
    "SYCAMORE AVE",
    "MAGNOLIA LN",
    "CYPRESS ST",
    "WALNUT AVE",
    "JUNIPER RD",
    "ASPEN LN",
    "HAWTHORN ST",
    "MULBERRY RD",
    "SPRUCE AVE",
    "ALDER LN",
    "LAUREL ST"
]
const suburbs = [
    "BRUNSWICK",
    "COBURG",
    "ESSENDON",
    "PRESTON",
    "RESERVOIR",
    "NORTHCOTE",
    "THOMASTOWN",
    "CRAIGIEBURN",
    "EPPING",
    "SUNBURY",
    "FOOTSCRAY",
    "YARRAVILLE",
    "SUNSHINE",
    "WILLIAMSTOWN",
    "ALTONA",
    "LAVERTON",
    "WERRIBEE",
    "POINT COOK",
    "HOPPERS CROSSING",
    "DEER PARK",
    "BOX HILL",
    "BALWYN",
    "DONCASTER",
    "GLEN WAVERLEY",
    "RINGWOOD",
    "BLACKBURN",
    "MITCHAM",
    "FERNTREE GULLY",
    "VERMONT",
    "TEMPLESTOWE",
    "ST KILDA",
    "ELWOOD",
    "BRIGHTON",
    "ELSTERNWICK",
    "BENTLEIGH",
    "HAMPTON",
    "MOORABBIN",
    "MENTONE",
    "CHELTENHAM",
    "FRANKSTON",
    "DANDENONG",
    "SPRINGVALE",
    "NOBLE PARK",
    "CLAYTON",
    "OAKLEIGH",
    "MULGRAVE",
    "CRANBOURNE",
    "BERWICK",
    "NARRE WARREN",
    "PAKENHAM",
    "SOUTHBANK",
    "FITZROY",
    "COLLINGWOOD",
    "RICHMOND",
    "CARLTON",
    "SOUTH YARRA",
    "PRAHRAN",
    "ABBOTSFORD",
    "KENSINGTON",
    "DOCKLANDS"    
]
let EventNumber = "";

function generateEventDetails() {
    let CAD = "";
    if (Math.random() > 0.5) {
        CAD = "E23";
        var randomCADNumber = Math.floor(Math.random() * (11001 - 10001 + 1)) + 11001;
    } else {
        CAD = "J23";
        var randomCADNumber = Math.floor(Math.random() * (71001 - 70001 + 1)) + 71001;
    };

    EventNumber = CAD + months[[Math.floor(Math.random() * months.length)]] + days[[Math.floor(Math.random() * days.length)]] + randomCADNumber;
    document.querySelector("#CADNumber").textContent = EventNumber;
    document.querySelector("#EventAddress").textContent = Math.floor(Math.random() * (114 - 11 + 1)) + 114 + " " + streets[[Math.floor(Math.random() * streets.length)]] + ", " + suburbs[[Math.floor(Math.random() * suburbs.length)]];
}

//Save RCU String
function saveRCUString(){
    html2canvas(document.querySelector("#RCUString")).then(canvas => {
          return Canvas2Image.saveAsPNG(canvas,canvas.width,canvas.height,"Practice_RCU_String_"+ EventNumber);
        }
    );
  }