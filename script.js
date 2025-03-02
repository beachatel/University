fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    const subjectsDiv = document.getElementById("subjects");

    // Iterate over each subject in the data
    for (const subject in data) {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");

      // Create and append the title
      const title = document.createElement("h2");
      title.innerText = subject;
      subjectDiv.appendChild(title);

      // Create links for each week
      data[subject].forEach((week) => {
        const link = document.createElement("a");
        link.innerText = week.week;
        link.href = week.path;
        link.onclick = function (event) {
          event.preventDefault();
          loadProject(week.path);
        };
        subjectDiv.appendChild(link);
      });

      // Append the subject div to subjects div
      subjectsDiv.appendChild(subjectDiv);
    }
  });

function loadProject(path) {
  document.getElementById("projectFrame").src = path;
}
