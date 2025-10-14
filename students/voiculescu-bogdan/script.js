// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Bogdan",
    lastName: "Voiculescu",
    email: "bogdan@csie.ase.ro",
    phone: "+40 111 222 333",
    birthDate: "2003-08-21",
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1115",
  },
  skills: [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "Python", level: 60, category: "Backend" },
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Un website personal creat cu HTML și CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/username/project1",
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/username/project2",
    },
  ],
  avatar:
    "https://ui-avatars.com/api/?name=Ion+Popescu&size=200&background=random",
};

function createPersonalPage() {
  const app = document.getElementById("app");

  // Header Avatar + Nume

  const header = document.createElement("header");
  header.className = "hero";

  const avatar = document.createElement("img");
  avatar.src = studentData.avatar;
  avatar.alt = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
  avatar.className = "avatar";

  const name = document.createElement("h1");
  name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;

  header.appendChild(avatar);
  header.appendChild(name);
  app.appendChild(header);

  // Sectiune Personal Information

  const personalInformationSection = document.createElement("section");
  const {
    firstName: prenume,
    lastName: nume,
    email: email,
    phone: telefon,
    birthDate: dataNastere,
  } = studentData.personalInfo;

  const firstNameParagraph = document.createElement('p');
  firstNameParagraph.textContent = prenume;

  const lastNameParagraph = document.createElement('p');
  lastNameParagraph.textContent = nume;

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = email;

  const phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = telefon;

  const birthDateParagraph = document.createElement('p');
  birthDateParagraph.textContent = dataNastere;

  personalInformationSection.appendChild(firstNameParagraph);
  personalInformationSection.appendChild(lastNameParagraph);
  personalInformationSection.appendChild(emailParagraph);
  personalInformationSection.appendChild(phoneParagraph);
  personalInformationSection.appendChild(birthDateParagraph);
  app.appendChild(personalInformationSection);

  // Sectiune educatie

  
}

document.addEventListener("DOMContentLoaded", createPersonalPage);
