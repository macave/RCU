function toggleEvRemarks() {
    var x = document.getElementById("evRemarks");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function addComment() {
    var comment = document.getElementById("comment-select").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    document.getElementById("comment-list").appendChild(node);
    document.getElementById("comment-select").selectedIndex = 0;
}
function refDmESO() {
    var comment = "ESO Button Hit";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    document.getElementById("comment-list").appendChild(node);
    document.getElementById("comment-select").selectedIndex = 0;
}
function refDmNNU() {
    var comment = "NO NEARBY UNITS FOR THIS EVENT";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    document.getElementById("comment-list").appendChild(node);
    document.getElementById("comment-select").selectedIndex = 0;
}
//Clear Remarks
function clearAll() {
    document.getElementById("comment-list").innerHTML = "";
}