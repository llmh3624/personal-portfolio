function filterProjects(language) {
  var projects = document.getElementsByClassName("work-project");

  for (var i = 0; i < projects.length; i++) {
    if (
      language === "all" ||
      projects[i].getAttribute("data-language") === language
    ) {
      projects[i].style.display = "grid";
    } else {
      projects[i].style.display = "none";
    }
  }
}

// Show all projects by default
filterProjects("all");
