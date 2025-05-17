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
  'Coca-Cola': {
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
    link: 'https://relaxed-bavarois-cdef36.netlify.app/'
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
    link: 'https://shiny-melba-17d763.netlify.app/'
  },
  'Living-Eyes': {
    title: 'Living-Eyesr',
    content: `<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">👀 Eye Tracker – Project Overview</h2>
<p class="text-gray-600 mb-4">
  This project is a fun and interactive browser-based Eye Tracker that makes cartoon-style eyes follow the user's cursor in real time. It's built using HTML, Tailwind CSS, and JavaScript to ensure both responsiveness and performance.
</p>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🔧 Key Features</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>Interactive Eye Movement:</strong> Both eyes smoothly follow the cursor based on its X and Y position.</li>
  <li><strong>Responsive Design:</strong> The layout adjusts to fit all screen sizes, from mobile phones to desktops.</li>
  <li><strong>Smooth Animation:</strong> Subtle and natural movement animations make the interaction feel fluid.</li>
  <li><strong>Minimal Design:</strong> Clean UI using Tailwind CSS ensures a visually pleasant experience.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🛠️ Technologies Used</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>HTML5:</strong> To structure the face and eye elements semantically.</li>
  <li><strong>Tailwind CSS:</strong> For responsive, utility-first design and styling.</li>
  <li><strong>JavaScript:</strong> For handling real-time mouse tracking and pupil movement.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">📱 Responsive Design</h3>
<p class="text-gray-600 mb-4">
  The layout is fully responsive, ensuring the eyes scale properly on all screen sizes while maintaining the center-focused face design.
</p>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🎨 Performance & Aesthetics</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>Smooth Transitions:</strong> Pupil movement uses transition effects for fluid motion.</li>
  <li><strong>Simple Layout:</strong> Uses minimal elements to keep rendering fast and the UI clean.</li>
  <li><strong>Fun Visual:</strong> Gives a cartoon-like experience while demonstrating DOM manipulation skills.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">📎 Project Summary</h3>
<p class="text-gray-600">
  The Eye Tracker project is a creative demonstration of real-time user interaction using DOM manipulation and CSS transforms. With lightweight code and smooth responsiveness, it’s a great example of mixing animation, interactivity, and responsiveness in a simple UI.
</p>
`,
    link: 'https://luxury-pie-706b4b.netlify.app/'
  },
  'Calculator': {
    title: 'Calculator',
    content: `<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">🧮 Gradient Scientific Calculator – Project Overview</h2>
<p class="text-gray-600 mb-4">
  This project is a modern web-based scientific calculator featuring a sleek gradient background and advanced math functions. Developed using HTML, Tailwind CSS, and JavaScript, it combines vibrant UI design with interactive and functional features.
</p>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🔧 Key Features</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>Scientific Mode:</strong> Toggle scientific functions such as sin, cos, tan, log, ln, square root, square, and reciprocal.</li>
  <li><strong>Interactive Interface:</strong> Buttons react visually when pressed, improving usability and providing clear feedback.</li>
  <li><strong>Real-Time Calculation:</strong> Displays instant results as users type equations, offering a dynamic experience.</li>
  <li><strong>Toggleable Layout:</strong> Scientific keys are hidden by default and can be shown or hidden with a toggle button.</li>
  <li><strong>Keyboard-Free Input:</strong> Entirely button-based, making it ideal for touch devices as well as desktops.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🛠️ Technologies Used</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>HTML5:</strong> To build a structured and accessible calculator interface.</li>
  <li><strong>Tailwind CSS:</strong> For fast, utility-first styling and a beautiful responsive gradient layout.</li>
  <li><strong>JavaScript:</strong> To implement the core calculator logic and handle scientific operations securely.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">📱 Responsive Design</h3>
<p class="text-gray-600 mb-4">
  The calculator is designed to look and work great on all screen sizes, adjusting the layout and button spacing smoothly across mobile, tablet, and desktop views.
</p>

<h3 class="text-xl font-semibold text-gray-800 mb-2">🎨 Performance & Aesthetics</h3>
<ul class="list-disc list-inside text-gray-600 mb-4">
  <li><strong>Gradient Background:</strong> Uses a colorful linear gradient to provide a vibrant and modern feel.</li>
  <li><strong>Rounded UI Components:</strong> Fully rounded buttons and containers create a friendly, soft appearance.</li>
  <li><strong>Smooth Transitions:</strong> Button clicks and toggle effects enhance the overall user experience.</li>
</ul>

<h3 class="text-xl font-semibold text-gray-800 mb-2">📎 Project Overview</h3>
<p class="text-gray-600">
  This calculator project showcases an effective blend of design and functionality. Featuring both standard and scientific operations, it demonstrates practical frontend skills and thoughtful UI design using Tailwind CSS and vanilla JavaScript. Its responsive and modern look makes it a great example of interactive web tools.
</p>
`,
    link: 'https://strong-gelato-5fecb7.netlify.app/'
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

 const contactModalOverlay = document.getElementById('contactModalOverlay');
  const openBtn = document.getElementById('openContactModal');
  const closeBtn = document.getElementById('closeContactModal');

  openBtn.addEventListener('click', () => {
    contactModalOverlay.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    contactModalOverlay.classList.add('hidden');
  });

  // Optional: Close modal if user clicks outside the form
  contactModalOverlay.addEventListener('click', (e) => {
    if (e.target === contactModalOverlay) {
      contactModalOverlay.classList.add('hidden');
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





    // nav--------------------------------------------------------------------------------------->>>>>>

    const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });