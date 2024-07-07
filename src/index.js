function filterProjects(language) {
  var projects = document.getElementsByClassName("project");

  for (var i = 0; i < projects.length; i++) {
    if (
      language === "all" ||
      projects[i].getAttribute("data-language") === language
    ) {
      projects[i].style.display = "block";
    } else {
      projects[i].style.display = "none";
    }
  }
}

filterProjects("all");
