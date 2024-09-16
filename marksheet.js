function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "admin") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("studentForm").style.display = "block";
    } else {
        alert("Invalid credentials. Try again.");
    }
}





function generateMarksheet() {
    var studentName = document.getElementById("studentName").value;
    var studentRoll = document.getElementById("studentRoll").value;
    var Biology = parseInt(document.getElementById("biology").value);
    var Chemistry = parseInt(document.getElementById("chemistry").value);
    var Physics = parseInt(document.getElementById("physics").value);
    var Maths = parseInt(document.getElementById("maths").value);
    


    if (Biology > 100 || Chemistry > 100 || Physics > 100 || Maths > 100 ) {
        alert("Write marks less then 100");
        return;
    }
    if (!studentName || !studentRoll || isNaN(Biology) || isNaN(Chemistry) || isNaN(Physics) || isNaN(Maths)) {
        alert("Please fill out all fields.");
        return;
    }
    
    document.getElementById("user").innerText = `Name: ${studentName}`;
    document.getElementById("userroll").innerText = `Roll No: ${studentRoll}`;
    var totalMarks = Biology + Chemistry + Physics + Maths;
    var percentage = (totalMarks / 400) * 100;

    var marksheetBody = `
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
        <tr>
            <td>Mathematics</td>
            <td>100</td>
            <td>${Maths}</td>
        </tr>
        
    `;

    document.getElementById("marksheetBody").innerHTML = marksheetBody;
    document.getElementById("result").innerText = `Total Marks: ${totalMarks}/400`;
    document.getElementById("percentage").innerText = `Percentage: ${percentage.toFixed(2)}%`;

    document.getElementById("studentForm").style.display = "none";
    document.getElementById("marksheet").style.display = "block";
}