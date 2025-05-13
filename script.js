const modalOverlay = document.querySelector('.info-popup');
const closeModal = document.getElementById('closeModal');
const visitProjectBtn = document.getElementById('visitProject');
const popupContainer = document.querySelector('.popup-container');
const readMoreLinks = document.querySelectorAll('.readmore');

const projectInfo = {
  'Amazdraw': {
    // title: 'AmazDraw Animation Studio',
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">AmazDraw Animation Studio</h2>
      <p class="text-gray-600 mb-4">A professional animation studio specializing in 2D animation, whiteboard animation, and explainer videos. Established in 2019, offering high-quality services and training programs.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>User-friendly homepage with responsive design</li>
        <li>Detailed service offerings</li>
        <li>Project gallery showcasing past work</li>
        <li>Secure contact form powered by PHP Mailer</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>HTML5 for website structure</li>
        <li>Tailwind CSS for styling</li>
        <li>JavaScript for interactivity</li>
        <li>PHP Mailer for secure email handling</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Responsive Design:</h3>
      <p class="text-gray-600 mb-4">Ensures seamless user experience across all devices, including desktops, tablets, and smartphones.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Performance & Aesthetics:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Fast loading times</li>
        <li>Easy customization with Tailwind's utility-first classes</li>
        <li>Modern aesthetics with a professional look</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Portfolio Description:</h3>
      <p class="text-gray-600">AmazDraw Animation Studio is a professional website developed using HTML, Tailwind CSS, JavaScript, and PHP Mailer. This project showcases my skills in responsive design, interactive UI development, and secure email handling, serving as a testament to my proficiency in modern web development practices.</p>
    `,
    link: 'https://amazdraw.com/'
  },
  'Task Manager': {
    title: 'Task Manager',
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Task Manager</h2>
      <p class="text-gray-600 mb-4">Task Manager एक productivity tool है जो tasks को organize करने में मदद करता है। इसमें task prioritization, deadlines, और reminders जैसे features हैं।</p>
    `,
    link: 'https://example.com/taskmanager'
  },
  'CokeCota': {
    title: 'CokeCota',
    content: `
  <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Coca-Cola Animated Advertisement</h2>
  <p class="text-gray-600 mb-4">
    An engaging animated advertisement featuring a central black circle with a red border displaying the "Coca-Cola" logo. Upon hovering, a Coca-Cola bottle emerges, scaling from 0 to full size while performing a 360-degree rotation, creating a captivating visual effect.
  </p>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Interactive hover effect revealing the Coca-Cola bottle</li>
    <li>Smooth scaling and rotation animations</li>
    <li>Responsive design ensuring compatibility across devices</li>
    <li>Clean and modern aesthetic aligning with Coca-Cola's branding</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>HTML5 for structural markup</li>
    <li>Tailwind CSS for styling and responsive design</li>
    <li>JavaScript for handling interactive animations</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Responsive Design:</h3>
  <p class="text-gray-600 mb-4">
    The advertisement is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.
  </p>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Performance & Aesthetics:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Optimized animations for smooth performance</li>
    <li>Minimalistic design focusing on brand elements</li>
    <li>Consistent color scheme reflecting Coca-Cola's identity</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Overview:</h3>
  <p class="text-gray-600">
    This project showcases a creative approach to advertising using web technologies. By combining HTML, Tailwind CSS, and JavaScript, it delivers an interactive and visually appealing representation of the Coca-Cola brand, demonstrating proficiency in modern web development practices.
  </p>
`,
    link: 'https://example.com/cokecota'
  },
  'Slider': {
    title: 'Slider',
    content: `<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Animal Image Slider</h2>
  <p class="text-gray-600 mb-4">
    A dynamic image slider showcasing various animals with descriptive details. Users can navigate through the images using left and right arrows, or the slider auto-plays with a 5-second interval, offering a smooth and engaging browsing experience.
  </p>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Auto-play functionality with 5-second transitions</li>
    <li>Manual navigation using left and right arrows</li>
    <li>Descriptive content for each animal image</li>
    <li>Smooth CSS transitions for a clean experience</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>HTML5 for structural layout</li>
    <li>Tailwind CSS for styling and responsiveness</li>
    <li>JavaScript for interactivity and timing logic</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">Responsive Design:</h3>
  <p class="text-gray-600 mb-4">
    Fully responsive and adaptable across screen sizes, from desktops to tablets and mobile devices.
  </p>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">Performance & Aesthetics:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Fast and fluid transitions</li>
    <li>Clean design with focus on animal visuals and details</li>
    <li>Minimal code with optimized user experience</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Overview:</h3>
  <p class="text-gray-600">
    This project demonstrates an animated image slider using HTML, Tailwind CSS, and JavaScript. It highlights user interaction with arrow navigation and time-based autoplay, making it a compelling UI element for showcasing content.
  </p>`,
    link: 'https://example.com/slider'
  },
  'Living-Eyesr': {
    title: 'Living-Eyesr',
    content: `<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Interactive Circular Face with Eye-Tracking</h2>
  <p class="text-gray-600 mb-4">
    An engaging web animation featuring a circular face with eyes that dynamically follow the user's cursor movements. This interactive design creates a playful and immersive user experience.
  </p>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Features:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Responsive circular face design with proportional eyes</li>
    <li>Real-time eye movement tracking based on cursor position</li>
    <li>Smooth and natural animation transitions</li>
    <li>Enhanced user engagement through interactive visuals</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>HTML5 for semantic structure</li>
    <li>Tailwind CSS for utility-first styling and responsive design</li>
    <li>JavaScript for real-time cursor tracking and DOM manipulation</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Responsive Design:</h3>
  <p class="text-gray-600 mb-4">
    The animation is fully responsive, ensuring consistent behavior and appearance across various devices and screen sizes.
  </p>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Performance & Aesthetics:</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li>Optimized JavaScript for smooth performance without lag</li>
    <li>Clean and minimalistic design focusing on user interaction</li>
    <li>Consistent color scheme enhancing visual appeal</li>
  </ul>
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Project Overview:</h3>
  <p class="text-gray-600">
    This project demonstrates the effective use of web technologies to create an interactive and visually appealing animation. By combining HTML, Tailwind CSS, and JavaScript, it showcases the ability to enhance user experience through dynamic and responsive design elements.
  </p>`,
    link: 'https://example.com/living-eyesr'
  },
  'Calculator': {
    title: 'Calculator',
    content: `<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">🧮 Mac-Style Calculator – Project Overview</h2>
  <p class="text-gray-600 mb-4">
    This project showcases a web-based calculator designed to emulate the sleek and functional interface of the macOS calculator app. 
    Built using HTML, Tailwind CSS, and JavaScript, it offers a responsive and interactive user experience.
  </p>
  
  <h3 class="text-xl font-semibold text-gray-800 mb-2">🔧 Key Features</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li><strong>Authentic macOS Design:</strong> Mimics the appearance and layout of the native macOS calculator, providing users with a familiar interface.</li>
    <li><strong>Responsive Layout:</strong> Ensures optimal usability across various devices, adjusting seamlessly to different screen sizes.</li>
    <li><strong>Interactive Buttons:</strong> Each button provides immediate visual feedback upon interaction, enhancing user engagement.</li>
    <li><strong>Functional Operations:</strong> Supports basic arithmetic operations, allowing users to perform calculations efficiently.</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">🛠️ Technologies Used</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li><strong>HTML5:</strong> For structuring the calculator's layout and elements.</li>
    <li><strong>Tailwind CSS:</strong> For utility-first styling, enabling rapid and responsive design.</li>
    <li><strong>JavaScript:</strong> For implementing the calculator's functionality and interactivity.</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">📱 Responsive Design</h3>
  <p class="text-gray-600 mb-4">
    The calculator's design adapts to various screen sizes, ensuring a consistent and user-friendly experience on desktops, tablets, and mobile devices.
  </p>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">🎨 Performance & Aesthetics</h3>
  <ul class="list-disc list-inside text-gray-600 mb-4">
    <li><strong>Smooth Transitions:</strong> Utilizes Tailwind's transition utilities to provide fluid animations for button presses.</li>
    <li><strong>Clean Typography:</strong> Employs clear and legible fonts, enhancing readability and user experience.</li>
    <li><strong>Consistent Color Scheme:</strong> Adheres to a neutral palette reminiscent of macOS aesthetics, ensuring visual harmony.</li>
  </ul>

  <h3 class="text-xl font-semibold text-gray-800 mb-2">📎 Project Overview</h3>
  <p class="text-gray-600">
    This Mac-style calculator project demonstrates proficiency in modern web development practices. By combining semantic HTML, utility-first CSS with Tailwind, and interactive JavaScript, it delivers a functional and visually appealing application that enhances user experience through dynamic and responsive design elements.
  </p>`,
    link: 'https://example.com/calculator'
  }
};

readMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const card = link.closest('.post');
    const cardTitle = card.querySelector('h4').textContent.trim();

    if (projectInfo[cardTitle]) {
      popupContainer.innerHTML = projectInfo[cardTitle].content;
      visitProjectBtn.href = projectInfo[cardTitle].link;
      modalOverlay.classList.remove('hidden');
    }
  });
});

closeModal.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});
