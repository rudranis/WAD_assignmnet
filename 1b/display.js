let students = JSON.parse(localStorage.getItem("students")) || [];
let table = document.getElementById("data");

students.forEach(s => {
    let row = `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.prn}</td>
            <td>${s.dob}</td>
            <td>${s.mobile}</td>
            <td>${s.email}</td>
            <td>${s.gender}</td>
            <td>${s.dept}</td>
            <td>${s.year}</td>
            <td>${s.city}</td>
            <td>${s.address}</td>
            <td>${s.hobbies.join(", ")}</td>
        </tr>
    `;
    table.innerHTML += row;
});
