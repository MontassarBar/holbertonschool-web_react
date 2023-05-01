interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}
let student1: Student = {
    firstName: "Montassar",
    lastName: "Barbouchi",
    age: 20,
    location: "Tunisia"
};
let student2: Student = {
    firstName: "baba",
    lastName: "yaga",
    age: 7000,
    location: "forest"
};
let studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const header: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = header.insertRow(0);
const headerCell1: HTMLTableCellElement = headerRow.insertCell(0);
headerCell1.innerText = "firstname";
const headerCell2: HTMLTableCellElement = headerRow.insertCell(1);
headerCell2.innerText = "location";
let x = 1;
studentsList.forEach((row) => {
    const tr: HTMLTableRowElement = table.insertRow(x);
    const td1: HTMLTableCellElement = tr.insertCell(0);
    const td2: HTMLTableCellElement = tr.insertCell(1);
    td1.innerText = row.firstName;
    td2.innerText = row.location;
    x += 1;
}
)
document.body.appendChild(table);
