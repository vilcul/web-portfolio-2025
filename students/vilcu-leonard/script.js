// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Leonard",
    lastName: "Vilcu",
    email: "leo.vilcu@csie.ase.ro",
    phone: "+40 987 654 321",
    birthDate: "2003-10-05"
  },
  education: {
    university: "ASE Bucuresti",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1115"
  },
  skills: [
    { name: "HTML", level: 30, category: "Frontend" },
    { name: "CSS", level: 20, category: "Frontend" },
    { name: "JavaScript", level: 30, category: "Frontend" },
    { name: "Python", level: 55, category: "Backend" }
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Un website personal creat cu HTML și CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/vilcu-leonard/project1"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/vilcu-leonard/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Leo+Vilcu&size=200&background=random"
};

// 1. JSON-ul studentData (vezi mai sus)

// 2. Funcție pentru crearea structurii paginii
function createPersonalPage() {
  const app = document.getElementById('app');
  
  // Creează elementele DOM dinamic:
  // - Header cu avatar și nume
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
  
  const personalInfoSection = document.createElement("section");
  const {
    firstName: prenume,
    lastName: nume,
    email: email,
    phone: telefon,
    birthDate: dataNastere,
  } = studentData.personalInfo;

  const name = document.createElement('h1');
  name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = email;

  const phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = telefon;

  const birthDateParagraph = document.createElement('p');
  birthDateParagraph.textContent = dataNastere;

  personalInfoSection.appendChild(name);
  personalInfoSection.appendChild(emailParagraph);
  personalInfoSection.appendChild(phoneParagraph);
  personalInfoSection.appendChild(birthDateParagraph);
  
  header.appendChild(personalInfoSection);
  header.appendChild(avatar);
  app.appendChild(header);
  
  // ... continuă cu restul secțiunilor
}

// 3. Apelează funcția când DOM-ul este gata
document.addEventListener('DOMContentLoaded', createPersonalPage);