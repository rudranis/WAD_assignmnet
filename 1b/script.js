function toggleOther() {
    let other = document.getElementById("otherHobby");
    other.disabled = !document.getElementById("otherChk").checked;
    if (other.disabled) other.value = "";
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
}

function submitForm() {

    clearErrors();
    let valid = true;

    // ---------- GET VALUES ----------
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let hobbies = document.querySelectorAll('.checkbox input[type="checkbox"]:checked');
    let otherHobby = document.getElementById("otherHobby").value.trim();

    // ---------- VALIDATIONS ----------
    if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameErr").innerText = "Alphabets only";
        valid = false;
    }

    if (!/^[A-Z0-9]+$/.test(roll)) {
        document.getElementById("rollErr").innerText =
            "Capital letters and numbers only";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(prn)) {
        document.getElementById("prnErr").innerText =
            "PRN must be 10 digits";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobErr").innerText =
            "Select Date of Birth";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileErr").innerText =
            "Invalid mobile number";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailErr").innerText =
            "Invalid email format";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordErr").innerText =
            "Minimum 6 characters required";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderErr").innerText =
            "Select gender";
        valid = false;
    }

    if (dept === "") {
        document.getElementById("deptErr").innerText =
            "Select department";
        valid = false;
    }

    if (year === "") {
        document.getElementById("yearErr").innerText =
            "Select year";
        valid = false;
    }

    if (city === "") {
        document.getElementById("cityErr").innerText =
            "Select city";
        valid = false;
    }

    if (address.length < 10) {
        document.getElementById("addressErr").innerText =
            "Minimum 10 characters required";
        valid = false;
    }

    if (hobbies.length === 0) {
        document.getElementById("hobbyErr").innerText =
            "Select at least one hobby";
        valid = false;
    }

    if (!valid) return;

    // ---------- PREPARE DATA ----------
    let hobbyList = [];
    hobbies.forEach(h => {
        if (h.id === "otherChk") {
            hobbyList.push(otherHobby);
        } else {
            hobbyList.push(h.value);
        }
    });

    let student = {
        name,
        roll,
        prn,
        dob,
        mobile,
        email,
        gender: gender.value,
        dept,
        year,
        city,
        address,
        hobbies: hobbyList
    };

    // ---------- AJAX (SIMULATED) ----------
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

            // Store data in localStorage
            let students = JSON.parse(localStorage.getItem("students")) || [];
            students.push(student);
            localStorage.setItem("students", JSON.stringify(students));

            // ✅ Redirect to display page
            window.location.href = "display.html";
        }
    };

    // Dummy AJAX call (no server needed)
    xhr.open("GET", "display.html", true);
    xhr.send();
}
