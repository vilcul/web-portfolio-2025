// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Vlad",
    lastName: "Anghel",
    email: "anghelvlad@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-05-15"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "Python", level: 60, category: "Backend" }
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Un website personal creat cu HTML și CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/username/project1"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/username/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=vlad-Anghel&size=200&background=random"
};

// 1. JSON-ul studentData (vezi mai sus)

// 2. Funcție pentru crearea structurii paginii
function createPersonalPage() {
  const app = document.getElementById('app');
  
  // Creează elementele DOM dinamic:
  // - Header cu avatar și nume    VVVVV
  // - Secțiune informații personale
  // - Secțiune educație
  // - Secțiune skills (cu bare de progres)
  // - Secțiune proiecte (carduri)
  // - Footer cu link-uri sociale
  
  // Exemplu pentru header:
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


  const personalInfoSection = document.createElement('section');
  personalInfoSection.className = 'personal-info card';
  personalInfoSection.innerHTML = `
    <h2>Informații Personale</h2>
    <p><strong>Email:</strong> ${studentData.personalInfo.email}</p>
    <p><strong>Telefon:</strong> ${studentData.personalInfo.phone}</p>
    <p><strong>Data nașterii:</strong> ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(personalInfoSection);
    // ... continuă cu restul secțiunilor
    const educationSection = document.createElement('section');
    educationSection.className = 'education card';
    educationSection.innerHTML = `
    <h2>Educație</h2>
    <p><strong>Universitate:</strong> ${studentData.education.university}</p>
    <p><strong>Facultate:</strong> ${studentData.education.faculty}</p>
    <p><strong>An:</strong> ${studentData.education.year}</p>
    <p><strong>Grupă:</strong> ${studentData.education.group}</p>
  `;
  app.appendChild(educationSection);
    // ... continuă cu restul secțiunilor
    const skillsSection = document.createElement('section');
    skillsSection.className = 'skills card';
    skillsSection.innerHTML = `<h2>Competențe</h2>`;
    studentData.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill';
        skillDiv.innerHTML = `
            <p>${skill.name} (${skill.category})</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.level}%;"></div>
            </div>
        `;
        skillsSection.appendChild(skillDiv);
    }
    );
    app.appendChild(skillsSection);
    // ... continuă cu restul secțiunilor
    const projectsSection = document.createElement('section');
    projectsSection.className = 'projects card';
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
    }
    );
    app.appendChild(projectsSection);
    // ... continuă cu restul secțiunilor
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
    <p>© 2025 Vlad Anghel</p>
    <p>
      <a href="
        https://www.linkedin.com/in/vlad-anghel" target="_blank">LinkedIn</a>
    </p>
  `;
  app.appendChild(footer);
  
  
  // ... continuă cu restul secțiunilor
}

// 3. Apelează funcția când DOM-ul este gata
document.addEventListener('DOMContentLoaded', createPersonalPage);