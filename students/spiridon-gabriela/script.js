// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Gabriela",
    lastName: "Spiridon",
    email: "gabriela.spiridon@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-03-26"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1115"
  },
  skills: [
    { name: "Java", level: 80, category: "Backend" },
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" }    
  ],
  projects: [
    {
      title: "ALGA-Bug-Tracker",
      description: "Aplicație web pentru gestionarea rezolvării bug-urilor",
      technologies: ["HTML", "CSS"," JavaScript"],
      link: "https://github.com/GabrielaSpiridon/ALGA-Bug-Tracker"
    },
    {
      title: "Payment-Gap-Analyzer",
      description: "Identificator al diferențelor salariale pe baza genului",
      technologies: ["Python","JavaScript"],
      link: "https://github.com/GabrielaSpiridon/Payment-Gap-Analyzer"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Gabriela+Spiridon&size=200"
};function createPersonalPage() {
  const app = document.getElementById('app');

  // --- HEADER ---
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

  // --- INFORMAȚII PERSONALE ---
  const personalSection = document.createElement('section');
  personalSection.className = 'personal-info';
  personalSection.innerHTML = `
    <h2>Informații personale</h2>
    <p><strong>Email:</strong> ${studentData.personalInfo.email}</p>
    <p><strong>Telefon:</strong> ${studentData.personalInfo.phone}</p>
    <p><strong>Data nașterii:</strong> ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(personalSection);

  // --- EDUCAȚIE ---
  const educationSection = document.createElement('section');
  educationSection.className = 'education';
  educationSection.innerHTML = `
    <h2>Educatie</h2>
    <p>${studentData.education.university} - ${studentData.education.faculty}</p>
    <p>Anul ${studentData.education.year}, grupa ${studentData.education.group}</p>
  `;
  app.appendChild(educationSection);

  // --- SKILLS ---
  const skillsSection = document.createElement('section');
  skillsSection.className = 'skills';
  skillsSection.innerHTML = `<h2>Abilitati</h2>`;
  
  studentData.skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `
      <span>${skill.name}</span>
      <div class="bar">
        <div class="progress" style="width: ${skill.level}%;"></div>
      </div>
    `;
    skillsSection.appendChild(skillDiv);
  });
  app.appendChild(skillsSection);

  // --- PROIECTE ---
  const projectsSection = document.createElement('section');
  projectsSection.className = 'projects';
  projectsSection.innerHTML = `<h2>Proiecte</h2>`;

  studentData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tehnologii:</strong> ${project.technologies.join(", ")}</p>
      <a href="${project.link}" target="_blank">Vezi proiectul</a>
    `;
    projectsSection.appendChild(card);
  });
  app.appendChild(projectsSection);

  // --- FOOTER ---
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Gabriela Spiridon</p>
  `;
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', createPersonalPage);