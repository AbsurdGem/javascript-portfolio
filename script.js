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
  title: "MachinePulse AI",
  summary:
    "A machine learning application for manufacturing analytics, built with Python, scikit-learn, and Streamlit.",
  image: "images/machinepulse.png",
  repository: "https://github.com/AbsurdGem/MachinePulse-AI.git" 
    video: "https://youtu.be/tPoDYH-R9Mw",
  demo: "https://machinepulse-ai.streamlit.app/"
};

const project3 = {
  title: "Text-Tone Translator",
  summary:
    "An Android application built with Kotlin that uses AI to rewrite text in different tones through a Python API service.",
  image: "images/text_tone_translator.png",
  repository: "https://github.com/AbsurdGem/TextToneTranslator.git" 
  video: "https://youtu.be/mYb3SvJwOSQ"
};


// Store the project objects in an array
const projectData = [project1, project2, project3];

let storedProjects = sessionStorage.getItem("portfolioProjects");



sessionStorage.setItem(
  "portfolioProjects",
  JSON.stringify(projectData)
);

const savedProjects = JSON.parse(
  sessionStorage.getItem("portfolioProjects")
);

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
 projectImage.className = "project-image";

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

// Add a YouTube demonstration link
if (project.video) {
  const videoLink = document.createElement("a");
  videoLink.href = project.video;
  videoLink.target = "_blank";
  videoLink.rel = "noopener noreferrer";
  videoLink.textContent = "Watch Demo";
  videoLink.className = "project-button";

  projectCard.appendChild(videoLink);
}

// Add a live application link
if (project.demo) {
  const demoLink = document.createElement("a");
  demoLink.href = project.demo;
  demoLink.target = "_blank";
  demoLink.rel = "noopener noreferrer";
  demoLink.textContent = "Try Live App";
  demoLink.className = "project-button";

  projectCard.appendChild(demoLink);
}

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
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const senderName = document.getElementById("senderName").value;

  submitButton.disabled = true;
  formStatus.textContent = "Sending message...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Message failed to send");
    }

    formStatus.textContent =
      "Thank you, " + senderName + "! Your message was sent successfully!";

    contactForm.reset();

  } catch (error) {
    formStatus.textContent =
      "Oops! Something went wrong. Please try again.";

    console.error("Form submission error:", error);

  } finally {
    submitButton.disabled = false;
  }
});
