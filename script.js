let jobs = [];

function postJob() {

    let title = document.getElementById("title").value;
    let client = document.getElementById("client").value;
    let skills = document.getElementById("skills").value;
    let budget = document.getElementById("budget").value;

    if (title === "" || client === "" || skills === "" || budget === "") {
        alert("Please fill all fields");
        return;
    }

    let job = {
        title: title,
        client: client,
        skills: skills,
        budget: budget
    };

    jobs.push(job);

    displayJobs();

    document.getElementById("title").value = "";
    document.getElementById("client").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("budget").value = "";

    alert("Job posted successfully!");
}

function displayJobs() {

    let list = document.getElementById("jobList");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    jobs.forEach(function(job, index) {

        if (job.title.toLowerCase().includes(search)) {

            list.innerHTML += `
                <tr>
                    <td>${job.title}</td>
                    <td>${job.client}</td>
                    <td>${job.skills}</td>
                    <td>₹${job.budget}</td>
                    <td>
                        <button class="delete"
                        onclick="deleteJob(${index})">
                        Delete
                        </button>
                    </td>
                </tr>
            `;
        }
    });
}

function deleteJob(index) {

    jobs.splice(index, 1);

    displayJobs();
}