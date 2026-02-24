const tabs = document.getElementById("tabs");
const allJobs = document.getElementById("allJobs");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");
let activeTab = "All";
const tabImage = "./asset/jobs.png";

document.querySelectorAll("[data-id]").forEach(card => {
    card.dataset.status = "All";
    setBadge(card,"All");
});
