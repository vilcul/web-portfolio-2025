// 1. JSON-ul studentData
const studentData = {
  personalInfo: {
    firstName: "Maria Victoria",
    lastName: "Iacob",
    email: "iacobmaria22@csie.ase.ro",
    phone: "+40 345 345 234",
    birthDate: "2003-08-12",
    address: {
      country: "Romania",
      city: "Bucuresti",
      street: {
        name: "Aleea Florilor",
        codPostal: 567890,
      },
    },
  },
  hobbies: [
    {
      type: "Pilates",
      description: "Ore de pilates de relaxare.",
    },
    {
      type: "Sala",
      description: "Sala pentru forta!",
    },
  ],
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1114",
  },
  skills: [
    { name: "HTML", level: 100, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Python", level: 75, category: "Backend" },
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
  languages: [
    { name: "Engleza", level: "C1" },
    { name: "Franceza", level: "B2" },
  ],
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=IacobMariaVictoria",
};

// 2. Funcție pentru crearea structurii paginii
function createPersonalPage() {
  const app = document.getElementById("app");

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

  const sectionPersonalData = document.createElement("section");

  const headerPersonalData = document.createElement("h2");
  headerPersonalData.textContent = "Informații personale";
  sectionPersonalData.appendChild(headerPersonalData);

  const email = document.createElement("div");
  email.textContent = "Email: " + studentData.personalInfo.email;
  sectionPersonalData.appendChild(email);

  const phone = document.createElement("div");
  phone.textContent = "Telefon: " + studentData.personalInfo.phone;
  sectionPersonalData.appendChild(phone);

  const birthDate = document.createElement("div");
  birthDate.textContent =
    "Data nasterii: " + studentData.personalInfo.birthDate;
  sectionPersonalData.appendChild(birthDate);

  const street = document.createElement("p");
  street.textContent =
    "Strada: " + studentData.personalInfo.address.street.name;
  sectionPersonalData.appendChild(street);

  const postalCode = document.createElement("p");
  postalCode.innerHTML = `<strong>Cod postal:</strong> ${studentData.personalInfo.address.street.codPostal}`;
  sectionPersonalData.appendChild(postalCode);

  const city = document.createElement("p");
  city.textContent = "Oras: " + studentData.personalInfo.address.city;
  sectionPersonalData.appendChild(city);

  const country = document.createElement("p");
  country.textContent = "Tara: " + studentData.personalInfo.address.country;
  sectionPersonalData.appendChild(country);

  app.appendChild(sectionPersonalData);

  const sectionEducation = document.createElement("section");

  const headerEducation = document.createElement("h2");
  headerEducation.textContent = "Sectiune Educatie";
  sectionEducation.appendChild(headerEducation);

  const university = document.createElement("p");
  university.textContent = "Universitatea: " + studentData.education.university;
  sectionEducation.appendChild(university);

  const faculty = document.createElement("p");
  faculty.textContent = "Facultatea: " + studentData.education.faculty;
  sectionEducation.appendChild(faculty);

  const year = document.createElement("p");
  year.textContent = "Anul: " + studentData.education.year;
  sectionEducation.appendChild(year);

  const group = document.createElement("p");
  group.textContent = "Grupa mea: " + studentData.education.group;
  sectionEducation.appendChild(group);

  app.appendChild(sectionEducation);

  const sectionSkills = document.createElement("section");

  const headerSkills = document.createElement("h2");
  headerSkills.textContent = "Sectiune skills";
  sectionSkills.appendChild(headerSkills);

  studentData.skills.forEach((skill) => {
    const skillName = document.createElement("p");
    skillName.textContent = skill.name;
    sectionSkills.appendChild(skillName);

    const skillCategory = document.createElement("p");
    skillCategory.textContent = skill.category;
    sectionSkills.appendChild(skillCategory);

    const progress = document.createElement("progress");
    progress.value = skill.level;
    progress.max = 100;
    sectionSkills.appendChild(progress);
  });

  app.appendChild(sectionSkills);

  const sectionProjects = document.createElement("section");

  const headerProjects = document.createElement("h2");
  headerProjects.textContent = "Sectiunea de proiecte create de mine!";
  sectionProjects.appendChild(headerProjects);

  studentData.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "card";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectCard.appendChild(projectTitle);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectCard.appendChild(projectDescription);

    const techList = document.createElement("p");
    techList.textContent =
      "Tehnologiile folosite: " + project.technologies.join(", ");
    projectCard.appendChild(techList);

    const projectLinkOnline = document.createElement("a");
    projectLinkOnline.href = project.link;
    projectLinkOnline.textContent = "Link de GitHub";
    projectCard.appendChild(projectLinkOnline);

    projectCard.addEventListener("click", () => {
      alert("Ai accesat proiectul cu numele: " + project.title);
    });

    sectionProjects.appendChild(projectCard);
  });

  app.appendChild(sectionProjects);

  const sectionLanguages = document.createElement("section");

  const headerLanguages = document.createElement("h2");
  headerLanguages.textContent = "Sectiunea de limbi straine";
  sectionLanguages.appendChild(headerLanguages);

  studentData.languages.forEach((language) => {
    const langDiv = document.createElement("div");
    langDiv.className = "inline-custom";
    const langName = document.createElement("p");
    langName.textContent = language.name;
    const langNivel = document.createElement("p");
    langNivel.textContent = language.level;
    langDiv.appendChild(langName);
    langDiv.appendChild(langNivel);
    sectionLanguages.appendChild(langDiv);
  });

  app.appendChild(sectionLanguages);

  const sectionHobbies = document.createElement("section");

  const headerHobbies = document.createElement("h2");
  headerHobbies.textContent = "Sectiunea de hobbies";
  sectionHobbies.appendChild(headerHobbies);

  const ulHobbies = document.createElement("ul");
  studentData.hobbies.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = `${hobby.type} care are descrierea ${hobby.description}`;
    ulHobbies.appendChild(li);
  });

  sectionHobbies.appendChild(ulHobbies);
  app.appendChild(sectionHobbies);

  const footer = document.createElement("footer");
  footer.className = "footer";
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/IacobVictoria";
  githubLink.textContent = "Click me! Link pentru github-ul meu !";
  githubLink.target = "_blank";
  footer.appendChild(githubLink);

  app.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", createPersonalPage);
