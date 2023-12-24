const projects = [
    {
        title : "Weather App",
        link : "https://github.com/moulikuntrapaku/weather-app",
        description : "A sleek weather app that provides real-time forecasts with a user-friendly interface, delivering accurate weather information at your fingertips.",
        technologies: "react html css javascript"
    },
    {
        title : "Sky Fox",
        link : "https://github.com/moulikuntrapaku/Skyfox",
        description : "SkyFox is movie ticket booking website. Users can easily book and download their tickets using this website",
        technologies: "react springboot postgresql"
    },
    {
        title : "Save Oxygen Foundation",
        link : "https://github.com/moulikuntrapaku/SaveOxygenFoundation",
        description : "Designed and developed a comprehensive website for Save Oxygen Foundation, showcasing our mission, activities and impactful work.",
        technologies: "html css js"
    },
    {
        title : "Weather App",
        link : "https://github.com/moulikuntrapaku/weather-app",
        description : "A sleek weather app that provides real-time forecasts with a user-friendly interface, delivering accurate weather information at your fingertips.",
        technologies: "react html css javascript "
    },
    {
        title : "Weather App",
        link : "https://github.com/moulikuntrapaku/weather-app",
        description : "A sleek weather app that provides real-time forecasts with a user-friendly interface, delivering accurate weather information at your fingertips.",
        technologies: "React HTML CSS JS"
    },
    {
        title : "Weather App",
        link : "https://github.com/moulikuntrapaku/weather-app",
        description : "A sleek weather app that provides real-time forecasts with a user-friendly interface, delivering accurate weather information at your fingertips.",
        technologies: "React HTML CSS JS"
    }
];


function renderProjects() {
    const container = document.getElementById("project-container");


    projects.forEach((project) => {
        const projectBox = document.createElement('div');
        projectBox.className = 'project-box';

        const fileIcon = document.createElement('i');
        fileIcon.className = "fa-regular fa-folder-closed";
        fileIcon.style.color = '#64FFDA';

        const gitIcon = document.createElement('i');
        gitIcon.className = "fa-brands fa-github";

        const iconHolder = document.createElement('div');
        iconHolder.className = "project-icon-holder";
        iconHolder.appendChild(fileIcon);
        iconHolder.appendChild(gitIcon);

        const projectTitle = document.createElement('div');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('div');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        const projectSkills = document.createElement('div');
        projectSkills.className = 'project-skills';
        projectSkills.textContent = project.technologies;

        projectBox.appendChild(iconHolder);
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectDescription);
        projectBox.appendChild(projectSkills);

        projectBox.onclick = function() {
            window.open(project.link, "_blank");
        };

        container.appendChild(projectBox);

    })  
}


window.onload = renderProjects;