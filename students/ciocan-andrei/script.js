const studentData = {
  personalInfo: {
    firstName: "Andrei",
    lastName: "Ciocan",
    email: "ciocanandrei22@stud.ase.ro",
    phone: "+40 72 727 222",
    birthDate: "2003-09-04"
  },
  education: {
    university: "Bucharest University of Economic Studies",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1113"
  },
  skills: [
    { name: "Java SpringBoot", level: 99, category: "Backend" },
    { name: "Claude AI", level: 80, category: "Vibecoding" },
    { name: "Kotlin - Jetpack Compose", level: 70, category: "Mobile development" },
    { name: "Grafana", level: 90, category: "Backend/Monitoring" }
  ],
  projects: [
    {
      title: "Travel Companion",
      description: "Mobile Application for Efficient Travel Planning",
      technologies: ["Kotlin with Jetpack Compose UI toolkit", "Ktor", "Cloud Firestore", "Stripe", "Amadeus API"],
      link: "https://github.com/AndreiHammer/bachelor-thesis-travel-companion"
    },
    {
      title: "City Mapping",
      description: "PDF to JSON Converter",
      technologies: ["Python", "OpenAI API", "LangChain", "Pydantic"],
      link: "https://github.com/AndreiHammer/cityMapping"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Andrei+Ciocan&size=200&background=random"
};

function createPersonalPage() {
      const app = document.getElementById('app');

      const header = document.createElement('header');
      header.className = 'hero';

      const avatar = document.createElement('img');
      avatar.src = studentData.avatar;
      avatar.alt = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
      avatar.className = 'avatar';

      const name = document.createElement('h1');
      name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;

      header.appendChild(avatar);
      header.appendChild(name);
      app.appendChild(header);

      const infoSection = document.createElement('section');
      infoSection.className = 'info';
      infoSection.innerHTML = `
        <h2>Personal Information</h2>
        <p><strong>Email:</strong> ${studentData.personalInfo.email}</p>
        <p><strong>Phone:</strong> ${studentData.personalInfo.phone}</p>
        <p><strong>Birth Date:</strong> ${studentData.personalInfo.birthDate}</p>
      `;
      app.appendChild(infoSection);

      const eduSection = document.createElement('section');
      eduSection.innerHTML = `
        <h2>Education</h2>
        <p><strong>University:</strong> ${studentData.education.university}</p>
        <p><strong>Faculty:</strong> ${studentData.education.faculty}</p>
        <p><strong>Year:</strong> ${studentData.education.year}</p>
        <p><strong>Group:</strong> ${studentData.education.group}</p>
      `;
      app.appendChild(eduSection);

      const skillsSection = document.createElement('section');
      skillsSection.innerHTML = `<h2>Skills</h2>`;
      const skillsContainer = document.createElement('div');
      skillsContainer.className = 'skills';
      
      studentData.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill';
        skillDiv.innerHTML = `
          <div class="skill-name">${skill.name} (${skill.category})</div>
          <div class="progress-bar"><div class="progress" style="width:${skill.level}%"></div></div>
        `;
        skillsContainer.appendChild(skillDiv);
      });

      skillsSection.appendChild(skillsContainer);
      app.appendChild(skillsSection);

      const projectsSection = document.createElement('section');
      projectsSection.innerHTML = `<h2>Projects</h2>`;
      const projectsContainer = document.createElement('div');
      projectsContainer.className = 'projects';

      studentData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project';
        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p class="tech-list"><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
          <p><a href="${project.link}" target="_blank">View on GitHub</a></p>
        `;
        projectsContainer.appendChild(card);
      });

      projectsSection.appendChild(projectsContainer);
      app.appendChild(projectsSection);

      const footer = document.createElement('footer');
      footer.innerHTML = `
        <p>© ${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}</p>
        <p>
          <a href="${studentData.personalInfo.email}">Email</a> |
          <a href="${studentData.personalInfo.phone}">Phone</a>
        </p>
      `;
      app.appendChild(footer);
    }

    document.addEventListener('DOMContentLoaded', createPersonalPage);
