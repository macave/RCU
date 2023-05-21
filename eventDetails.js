function generateEventDetails(){
    let CAD = "E23";
    
    var randomMonthNumber = Math.floor(Math.random() * (12 - 01 + 1)) + 12;
    var randomDayNumber = Math.floor(Math.random() * (30 - 01 + 1)) + 30;
    var randomCADNumber = Math.floor(Math.random() * (11001 - 10001 + 1)) + 11001;
    
    document.querySelector("#CADNumber").textContent = CAD + randomMonthNumber + randomDayNumber + randomCADNumber;
}