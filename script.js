const appData = {
    expertise: [
        {
            title: 'Flutter & Dart',
            icon: '📱',
            summary: 'Building high-performance, visually stunning cross-platform mobile and web applications.',
            details: 'Deep expertise in Dart and Flutter framework, focusing on widget-based UI development, state management (Provider, Bloc), and platform-specific integrations for Android, iOS, and web.'
        },
        {
            title: 'UI/UX Design',
            icon: '✨',
            summary: 'Crafting intuitive and engaging user interfaces with a keen eye for modern design principles.',
            details: 'Proficient in creating seamless user experiences, from wireframing and prototyping to implementing polished, responsive designs that prioritize usability and aesthetic appeal.'
        },
        {
            title: 'Backend Development',
            icon: '💾',
            summary: 'Developing robust server-side logic and APIs using Node.js and Express.js for scalable applications.',
            details: 'Skilled in designing and implementing RESTful APIs, managing databases (MongoDB, PostgreSQL), and ensuring efficient data flow between frontend and backend services.'
        },
        {
            title: 'Database Management',
            icon: '🗄️',
            summary: 'Designing and managing efficient databases for structured and unstructured data storage.',
            details: 'Experience with both NoSQL (MongoDB, Firebase Firestore) and SQL (PostgreSQL) databases, including schema design, querying, and optimization for performance.'
        },
        {
            title: 'State Management',
            icon: '📊',
            summary: 'Implementing scalable and maintainable state management solutions for complex applications.',
            details: 'Strong understanding and practical application of various state management patterns and libraries in Flutter (Provider, Bloc/Cubit) and web frameworks (React Context, Redux).'
        },
        {
            title: 'Cloud Services',
            icon: '☁️',
            summary: 'Leveraging cloud platforms like Firebase for backend services, authentication, and real-time data.',
            details: 'Proficient in utilizing Firebase for authentication, Firestore for real-time database, Cloud Functions for serverless logic, and Storage for media assets, enabling rapid application deployment.'
        }
    ],
    projects: [
        {
            category: 'Mobile',
            title: 'E-commerce Mobile App',
            image: 'https://placehold.co/400x300/100A1A/ff00ff?text=E-commerce+App',
            description: 'A cross-platform e-commerce mobile application built with Flutter, featuring product listings, secure payment gateways, and robust user authentication. Focus on performance and smooth UX.',
            tech: ['Flutter', 'Firebase', 'Bloc']
        },
        {
            category: 'Mobile',
            title: 'Recipe Sharing App',
            image: 'https://placehold.co/400x300/100A1A/00aaff?text=Recipe+App',
            description: 'An interactive mobile application for culinary enthusiasts to share and discover recipes, complete with user profiles, search, and a favorites system. Utilizes Flutter for a vibrant UI.',
            tech: ['Flutter', 'Node.js', 'PostgreSQL']
        },
        {
            category: 'Web',
            title: 'Portfolio Website (React)',
            image: 'https://placehold.co/400x300/100A1A/ffff00?text=Web+Portfolio',
            description: 'A personal portfolio website showcasing projects and skills, built with React and Tailwind CSS. Designed for responsiveness and modern aesthetics.',
            tech: ['React.js', 'Tailwind CSS', 'JavaScript']
        },
        {
            category: 'Mobile',
            title: 'Fitness Tracker App',
            image: 'https://placehold.co/400x300/100A1A/00ff00?text=Fitness+Tracker',
            description: 'A comprehensive mobile fitness tracking application enabling users to log workouts, visualize progress, and set reminders. Features intuitive data visualization.',
            tech: ['Flutter', 'Provider', 'SQFlite']
        },
        {
            category: 'UI/UX Concept',
            title: 'Smart Home Dashboard',
            image: 'https://placehold.co/400x300/100A1A/ff00ff?text=Smart+Home+UI',
            description: 'UI/UX concept and prototype for a smart home management dashboard, focusing on clean design and easy control of various devices. Designed with a futuristic aesthetic.',
            tech: ['Figma', 'Prototyping', 'UI/UX']
        },
         {
            category: 'Open Source',
            title: 'Flutter Utility Package',
            image: 'https://placehold.co/400x300/100A1A/00ff00?text=Utility+Lib',
            description: 'A lightweight open-source Flutter package providing common utility functions and custom widgets to accelerate development workflows.',
            tech: ['Flutter', 'Dart', 'Open Source']
        }
    ],
    experience: [
        {
            type: 'Work',
            title: 'Mobile Developer',
            company: 'Tech Solutions Inc.',
            duration: 'Jan 2023 - Present',
            description: 'Developed and maintained cross-platform mobile applications using Flutter. Collaborated on feature development, bug fixing, and performance optimization for key client projects.'
        },
        {
            type: 'Work',
            title: 'Frontend Developer Intern',
            company: 'Web Innovators Co.',
            duration: 'June 2022 - Dec 2022',
            description: 'Assisted in building responsive web interfaces using React and modern JavaScript. Gained hands-on experience with component-based architecture and API integration.'
        },
        {
            type: 'Education',
            title: 'B.Sc. in Computer Science',
            institution: 'University of Technology Jakarta',
            duration: '2019 - 2023',
            description: 'Graduated with honors, specializing in Software Engineering and Mobile Application Development. Completed a capstone project on AI-powered mobile recommendation systems.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Expertise Section
    const expertiseGrid = document.getElementById('expertise-grid');
    appData.expertise.forEach(item => {
        const card = document.createElement('div');
        card.className = 'glass-pane p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-pink-500';
        card.innerHTML = `
            <div class="text-4xl mb-4">${item.icon}</div>
            <h3 class="text-2xl font-bold mb-2 text-white">${item.title}</h3>
            <p class="text-gray-400 font-medium">${item.summary}</p>
            <div class="details hidden mt-4 text-gray-300 transition-all duration-500">
                <p>${item.details}</p>
            </div>
        `;
        expertiseGrid.appendChild(card);
        card.addEventListener('click', () => {
            const details = card.querySelector('.details');
            details.classList.toggle('hidden');
        });
    });

    // Projects Section
    const projectFiltersContainer = document.getElementById('project-filters');
    const projectGallery = document.getElementById('project-gallery');
    const categories = ['All', ...new Set(appData.projects.map(p => p.category))];
    
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.textContent = cat;
        button.className = 'project-filter-btn px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 border-2 border-blue-500 hover:bg-blue-500 hover:text-white';
        if(cat === 'All') button.classList.add('bg-blue-500', 'text-white');
        projectFiltersContainer.appendChild(button);
    });

    const renderGallery = (filter) => {
        projectGallery.innerHTML = '';
        const filteredProjects = filter === 'All' ? appData.projects : appData.projects.filter(p => p.category === filter);
        filteredProjects.forEach(item => {
            const techTags = item.tech.map(t => `<span class="bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full">${t}</span>`).join('');
            const card = document.createElement('div');
            card.className = 'glass-pane rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2">${item.title}</h3>
                    <p class="text-gray-400">${item.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">${techTags}</div>
                </div>
            `;
            projectGallery.appendChild(card);
        });
    };

    projectFiltersContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('project-filter-btn')) {
            document.querySelectorAll('.project-filter-btn').forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
            e.target.classList.add('bg-blue-500', 'text-white');
            renderGallery(e.target.textContent);
        }
    });

    renderGallery('All');

    // Experience Section
    const experienceGrid = document.getElementById('experience-grid');
    appData.experience.forEach(item => {
        const card = document.createElement('div');
        card.className = 'glass-pane p-6 rounded-lg shadow-lg';
        card.innerHTML = `
            <h3 class="text-2xl font-bold mb-2 text-white">${item.title}</h3>
            <p class="text-lg font-semibold text-pink-400">${item.company || item.institution}</p>
            <p class="text-gray-400">${item.duration}</p>
            <p class="mt-4 text-gray-300">${item.description}</p>
        `;
        experienceGrid.appendChild(card);
    });
    
    // Proficiency Radar Chart
    const radarCtx = document.getElementById('proficiencyRadarChart').getContext('2d');
    const proficiencyRadarData = {
        labels: ['Flutter Development', 'UI/UX Design', 'Backend Development', 'Database Management', 'Cloud Services', 'Code Optimization'],
        datasets: [
            {
                label: 'Ahmad Alfaroki\'s Proficiency',
                data: [9, 8, 7, 8, 7, 9], // Example data: Scale 1-10
                backgroundColor: 'rgba(0, 170, 255, 0.2)', // Blue
                borderColor: '#00aaff',
                pointBackgroundColor: '#00aaff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00aaff',
            }
        ]
    };
    new Chart(radarCtx, {
        type: 'radar',
        data: proficiencyRadarData,
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' },
                    pointLabels: {
                        font: { size: 14, family: 'Rajdhani', weight: 'bold' },
                        color: '#E0E0E0'
                    },
                    ticks: {
                        display: false, // Hide numeric ticks
                        beginAtZero: true,
                        max: 10,
                        color: '#0A0A10', // Text color for ticks
                        backdropColor: 'rgba(224, 224, 224, 0.8)', // Background behind ticks
                        backdropPadding: 4,
                        borderRadius: 4,
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#E0E0E0',
                        font: { size: 16, family: 'Orbitron' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '/10';
                        }
                    }
                }
            }
        }
    });

    // Smooth scroll active nav link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust offset based on header height
            if (pageYOffset >= sectionTop - 100) { 
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
