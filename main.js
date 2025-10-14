async function loadStudents() {
    try {
      const response = await fetch('students.json');
      const data = await response.json();
      renderStudentCards(data.students);
    } catch (error) {
      console.error('Eroare la încărcarea studenților:', error);
    }
  }
  
  function renderStudentCards(students) {
    const grid = document.getElementById('students-grid');
    
    students.forEach(student => {
      const card = document.createElement('div');
      card.className = 'student-card';
      
      const avatar = document.createElement('img');
      avatar.src = student.avatar;
      avatar.alt = `${student.firstName} ${student.lastName}`;
      
      const name = document.createElement('h3');
      name.textContent = `${student.firstName} ${student.lastName}`;
      
      const group = document.createElement('p');
      group.textContent = `Grupa: ${student.group}`;
      
      const link = document.createElement('a');
      link.href = `students/${student.folder}/index.html`;
      link.textContent = 'Vezi portofoliu →';
      link.className = 'portfolio-link';
      
      card.appendChild(avatar);
      card.appendChild(name);
      card.appendChild(group);
      card.appendChild(link);
      
      grid.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadStudents);