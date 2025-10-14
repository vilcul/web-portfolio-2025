const studentData = {
  personalInfo: {
    firstName: "Mihaela",
    lastName: "Militaru",
    birthDate: "2002-08-26"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1114"
  },
  skills: [
    { name: "HTML", level: 100, category: "Frontend" },
    { name: "CSS", level: 100, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 60, category: "Frontend" },
    { name: "C#", level: 60, category: "Backend" },
    { name: "SQL", level: 80, category: "Database" }
  ],
  projects: [
    {
      title: "Tic-tac-toe",
      description: "Joc tic-tac-toe",
      technologies: ["HTML","Javascript", "CSS"],
      link: "https://feliciamm.github.io/Tic-Tac-Toe/"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://feliciamm.github.io/Project-Calculator/"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Mihaela+Militaru&size=200"
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
  
  const educationDiv = document.createElement('div');
  educationDiv.className = 'education';

  const education = document.createElement('h2');
  education.textContent = `${studentData.education.university} - ${studentData.education.faculty} (Year ${studentData.education.year})`;

  educationDiv.appendChild(education);

  const projectsDiv = document.createElement('div');
  projectsDiv.className = 'projects';

  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Projects';
  projectsDiv.appendChild(projectsTitle);

  studentData.projects.forEach(project => {
    const projectEl = document.createElement('div');
    projectEl.className = 'project';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const techList = document.createElement('p');
    techList.textContent = `Technologies: ${project.technologies.join(', ')}`;

    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = 'View Project';
    link.target = '_blank';

    projectEl.appendChild(title);
    projectEl.appendChild(description);
    projectEl.appendChild(techList);
    projectEl.appendChild(link);

    projectsDiv.appendChild(projectEl);
  });

  header.appendChild(avatar);
  header.appendChild(name);

  app.appendChild(header);
  app.appendChild(educationDiv);
  app.appendChild(projectsDiv);
}


document.addEventListener('DOMContentLoaded', createPersonalPage);