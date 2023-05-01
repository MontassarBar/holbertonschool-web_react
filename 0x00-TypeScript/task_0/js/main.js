var student1 = {
    firstName: "Montassar",
    lastName: "Barbouchi",
    age: 20,
    location: "Tunisia"
};
var student2 = {
    firstName: "baba",
    lastName: "yaga",
    age: 7000,
    location: "forest"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var header = table.createTHead();
var headerRow = header.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
headerCell1.innerText = "firstname";
var headerCell2 = headerRow.insertCell(1);
headerCell2.innerText = "location";
var x = 1;
studentsList.forEach(function (row) {
    var tr = table.insertRow(x);
    var td1 = tr.insertCell(0);
    var td2 = tr.insertCell(1);
    td1.innerText = row.firstName;
    td2.innerText = row.location;
    x += 1;
});
document.body.appendChild(table);
