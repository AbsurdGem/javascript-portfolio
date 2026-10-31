const project1 = {
  title: "Heart Disease Risk Prediction",
  summary:
    "A machine learning project focused on predicting heart disease risk.",
  image:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  repository:
    "https://github.com/AbsurdGem/Heart-Disease-Risk-Prediction"
};

const project2 = {
  title: "StudySprint Mobile Application",
  summary:
    "A mobile application project designed to support studying and productivity.",
  image:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  repository: "https://github.com/AbsurdGem/StudySprint"
};

const project3 = {
  title: "Rolodex Contact Manager",
  summary:
    "A contact management application for storing and organizing contact information.",
  image:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  repository: "https://github.com/AbsurdGem/RolodexContactManager"
};

// Store the project objects in an array
const projectData = [project1, project2, project3];

let storedProjects = sessionStorage.getItem("portfolioProjects");

if (storedProjects === null) {
  // Convert the project array to a JSON string and store it
  sessionStorage.setItem(
    "portfolioProjects",
    JSON.stringify(projectData)
  );

  storedProjects = sessionStorage.getItem("portfolioProjects");
}

// Convert the stored JSON string back into a JavaScript array
const savedProjects = JSON.parse(storedProjects);
//  Dynamically render the stored projects on the page
const projectList = document.getElementById("projectList");

savedProjects.forEach(function (project) {
  // Create a container for each project
  const projectCard = document.createElement("div");
  projectCard.className = "project";

  // Create and add the project title
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  // Create and add the project summary
  const projectSummary = document.createElement("p");
  projectSummary.textContent = project.summary;

  // Create and add the project image
  const projectImage = document.createElement("img");
  projectImage.src = project.image;
  projectImage.alt = project.title + " project";
  projectImage.width = 100;

  // Create the repository link
  const projectLink = document.createElement("a");
  projectLink.href = project.repository;
  projectLink.target = "_blank";
  projectLink.textContent = "View Repository";

  // Add the created elements to the project container
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectSummary);
  projectCard.appendChild(projectLink);

  // Add the completed project to the Projects section
  projectList.appendChild(projectCard);
});
      // Create an array of skills and display them using a loop
      const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "GitHub",
        "Docker",
        "Kubernetes"
      ];

      const skillsList = document.getElementById("skillsList");

      skills.forEach(function (skill) {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
      });
// Select and modify two existing DOM elements


const projectsHeading = document.querySelector("#projects h2");
projectsHeading.textContent = "My Software Development Projects";


const projectContainer = document.getElementById("projects");
projectContainer.style.border = "3px solid steelblue";

      
const darkModeToggle = document.getElementById("darkModeToggle");
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

// Save the dark mode preference when the toggle changes
darkModeToggle.addEventListener("change", function () {
  document.body.classList.toggle(
    "dark-mode",
    darkModeToggle.checked
  );

  if (darkModeToggle.checked) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

      // Display a timed confirmation for contact form submissions
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  // Prevent the form from refreshing the webpage.
  event.preventDefault();

  // Retrieve the user's name.
  const senderName = document.getElementById("senderName").value;

  // Display a loading message.
  formStatus.textContent = "Sending message...";

  // Replace the loading message after 2.5 seconds.
  setTimeout(function () {
    formStatus.textContent =
      "Thank you, " + senderName + "! Message sent successfully!";
  }, 2500);
});