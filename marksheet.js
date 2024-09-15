// Simple Login Validation
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "admin") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("studentForm").style.display = "block";
    } else {
        alert("Invalid credentials. Try again.");
    }
}





function generateMarksheet() {
    const studentName = document.getElementById("studentName").value;
    const studentRoll = document.getElementById("studentRoll").value;
    const Biology = parseInt(document.getElementById("biology").value);
    const Chemistry = parseInt(document.getElementById("chemistry").value);
    const Physics = parseInt(document.getElementById("physics").value);


    if (Biology >= 100 && Chemistry >= 100 && Physics >= 100) {
        alert("Write marks less then 100");
    }
    if (!studentName || !studentRoll || isNaN(Biology) || isNaN(Chemistry) || isNaN(Physics)) {
        alert("Please fill out all fields.");
        return;
    }
    

    const totalMarks = Biology + Chemistry + Physics;
    const percentage = (totalMarks / 300) * 100;

    const marksheetBody = `
        <tr>
            <td>Biology</td>
            <td>100</td>
            <td>${Biology}</td>
        </tr>
        <tr>
            <td>Chemistry</td>
            <td>100</td>
            <td>${Chemistry}</td>
        </tr>
        <tr>
            <td>Physics</td>
            <td>100</td>
            <td>${Physics}</td>
        </tr>
    `;

    // Inject the table rows and results
    document.getElementById("marksheetBody").innerHTML = marksheetBody;
    document.getElementById("result").innerText = `Total Marks: ${totalMarks}/300`;
    document.getElementById("percentage").innerText = `Percentage: ${percentage.toFixed(2)}%`;

    // Show the marksheet container
    document.getElementById("studentForm").style.display = "none";
    document.getElementById("marksheet").style.display = "block";
}