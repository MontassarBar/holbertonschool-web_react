var student1;
var student2;
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (row) {
    var tr = table.insertRow();
    var td1 = tr.insertCell();
    var td2 = tr.insertCell();
    td1.innerText = row.firstName;
    td2.innerText = row.location;
});
//# sourceMappingURL=main.js.map