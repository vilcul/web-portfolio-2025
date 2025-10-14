// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Iorga",
    lastName: "Alexandru",
    email: "iorga.alex@csie.ase.ro",
    phone: "+40700000000",
    birthDate: "2004-04-11"
  },
  education: {
    university: "ASE",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1114"
  },
  skills: [
    { name: "ASP.NET Core", level: 70, category: "Backend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" }
  ],
  projects: [
    {
      title:"Snake Game",
      description: "A small snake game made with HTML and CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/username/project1"
    },
    {
      title: "Notes App",
      description: ".Net Core web application for taking notes",
      technologies: ["HTML", "CSS", "JavaScript", "ASP.NET Core"],
      link: "https://github.com/username/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Iorga+Alex&size=200&background=random"
};



// Funcție pentru a genera secțiunea de informații personale
function createPersonalInfoSection() {

 const app = document.getElementById('app');
 
  
  // ------------------------HEADER------------------------
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
  
  //------------------------PERSONAL INFO------------------------
  const personalInfoSection = document.createElement('section');
  personalInfoSection.className = 'personal-info';
  personalInfoSection.innerHTML = `
    <h2>Informații Personale</h2>
    <p><strong>Email:</strong> ${studentData.personalInfo.email}</p>
    <p><strong>Telefon:</strong> ${studentData.personalInfo.phone}</p>
    <p><strong>Data nașterii:</strong> ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(personalInfoSection);

    //------------------------EDUCATION------------------------
    const educationSection = document.createElement('section');
    educationSection.className = 'education';
    educationSection.innerHTML = `
      <h2>Educație</h2>
      <p><strong>Universitate:</strong> ${studentData.education.university}</p>
      <p><strong>Facultate:</strong> ${studentData.education.faculty}</p>
      <p><strong>An:</strong> ${studentData.education.year}</p>
      <p><strong>Grupă:</strong> ${studentData.education.group}</p>
    `;
    app.appendChild(educationSection);

    //------------------------SKILLS------------------------
    const skillsSection = document.createElement('section');
    skillsSection.className = 'skills';
    skillsSection.innerHTML = `<h2>Competențe</h2>`;
    studentData.skills.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill';
      skillDiv.innerHTML = `
        <p><strong>${skill.name}</strong> (${skill.category})</p>
        <div class="progress-bar">
          <div class="progress" style="width: ${skill.level}%;"></div>
        </div>
      `;
      skillsSection.appendChild(skillDiv);
    });
    app.appendChild(skillsSection);

    //------------------------PROJECTS------------------------
    const projectsSection = document.createElement('section');
    projectsSection.className = 'projects';
    projectsSection.innerHTML = `<h2>Proiecte</h2>`;
    studentData.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tehnologii:</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.link}" target="_blank">Vezi proiectul</a>
      `;
      projectsSection.appendChild(projectCard);
    });
    app.appendChild(projectsSection);

    //------------------------FOOTER------------------------
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `<p>&copy; ${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}</p>`;
  app.appendChild(footer);

}

// Așteaptă ca DOM-ul să fie încărcat înainte de a rula scriptul
document.addEventListener("DOMContentLoaded", createPersonalInfoSection());