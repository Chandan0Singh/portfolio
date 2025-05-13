const modalOverlay = document.querySelector('.info-popup');
const closeModal = document.getElementById('closeModal');
const modalTitle = modalOverlay.querySelector('h2');
const modalContent = modalOverlay.querySelector('p');
const visitProjectBtn = document.getElementById('visitProject');

const readMoreLinks = document.querySelectorAll('.readmore');

const projectInfo = {
  'Amazdraw': {
    title: 'Amazdraw',
    description: 'Amazdraw ek animation studio hai jo 2D animation, whiteboard animation, aur motion graphics mein expert hai. Yahaan aap animation aur illustration ke courses seekh sakte hain.',
    link: 'https://amazdraw.com/'
  },
  'Task Manager': {
    title: 'Task Manager',
    description: 'Task Manager ek productivity tool hai jo tasks ko organize karne mein madad karta hai. Ismein task prioritization, deadlines, aur reminders jaise features hain.',
    link: 'https://example.com/taskmanager'
  },
  'CokeCota': {
    title: 'CokeCota',
    description: 'CokeCota ek interactive animation page hai jo Coca-Cola ke branding aur storytelling ko showcase karta hai. Yahaan animation aur web design ka fusion dekha ja sakta hai.',
    link: 'https://example.com/cokecota'
  },
  'Slider': {
    title: 'Slider',
    description: 'Slider ek image slider component hai jo HTML, CSS, aur JavaScript ka use karke banaya gaya hai. Yahaan aapko responsive design aur DOM manipulation ka idea milega.',
    link: 'https://example.com/slider'
  },
  'Living-Eyesr': {
    title: 'Living-Eyesr',
    description: 'Living-Eyesr ek language translation web project hai jo real-time translation aur multilingual support provide karta hai.',
    link: 'https://example.com/living-eyesr'
  },
  'Calculator': {
    title: 'Calculator',
    description: 'Calculator ek simple web-based calculator hai jo basic arithmetic operations perform karta hai. Yahaan aapko JavaScript ke basics samajhne ko milenge.',
    link: 'https://example.com/calculator'
  }
};

readMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const card = link.closest('.post');
    const cardTitle = card.querySelector('h4').textContent.trim();

    if (projectInfo[cardTitle]) {
      modalTitle.textContent = projectInfo[cardTitle].title;
      modalContent.textContent = projectInfo[cardTitle].description;
      visitProjectBtn.href = projectInfo[cardTitle].link;
      modalOverlay.classList.remove('hidden');
    }
  });
});

closeModal.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});
