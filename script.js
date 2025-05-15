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

// services-info---------------------------------------------------------------------------------------------------------------->>>>>>

const servicesModalOverlay = document.querySelector('.info-services-popup');
const closeServicesModal = document.getElementById('closeModal-services');
const servicesPopupContainer = document.querySelector('.popup-services-container');
const readMoreServicesLinks = document.querySelectorAll('.readmore-services');

const servicesInfo = [
  {
    title: 'Web Design',
    image: 'images/Designing.webp',
    alt: 'Web Design',
    description: 'Creating user-friendly and visually appealing website layouts using tools like Figma, HTML, and Tailwind CSS. Focus on UX/UI for optimal user engagement.',
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Web Design</h2>
      <p class="text-gray-600 mb-4">Web Design is the process of conceptualizing, planning, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">What I Offer:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Responsive and modern layouts</li>
        <li>User Interface (UI) and User Experience (UX) design</li>
        <li>Design tools like Figma and Adobe XD</li>
        <li>Design implementation using Tailwind CSS</li>
      </ul>
      <p class="text-gray-600">Good web design helps to keep visitors on your site, improves conversion, and builds trust with your audience.</p>
    `
  },
  {
    title: 'Web Development',
    image: 'images/Developing.webp',
    alt: 'Web Development',
    description: 'Bringing designs to life with interactive, efficient, and scalable code using HTML, CSS, JavaScript, React, and backend APIs.',
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Web Development</h2>
      <p class="text-gray-600 mb-4">Web development involves building and maintaining websites; it's the work that happens behind the scenes to make a website look great, work fast, and perform well with a seamless user experience.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">What I Do:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Frontend development using React, HTML, CSS, and JavaScript</li>
        <li>Backend development with Node.js and Express</li>
        <li>REST API integration and CRUD operations</li>
        <li>Optimized, maintainable, and scalable code</li>
      </ul>
      <p class="text-gray-600">From landing pages to full-stack applications, I turn ideas into fully functional websites and apps.</p>
    `
  },
  {
    title: 'Debugging',
    image: 'images/Debbuging.webp',
    alt: 'Debugging',
    description: 'Identifying and fixing issues in codebases using browser dev tools, logs, and debugging tools to ensure smooth app performance.',
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Debugging</h2>
      <p class="text-gray-600 mb-4">Debugging is a critical skill in software development where code is analyzed and corrected to ensure functionality and performance meet expectations.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">What I Solve:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Fixing UI glitches and layout issues</li>
        <li>Resolving JavaScript runtime errors</li>
        <li>API integration bugs</li>
        <li>Optimizing performance bottlenecks</li>
      </ul>
      <p class="text-gray-600">With thorough analysis and testing, I ensure code is robust, efficient, and error-free for production-ready deployment.</p>
    `
  }
];

readMoreServicesLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const card = link.closest('div[data-aos]');  // changed from '.post' because cards don't have .post class in your markup
    const cardTitle = card.querySelector('h4').textContent.trim();

    // Find service info based on title
    const service = servicesInfo.find(s => s.title === cardTitle);

    if (service) {
      servicesPopupContainer.innerHTML = service.content;
      servicesModalOverlay.classList.remove('hidden');
    }
  });
});

closeServicesModal.addEventListener('click', () => {
  servicesModalOverlay.classList.add('hidden');
});



// blog-popup------------------------------------------------------------------------------>>>>>>

const blogModalOverlay = document.querySelector('.info-blog-popup');
const closeBlogModal = document.getElementById('closeModal-blog');
const blogPopupContainer = document.querySelector('.popup-blog-container');
const readMoreBlogButtons = document.querySelectorAll('.readmore-blog');

// Blog info data structure
const blogInfo = {
  '🧠 Understanding useEffect in React': {
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">🧠 Understanding useEffect in React</h2>
      <p class="text-gray-600 mb-4">React's <code>useEffect</code> hook gives functional components lifecycle powers. This article explains how it works, its syntax, dependency arrays, and cleanup functions.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Key Points:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Understanding side effects in React</li>
        <li>How to use useEffect properly</li>
        <li>Cleanup to prevent memory leaks</li>
        <li>Dependency array significance</li>
      </ul>
      <p class="text-gray-600">Mastering useEffect helps you write efficient and bug-free React components.</p>
    `
  },
  '🔥 Top 5 VSCode Extensions Every Developer Should Have': {
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">🔥 Top 5 VSCode Extensions Every Developer Should Have</h2>
      <p class="text-gray-600 mb-4">Discover must-have VSCode extensions like Prettier, ESLint, GitLens, Bracket Pair Colorizer, and Live Server to boost your productivity and code quality.</p>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Extensions Include:</h3>
      <ul class="list-disc list-inside text-gray-600 mb-4">
        <li>Prettier - Code formatter</li>
        <li>ESLint - Linting and error checking</li>
        <li>GitLens - Git supercharged</li>
        <li>Bracket Pair Colorizer - Better bracket visibility</li>
        <li>Live Server - Real-time preview</li>
      </ul>
      <p class="text-gray-600">These tools help maintain code quality and speed up development.</p>
    `
  },
  '🤝 Let’s Connect!': {
    content: `
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">🤝 Let’s Connect!</h2>
      <p class="text-gray-600 mb-4">Got ideas or feedback? Let's collaborate! Reach out on <a href="https://www.linkedin.com/in/chandan-singh-8735201b3/" class="text-indigo-600 underline">LinkedIn</a> or email me at <a href="mailto:code.chandansingh@gmail.com" class="text-indigo-600 underline">code.chandansingh@gmail.com</a>.</p>
    `
  }
};

// Add click event listeners for all Read More buttons
readMoreBlogButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = button.getAttribute('data-title');
    if (blogInfo[title]) {
      blogPopupContainer.innerHTML = blogInfo[title].content;
      blogModalOverlay.classList.remove('hidden');
    }
  });
});

// Close modal on close button click
closeBlogModal.addEventListener('click', () => {
  blogModalOverlay.classList.add('hidden');
});

// Optional: Close modal when clicking outside modal content
blogModalOverlay.addEventListener('click', (e) => {
  if (e.target === blogModalOverlay) {
    blogModalOverlay.classList.add('hidden');
  }
});


// Skills data: selector and max %
    const skills = [
      { selector: 'html-progress', max: 100 },
      { selector: 'javascript-progress', max: 80 },
      { selector: 'php-progress', max: 80 },
      { selector: 'reactjs-progress', max: 40 },
    ];

    // Animate count from 0 to max for an element
    function animateCount(el, max) {
      let current = 0;
      const increment = Math.ceil(max / 100); // speed of increment

      const interval = setInterval(() => {
        current += increment;
        if (current >= max) {
          current = max;
          clearInterval(interval);
        }
        el.textContent = current + '%';
      }, 10); // update every 20ms
    }

    // Intersection Observer callback
    function onIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const span = entry.target.querySelector('span');
          if (!span) return;

          // Find skill based on class list
          const skill = skills.find(s => span.classList.contains(s.selector));
          if (skill) {
            animateCount(span, skill.max);
            observer.unobserve(entry.target); // stop observing after animation
          }
        }
      });
    }

    // Setup Intersection Observer
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver(onIntersection, observerOptions);

    // Observe each skill item container
    document.querySelectorAll('.skill-item').forEach(skillEl => {
      observer.observe(skillEl);
    });