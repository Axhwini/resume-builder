function updateResume() {

    document.getElementById("namePreview").innerText =
        document.getElementById("nameInput").value || "Your Name";

    document.getElementById("emailPreview").innerText =
        "Email: " + (document.getElementById("emailInput").value || "example@mail.com");

    document.getElementById("phonePreview").innerText =
        "Phone: " + (document.getElementById("phoneInput").value || "0000000000");

    // --------- EDUCATION ----------
    let eduFields = document.querySelectorAll(".eduField");
    let eduList = "";

    eduFields.forEach(e => {
        if (e.value.trim() !== "") eduList += "<li>" + e.value + "</li>";
    });

    document.getElementById("eduPreview").innerHTML =
        eduList || "<li>Your education details here...</li>";

    // --------- SKILLS ----------
    let skillFields = document.querySelectorAll(".skillField");
    let skillList = "";

    skillFields.forEach(s => {
        if (s.value.trim() !== "") skillList += "<li>" + s.value + "</li>";
    });

    document.getElementById("skillsPreview").innerHTML =
        skillList || "<li>Your skills here...</li>";

    // --------- EXPERIENCE ----------
    let expFields = document.querySelectorAll(".expField");
    let expList = "";

    expFields.forEach(e => {
        if (e.value.trim() !== "") expList += "<li>" + e.value + "</li>";
    });

    document.getElementById("expPreview").innerHTML =
        expList || "<li>Your experience here...</li>";

    // --------- PROJECTS ----------
    let titles = document.querySelectorAll(".projectTitle");
    let descs = document.querySelectorAll(".projectDesc");

    let projectList = "";

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].value.trim() || descs[i].value.trim()) {
            projectList +=
                "<li><b>" +
                titles[i].value +
                "</b><br>" +
                descs[i].value +
                "</li>";
        }
    }

    document.getElementById("projectPreview").innerHTML =
        projectList || "<li>Your project details here...</li>";
}


// ------------ ADD FIELDS ------------
function addEdu() {
    let box = document.createElement("textarea");
    box.className = "eduField";
    box.rows = 2;
    box.placeholder = "Enter education";
    box.onkeyup = updateResume;
    document.getElementById("eduList").appendChild(box);
}

function addSkill() {
    let box = document.createElement("input");
    box.type = "text";
    box.className = "skillField";
    box.placeholder = "Enter a skill";
    box.onkeyup = updateResume;
    document.getElementById("skillsList").appendChild(box);
}

function addExp() {
    let box = document.createElement("textarea");
    box.className = "expField";
    box.rows = 2;
    box.placeholder = "Enter experience";
    box.onkeyup = updateResume;
    document.getElementById("expList").appendChild(box);
}

function addProject() {
    let c = document.getElementById("projectList");

    let t = document.createElement("input");
    t.type = "text";
    t.className = "projectTitle";
    t.placeholder = "Project Title";
    t.onkeyup = updateResume;

    let d = document.createElement("textarea");
    d.className = "projectDesc";
    d.rows = 2;
    d.placeholder = "Project Description";
    d.onkeyup = updateResume;

    let hr = document.createElement("hr");

    c.appendChild(t);
    c.appendChild(d);
    c.appendChild(hr);
}


// ------------ DOWNLOAD PDF (MULTIPAGE) ------------
function downloadPDF() {

    let resume = document.getElementById("resume");

    html2pdf().set({
        margin: 5,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    })
    .from(resume)
    .save();
}

