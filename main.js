// search made by morningstar
function search() {
    var searchTerm = document.getElementById("searchInput").value.trim(); // Trim to remove leading/trailing spaces
    var logsContent = document.getElementById("logsContent");
    var rows = logsContent.querySelectorAll('tr');

    // if empty throw error
    if (searchTerm === "") {
        alert("Please enter a search term.");
        return;
    }

    // remove highlights if you search ag
    rows.forEach(function (row) {
        var rowText = row.innerHTML;
        row.innerHTML = rowText.replace(/<mark>(.*?)<\/mark>/gi, "$1");
    });
    var regex = new RegExp(searchTerm, "gi");
    
    // hide non matching rows
    rows.forEach(function (row) {
        var rowText = row.innerHTML;
        if (rowText.search(regex) !== -1) {
            row.innerHTML = rowText.replace(regex, "<mark>$&</mark>");
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}

// clear highlights and show all elements ag
function clearHighlights() {
    var logsContent = document.getElementById("logsContent");
    var rows = logsContent.querySelectorAll('tr');
    rows.forEach(function (row) {
        var rowText = row.innerHTML;
        row.innerHTML = rowText.replace(/<mark>(.*?)<\/mark>/gi, "$1");
        row.style.display = "table-row";
    });
}
