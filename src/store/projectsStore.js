import { point } from "leaflet";
import { defineStore } from "pinia";

const imagePath = "/new-portfolio/images/projects/";
const techImagePath = "@/assets/images/tech/";
const testimonialImagePath = "@/assets/images/testimonials/";
const githubProfile = "https://github.com/Zeyad-Gamal/";

function createProject(project) {
  return {
    ...project,
    images: project.images.map(
      img => `${import.meta.env.BASE_URL}images/projects/${project.id}/${img}`
    ),
    tech: project.tech.map(
      techn => `${import.meta.env.BASE_URL}images/tech/${techn}.svg`
    ),
    url: `/project/${project.id}`,
    github_url: project.githubName ? githubProfile + `${project.githubName}` : null,
    testimonial: project.testimonial
      ? {
          ...project.testimonial,
          image: project.testimonial.image
            ? `${import.meta.env.BASE_URL}images/testimonials/${project.testimonial.image}`
            : null
        }
      : null
  };
}

const projectsData = [

    {
    id: 28,
    name: "Dokkanco",
    title: "DevOps & Production Deployment",
    description: "Production-ready DevOps infrastructure and CI/CD pipeline for a WhatsApp-first reseller storefront platform, deployed with Docker on Railway with automated builds, versioned container images, database backups, object storage, and production health checks.",
    githubName: "",
    demo_url: "https://dokkanco.store",
    images: ["1.png"],

    tech: [
        'docker',
        'github',
        'railway',
        'mysql',
        'cloudflare',
        'linux'
    ],

    points: [
        'Designed and deployed the production environment for the Dokkanco reseller storefront platform.',
        'Containerized the Laravel 13 backend using Docker with PHP 8.3 for a reproducible production environment.',
        'Implemented GitHub Actions CI/CD to automatically validate the application, run Laravel tests, build Docker images, and publish versioned images to Docker Hub.',
        'Implemented commit-based Docker image tagging to provide traceable and reproducible production deployments.',
        'Deployed the containerized Laravel backend on Railway and configured a managed MySQL database using Railway private networking.',
        'Configured Cloudflare R2 as object storage for production product images with public image delivery.',
        'Implemented automated MySQL database backups using mysqldump, gzip compression, and a dedicated Railway backup service.',
        'Stored database backups in a private Cloudflare R2 bucket with automated 30-day retention.',
        'Implemented a production health check endpoint covering application, database, cache, and storage availability.',
        'Configured separate production domains for the frontend and backend with Cloudflare DNS and HTTPS.',
        'Implemented production smoke testing covering authentication, storefronts, products, image uploads, and customer ordering flows.'
    ],

    technologies: [
        "Docker Used to containerize the Laravel backend and provide a reproducible production runtime.",
        "GitHub Actions Used to automate dependency validation, testing, Docker image building, and image publishing.",
        "Docker Hub Used as the container registry for storing versioned production Docker images.",
        "Railway Used as the production hosting platform for the containerized Laravel backend, managed MySQL database, and scheduled backup service.",
        "MySQL Used as the production relational database hosted as a managed Railway service.",
        "Cloudflare R2 Used as object storage for product images and private database backups.",
        "Cloudflare Used for DNS management, domain routing, and HTTPS for the production frontend and API domains.",
        "PHP 8.3 Used as the production runtime for the Laravel backend.",
        "Laravel 13 Used to build the production REST API with Sanctum Bearer Token authentication.",
        "Vue 3 Used for the production frontend, deployed as a static application on Cloudflare Pages.",
        "Git & GitHub Used for source control, version tracking, CI/CD triggering, and release management.",
        "mysqldump Used to create consistent production database backups.",
        "gzip Used to compress database backup files before storage.",
        "Health Checks Used to verify application, database, cache, and storage availability in production."
    ],

    idea: {
        overview: "A production DevOps environment for Dokkanco, a WhatsApp-first reseller storefront platform. The infrastructure combines Docker, GitHub Actions, Docker Hub, Railway, MySQL, Cloudflare R2, and Cloudflare DNS to provide a reproducible deployment workflow with versioned releases, automated backups, and production health checks.",

        problem: "Deploying and maintaining a production application manually can lead to inconsistent environments, difficult releases, limited rollback traceability, and data-loss risks. Dokkanco required a reliable deployment workflow that could support a real production application while remaining simple and cost-efficient for its early-stage usage.",

        solution: "A complete production workflow was implemented where GitHub Actions validates and tests application changes, builds versioned Docker images, and publishes them to Docker Hub. Railway runs the production backend and managed MySQL database, while Cloudflare R2 handles product images and private database backups. Automated scheduled backups, 30-day retention, commit-based image versioning, and health checks provide additional reliability and operational control."
    },

    type: "devops",
    role: "solo",
    duration: "Ongoing",
    status: "Live",
    year: "2026"
},

            {
                id: 26,
                name: "Waste Bank",
                title: "Recycling company",
                description: "A comprehensive management system for a waste purchasing and recycling platform",
                githubName: "",
                demo_url:"",
                images: ["2.png","1.png"],
                tech:['websocket','jwt','javascript','sequelize','nodejs','express','mysql'],
                points: [
                    'Node.js & Express backend providing RESTful APIs for the Waste Bank platform.',
                    'JWT-based authentication and role-based access control for Admins, Factories, and other users.',
                    'Sequelize ORM with a relational database for managing users, factories, requests, offers, purchases, sales, inventory, and shipments.',
                    'Real-time notifications using Socket.IO for instant updates and system events.',
                    'Email verification and notification services for secure account activation and user communication.',
                    'Scalable architecture designed to support the Admin Dashboard now and future mobile applications.',
                ],

                technologies: [
                    "JS (Node.js) Used as the primary programming language for building the backend and implementing business logic.",
                    "Express.js Used to build RESTful APIs, routes, controllers, and middleware.",
                    "Sequelize ORM Used for database modeling, relationships, queries, transactions, and data management.",
                    "MySQL Used as the relational database for storing users, factories, requests, offers, purchases, sales, inventory, shipments, and notifications.",
                    "JWT (JSON Web Tokens) Used for secure user authentication and protected API access.",
                    "Socket.IO Used to provide real-time notifications and instant updates between the backend and connected clients.",
                    "Joi Used for validating and sanitizing incoming API request data.",
                    "bcrypt Used for securely hashing and verifying user passwords.",
                    "Nodemailer / Email Service Used for email verification and system-related email communication.",
                    "REST API Used as the main communication layer between the backend and the Admin Dashboard, with support for future mobile applications."
                ],

                idea:{
                    overview:"A scalable backend system for a Waste Bank platform that manages the complete waste trading lifecycle, including factories, factory requests, offers, purchases, sales, inventory, shipments, notifications, and user authentication. The system provides secure REST APIs, real-time notifications, email verification, and role-based access control, with an architecture designed to support both web and future mobile applications.",
                    problem: "Traditional waste collection and trading processes can involve disconnected operations, manual tracking, and limited visibility across factories, purchases, sales, inventory, and shipments. This makes it difficult to manage the complete workflow efficiently and keep all parties updated on important actions and status changes.",
                    solution: "The system provides a centralized backend that connects the main waste management workflows into a single platform. It manages the lifecycle from factory requests and offers to purchases, inventory, sales, and shipments, while providing secure authentication, automated email verification, real-time notifications, validation, and role-based access control. The API-first architecture also allows the same backend to serve the current Admin Dashboard and future mobile applications."
                },


                type: "backend",
                role: "solo",
                duration: "2 months",
                status: "Completed",
                year: "2026"
            },

    {
id: 27,
name: "Waste Bank",
title: "DevOps & Cloud Deployment",
description: "Production-ready DevOps infrastructure and CI/CD pipeline for a containerized Waste Bank platform, deployed on AWS EC2 with automated builds, security scanning, and continuous delivery.",
githubName: "",
demo_url: "",
images: ["1.png"],
tech: [
'aws',
'docker',
'github',
'nginx',
'linux',
'mysql'
],

points: [
    'Designed and deployed a production environment on AWS EC2 for the Waste Bank platform.',
    'Containerized the backend, MySQL database, and Nginx reverse proxy using Docker and Docker Compose.',
    'Implemented GitHub Actions CI/CD to automatically test, build, scan, publish, and deploy Docker images to the production server.',
    'Integrated Docker Hub as the container image registry with commit-based image tagging for traceable deployments.',
    'Integrated Trivy vulnerability scanning into the CI pipeline to detect HIGH and CRITICAL vulnerabilities in container images.',
    'Configured Nginx as a reverse proxy with support for REST APIs, file uploads, and Socket.IO connections.',
    'Implemented automated production database migrations and post-deployment health checks with retry handling.',
    'Configured persistent Docker volumes for MySQL data and application uploads while keeping the database isolated from public access.'
],

technologies: [
    "AWS EC2 Used as the production compute environment for hosting the containerized application.",
    "Docker Used to containerize the backend application and production services with isolated and reproducible environments.",
    "Docker Compose Used to orchestrate the application, MySQL database, and Nginx services in the production environment.",
    "GitHub Actions Used to automate testing, Docker image building, vulnerability scanning, image publishing, and production deployment.",
    "Docker Hub Used as the container registry for storing and distributing versioned production images.",
    "Nginx Used as a reverse proxy and HTTP entry point for routing requests to the backend container.",
    "Trivy Used to scan production Docker images for OS and dependency vulnerabilities.",
    "Linux Used as the operating system and administration environment for the AWS EC2 production server.",
    "MySQL Used as the production relational database running in an isolated Docker container with persistent storage.",
    "Git & GitHub Used for source control, collaboration, version tracking, and triggering the CI/CD workflow.",
    "Sequelize CLI Used to execute and manage production database migrations during deployment.",
    "Docker Volumes Used for persistent MySQL database storage and application file uploads."
],

idea: {
    overview: "A production DevOps environment for the Waste Bank platform that automates the delivery of a containerized backend from GitHub to AWS EC2. The infrastructure combines Docker, Docker Compose, Nginx, GitHub Actions, Docker Hub, and Trivy to provide a repeatable and security-aware deployment workflow.",

    problem: "Deploying backend applications manually can lead to inconsistent environments, deployment errors, difficult rollbacks, and limited visibility into container security. The Waste Bank platform required a reliable way to move tested application changes from the development repository into a running production environment.",

    solution: "A complete CI/CD workflow was implemented to automatically test code changes, build versioned Docker images, scan them for vulnerabilities, publish them to Docker Hub, and deploy them to AWS EC2. Docker Compose manages the production services, Nginx handles incoming traffic and reverse proxying, persistent volumes protect database and uploaded-file data, and automated migrations and health checks validate successful deployments."
},

type: "devops",
role: "solo",
duration: "10 days",
status: "Completed",
year: "2026"


},




            {
    id: 25,
    name: "Medca Company",
    title: "Medca Management System",
    description: "A backend RESTful API system for managing medical equipment manufacturing operations, products, customer requests, and the company's public website.",
    githubName: "",
    demo_url: "https://medca-solutions.com",
    images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png"
    ],
    tech: [
        "nodejs",
        "express",
        "mysql",
        "jwt",
    ],

    points: [
        "Designed and developed a complete RESTful API from scratch",
        "JWT authentication and role-based authorization for secure admin access",
        "Product management with images, galleries, technical specifications, and recommendations",
        "Customer inquiry and custom manufacturing request management",
        "Admin dashboard APIs for managing products, categories, and customer messages",
        "Public website APIs for products and customer requests",
        "Database transactions to ensure data consistency across related operations",
        "File upload and image management using Multer"
    ],

    technologies: [
        "Node.js and Express.js for building scalable RESTful APIs",
        "Sequelize ORM for database modeling and relational data management",
        "MySQL as the primary relational database",
        "JWT for authentication and secure session management",
        "Role-Based Access Control (RBAC) for authorization",
        "Multer for handling product image uploads and storage",
        "Database transactions to maintain consistency between related entities",
        "REST API architecture serving both the public website and admin dashboard"
    ],

    idea: {
        overview: "Medca is a backend management system built for a medical equipment manufacturing company. It provides a unified RESTful API that powers both the company's public website and its internal administrative dashboard, allowing efficient management of products, manufacturing requests, customer inquiries, and business operations.",

        problem: "Manufacturing companies require a centralized backend capable of managing products, customer inquiries, customized equipment requests, and administrative workflows while exposing secure APIs for both internal and public-facing applications.",

        solution: "The solution was to build a scalable RESTful backend architecture using Node.js, Express.js, Sequelize, and MySQL. The system separates public and administrative functionalities, secures sensitive endpoints with JWT authentication and role-based authorization, supports image uploads, maintains relational data integrity through transactions, and provides a clean API architecture ready for production environments."
    },

    type: "backend",
    role: "solo",
    duration: "2 weeks",
    status: "Completed",
    year: "2025"
            },

            {
                id: 3,
                name: "Egyptian Embassy",
                title: "Embassy organization system",
                description: "An internal system to manage the company processes",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],
                tech:  [
                    // 'html5','css3','javascript','bootstrap','jquery',
                    'php','mysql','websocket'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Online visa and telegram application form',
                    'Approval workflow system',
                    'Paperless document management system',
                    'Complete the required paperwork online automatically and effortlessly.'
                ],

                idea: {
                    overview:"An internal system within the embassy assists the embassy administration in carrying out administrative processes, such as organizing files and digital documents. The application form allows for online visa and telegram applications, and the administrative office responsible for the site can then update or delete data, and approve or reject applications.",
                    problem: "The problem is the overcrowding that citizens experience when going to the consulate itself, as well as the many successive procedures and complicated steps, as the citizen goes to the headquarters and then moves from one office to another through numerous procedures.",
                    solution: "The solution is to create an internal system that includes an online application form for visas and telegrams, allowing citizens to complete the required paperwork online automatically and effortlessly. This system will help reduce overcrowding at the consulate and streamline the application process."
                },

                technologies: [
                    // "Html5 to structure the web pages",
                    // "Css3 and Bootstrap to style the web pages and make them responsive",
                    // "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "MVC architecture to organize the codebase and separate concerns",
                    "WebSocket to enable real-time communication for instant updates for visa and telegram application requests"
                ],

                type: "backend",

                role: "Team",
                duration: "10 days",
                status: "Completed",
                year: "2025"
            },

            {
                id: 16,
                name: "Hagzkora app",
                title: "Sports booking application",
                description: "An app for booking sports facilities that allows users to book sports fields.",
                shortLine:"App developed by the mobile developer using Flutter",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['php','laravel','mysql'],

                points: [
                    'User authentication and authorization system',
                    'Facility browsing and searching system',
                    'Booking management system',
                    'Payment gateway integration for booking payments',
                    'Admin panel for managing facilities and bookings',
                    'User dashboard for managing bookings and profile',
                    'Notification system for booking confirmations and reminders',
                    'Review and rating system for facilities',
                    'Reservation cancellation and refund system',
                    'SMS gateway integration for sending booking notifications via SMS',
                    'OTP verification system for secure user authentication during the booking process'
                ],

                idea: {
                    overview:"A sports booking application that allows users to book sports facilities such as fields and courts. The application provides features for browsing facilities, managing bookings, and processing payments.",
                    problem: "The problem is the need for a convenient and efficient way for users to book sports facilities, which can be challenging using traditional methods.",
                    solution: "The solution is to develop a sports booking application that provides a user-friendly interface for browsing and booking sports facilities. The application will streamline the booking process and provide essential features such as payment processing and booking management."
              },

                technologies: [
                    "PHP and Laravel to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "Payment gateway to facilitate secure online payments for bookings",
                    "SMS gateway to send booking notifications via SMS",
                    'OTP verification system to ensure secure user authentication during the booking process',
                    'Websocket to enable real-time updates for booking status and availability',
                    'RESTful API to facilitate communication between the application and external services'
                ],
                type: "backend",
                role: "Team",
                duration: "1 month",
                status: "Completed",
                year: "2025"
            },

            {
                id: 4,
                name: "Baitak app",
                title: "M-commerce app",
                description: "A mobile commerce app that allows users to buy and sell products online",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:  ['php','mysql','paymob'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Displaying products in their respective categories',
                    'Ordering products via social media from within the app',
                    'An application that allows merchants and users to buy and sell in exchange for a subscription.'
                ],

                idea: {
                    overview:"A mobile commerce application that enables users to buy and sell products online. The app provides a platform for merchants to showcase their products and for users to browse and make purchases conveniently from their mobile devices.",
                    problem: "The problem is the difficulty faced by merchants in reaching a wider audience and the inconvenience for users to find and purchase products from various sellers in one place.",
                    solution: "The solution is to develop a mobile commerce app that serves as a centralized platform for merchants and users. The app will allow merchants to create profiles, list their products, and manage orders, while users can easily browse through different categories, view product details, and make purchases directly from the app."
                },

                technologies: [
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "Paymob to facilitate secure online payments and transactions within the app",
                    "JWT for secure user authentication and authorization"
                ],

                type: "backend",

                role: "Solo",
                duration: "45 days",
                status: "Completed",
                year: "2025"
            },

            {
                id: 14,
                name: "Faroon academy",
                title: "Educational platform",
                description: "An educational platform that provides courses and learning materials for students",
                githubName: "j",
                demo_url:"u",
                images: ["1.png"],
                
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'User authentication and authorization system',
                    'Course and lectures management system',
                    'Quizzes and assessments to track student progress',
                    'Discussion forums for student interaction',
                    'Admin panel for managing platform content and users',
                    'Teacher dashboard for managing courses and students',
                    'News section to keep students updated with the latest information',
                    'Payment gateway integration for course purchases & payment using codes cards'
                ],

                idea: {
                    overview:"An educational platform that provides courses and learning materials for students. The platform includes features such as user authentication, course management, quizzes, discussion forums, and an admin panel for managing courses and students.",
                    problem: "The problem is the need for an online platform that offers comprehensive educational resources and facilitates student interaction and progress tracking.",
                    solution: "The solution is to develop an educational platform that consolidates various learning resources and tools into a single platform. This platform will allow students to access courses, participate in discussions, take quizzes, and track their progress effectively."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],
                type: "fullstack",

                role: "Solo",
                duration: " +1 month",
                status: "Completed",
                year: "2024"
            },
            
            {
                id: 2,
                name: "Rusukh company",
                title: "Rusukh company system",
                description: "An internal system specific to the company helps company management control company operations, internal conversations, and file sharing.",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png"],
                tech:  ['html5','css3','javascript','bootstrap','jquery','php','mysql'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'File sharing system',
                    'Internal messaging system',
                    'Task management system'
                ],

                idea: {
                    overview:"An internal system specific to the company helps the company's management to carry out administrative operations, such as organizing the company's digitized files and documents, creating organizational files, uploading any type of file, assigning files and tasks to employees, and creating employee emails. This system enjoys all security features.",
                    problem: "The company was facing challenges in managing its internal operations, communication, and file sharing among employees. There was a need for a centralized system to streamline these processes and improve overall efficiency.",
                    solution: "The solution was to develop a custom internal system that would address the specific needs of the company. This system would include features such as user authentication, file sharing, internal messaging, and task management, allowing employees to collaborate more effectively and manage their work more efficiently."
                },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",

                role: "Solo",
                duration: "4 days",
                status: "Completed",
                year: "2024"
            },



            {
                id: 1,
                name: "BiteQuick",
                title: "Restaurant Website",
                description: "A restaurant management system that allows users to browse the menu, place orders",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:  ['html5','css3','javascript','bootstrap'],
                points:[
                    'From scratch design and development',
                    'It is have a dynamic menu that can be updated easily',
                    'Users can place orders online',
                    'Contact form for users to send inquiries'
                ],
                idea: {
                    overview:"A restaurant website that allows users to easily access the menu, place orders online, and contact the restaurant for inquiries or reservations.",
                    problem: "The restaurant was having trouble finding the menu easily, and there was also a rush for orders because there was no way to order other than going to the restaurant or by phone.",
                    solution: "The solution was to create a website that includes the restaurant's menu and is automatically updated based on new offerings, as well as a contact form for communicating with the restaurant and making reservations."
                },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: "5 days",
                status: "Completed",
                year: "2022",


                testimonial: {
                    content: "The BiteQuick website has transformed our restaurant's online presence. Customers can now easily browse our menu and place orders online, which has significantly increased our sales and improved customer satisfaction.",
                    image: "p.png",
                    name: "Ahmed Hassan"
                }
            },





            {
                id: 7,
                name: "Medical web dashboard",
                title: "Dashboard Website",
                description: "A web dashboard for medical processes for graduation project",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Centralized system for managing medical processes',
                    'Access and manage patient information, appointments, and medical records'
                ],

                idea: {
                    overview:"A web dashboard for managing medical processes, designed as a graduation project. The dashboard provides an interface for healthcare professionals to access and manage patient information, appointments, and medical records.",
                    problem: "The problem is the lack of a centralized system for managing medical processes, which can lead to inefficiencies and difficulties in accessing patient information.",
                    solution: "The solution is to develop a web dashboard that consolidates medical processes into a single platform. This dashboard will allow healthcare professionals to easily access patient information and update medical records, improving overall efficiency and patient care."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",


                role: "Solo",
                duration: " 1 week",
                status: "Completed",
                year: "2024"
            },

    



            {
                id: 15,
                name: "Cancer detection app",
                title: "Medical Application",
                description: "A medical application that helps in detecting lung cancer using image processing techniques",
                shortLine:"App developed by the mobile developer using Flutter",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['php','python','flask','mysql'],


                points: [
                    'Image processing techniques for lung cancer detection',
                    'User-friendly interface for easy navigation',
                    'Secure storage of medical data',
                    'Integration with machine learning model for accurate detection',
                    'RESTful API to facilitate communication between the application and the machine learning model',
                    'Deployment of the machine learning model on Pythonanywhere to make it accessible via an API'
                ],

                idea: {
                    overview:"A medical application that utilizes image processing techniques to assist in the detection of lung cancer. The application provides a user-friendly interface for healthcare professionals to analyze medical images and identify potential signs of lung cancer.",
                    problem: "The problem is the need for an efficient and accurate method for detecting lung cancer, which can be challenging using traditional diagnostic methods.",
                    solution: "The solution is to develop a medical application that leverages advanced image processing techniques to analyze medical images and identify potential signs of lung cancer. This application will aid healthcare professionals in making more informed diagnoses and improving patient outcomes."
              },

                technologies: [
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage medical data",
                    "RESTful API to facilitate communication between the application and the machine learning model",
                    "Pythonanywhere to deploy the machine learning model and make it accessible via an API"
                ],

                type: "backend",

                role: "Team",
                duration: " 12 days",
                status: "Completed",
                year: "2024"
            },

            {
                id: 21,
                name: "Algora company",
                title: "Software company",
                description: "A dashboard website for Algora software company to manage tasks and employees",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png"],
                tech:['php','laravel','mysql'
                    // ,'vitejs'
                ],
                points: [
                    'From scratch design and development',
                    'Dashboard interface for managing tasks and employees',
                    'User authentication and authorization system',
                    'Task assignment and status tracking features',
                    'Employee management system with CRUD operations'
                ],

                technologies: [
                    "PHP and Laravel to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    // "Vite to bundle and optimize the application for performance",
                    "RESTful API to facilitate communication between the application and external services"
                ],

                idea:{
                    overview:"A dashboard website for Algora software company that allows administrators to manage tasks and employees. The dashboard provides features for task assignment, status tracking, and employee management.",
                    problem: "The problem is the need for an efficient system to manage tasks and employees within the software company.",
                    solution: "The solution is to develop a comprehensive dashboard website that consolidates task and employee management into a single platform. This dashboard will allow administrators to easily assign tasks, track their status, and manage employee information, improving overall efficiency and productivity."
                },


                type: "backend",
                role: "solo",
                duration: "3 day",
                status: "Completed",
                year: "2025"
            },

            {
                id: 9,
                name: "Management system",
                title: "Market Management Website",
                description: "A supermarket management casher system that allows to manage products and sales",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['java','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Product management system',
                    'Sales tracking and reporting system'
                ],

                idea: {
                    overview:"A supermarket management cashier system that allows users to manage products and sales. The system provides features for product management, sales tracking, and reporting.",
                    problem: "The problem is the need for an efficient system to manage supermarket products and sales.",
                    solution: "The solution is to create a comprehensive management system that allows users to manage products, track sales, and generate reports."
              },

                technologies: [
                    "Java to handle application logic and user interface",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",

                role: "Solo",
                duration: " 18 days",
                status: "Completed",
                year: "2022"
            },


            {
                id: 5,
                name: "Weather system",
                title: "Weather system",
                description: "A weather system that consists of all weather details for all countries on world",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png"],
                tech:["html5","css3","bootstrap","sass","javascript"],

                points:[
                    'From scratch design and development',
                    'Fetches real-time weather data from the OpenWeatherMap API',
                    'Displays weather information in an easy-to-understand format',
                    'Responsive design for optimal viewing on various devices'
                ],

                 idea: {
                    overview:"A weather system that provides comprehensive weather details for countries around the world. The system fetches real-time weather data from the OpenWeatherMap API and displays it in an easy-to-understand format.",
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features",
                    "OpenWeatherMap API to fetch real-time weather data for various locations"
                ],
                type: "Training Project",

                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 6,
                name: "Old portfolio",
                title: "Personal Portfolio",
                description: "My old personal portfolio website to showcase my projects and skills",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:["html5","css3","bootstrap","javascript"],

                points:[
                    'From scratch design and development',
                    'Showcases my projects and skills',
                    'Includes sections for about me, projects, skills, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A personal portfolio website to showcase my projects and skills. The website includes sections for about me, projects, skills, and contact information.",
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2023"
            },

            {
                id: 8,
                name: "Voyage",
                title: "Tourism company Website",
                description: "Tourism adv site that display travels of a tourism company on Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:["html5","css3","bootstrap"],
                
                points: [
                    'From scratch design and development',
                    'Displays travel packages and destinations',
                    'Includes sections for about us, services, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A tourism advertisement website that showcases the travel packages and destinations offered by a tourism company in Egypt. The website includes sections for about us, services, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the tourism company's offerings and attract potential customers.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the company's travel packages and destinations. The website will provide essential information about the company and make it easy for visitors to get in touch for inquiries or bookings."
              },

              technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive"
                ],

                type: "frontend",

                role: "Solo",
                duration: " 2 days",
                status: "Completed",
                year: "2023"
            },

            {
                id: 10,
                name: "Aya Curtains company",
                title: "Market Website",
                description: "A website for a curtains company that allows users to browse products in Red-sea",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Product browsing and searching system',
                    'Contact form for users to send inquiries',
                    'Admin panel for managing products and employees',
                ],

                idea: {
                    overview:"A website for a curtains company that allows users to browse products and make inquiries. The website includes a contact form for users to send inquiries and an admin panel for managing products and employees.",
                    problem: "The problem is the need for an online platform to showcase the company's products and facilitate communication with customers.",
                    solution: "The solution is to create a user-friendly website that allows users to easily browse products and contact the company for inquiries. The admin panel will help the company manage its products and employees more efficiently."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],
                
                type: "fullstack",

                role: "Solo",
                duration: " 10 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 11,
                name: "Mina Engineering company",
                title: "Engineering Website",
                description: "A website for an engineering company that allows users to browse services in Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],
                tech:['html5','css3','javascript','bootstrap'],

                points: [
                    'From scratch design and development',
                    'Displays engineering services offered by the company',
                    'Includes sections for about us, projects, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for an engineering company that allows users to browse the services offered by the company. The website includes sections for about us, projects, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the engineering company's services and attract potential clients.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the company's engineering services. The website will provide essential information about the company and make it easy for visitors to get in touch for inquiries or project discussions."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],
                
                type: "frontend",

                role: "Solo",
                duration: " 3 days",
                status: "Completed",
                year: "2024"
            },
         
            {
                id: 12,
                name: "Bakery site",
                title: "Bakery Website",
                description: "A website for a bakery shop that allows users to browse products",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png"],
                tech:['html5','css3'],

                points: [
                    'From scratch design and development',
                    'Displays bakery products offered by the shop',
                    'Includes sections for about us, products, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for a bakery shop that allows users to browse the products offered by the shop. The website includes sections for about us, products, and contact information.",
                    // problem: "The problem is the need for a platform to effectively showcase the bakery shop's products and attract potential customers.",
                    // solution: "The solution is to create a visually appealing and user-friendly website that highlights the bakery shop's products. The website will provide essential information about the shop and make it easy for visitors to get in touch for inquiries or orders."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 to style the web pages and make them responsive"
                ],
                type: "frontend",

                role: "Solo",
                duration: " 2 days",
                status: "Completed",
                year: "2022"
            },
            
            
            {
                id: 13,
                name: "AUG platform",
                title: "Advertisment agancy",
                description: "A website for an advertisment agancy that allows users to browse services",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap'],

                points: [
                    'From scratch design and development',
                    'Displays advertisment services offered by the agancy',
                    'Includes sections for about us, services, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for an advertisment agancy that allows users to browse the services offered by the agancy. The website includes sections for about us, services, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the advertisment agancy's services and attract potential clients.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the agancy's advertisment services. The website will provide essential information about the agancy and make it easy for visitors to get in touch for inquiries or service discussions."
              },

              technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: " 10 days",
                status: "Completed",
                year: "2023"
            },


            {
                id: 17,
                name: "Tic-Tac-Toe game",
                title: "Tic-Tac-Toe Game",
                description: "A simple Tic-Tac-Toe game that allows two players to play against each other",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','sass'],

                points: [
                    'From scratch design and development',
                    'Two-player mode for local gameplay',
                    'Responsive design for optimal viewing on various devices',
                    'Simple and intuitive user interface'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and game logic"
                ],

                type: "Training Project",
                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 18,
                name: "Calculator app",
                title: "Calculator",
                description: "A simple calculator app that allows users to perform basic arithmetic operations",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','sass'],
                points: [
                    'From scratch design and development',
                    'Basic arithmetic operations: addition, subtraction, multiplication, and division',
                    'Responsive design for optimal viewing on various devices',
                    'Simple and intuitive user interface'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and calculator logic"
                ],
                type: "Training Project",
                role: "Solo",
                duration: "1 day",
                status: "Completed",
                year: "2022"
            },

            {
                id: 19,
                name: "Portfolio v3",
                title: "Last portfolio version",
                description: "My last personal portfolio website to showcase my projects and skills",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','vuejs','vitejs','pinia'],
                points: [
                    'From scratch design and development',
                    'Showcases my projects and skills',
                    'Includes sections for about me, projects, skills, and contact information',
                    'Responsive design for optimal viewing on various devices',
                    'Built with Vue3 and Vitejs for improved performance and development experience',
                    'Pinia for state management to handle application state efficiently',
                    'Vue Router for seamless navigation between different sections of the portfolio'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features",
                    "Vue3 to build the user interface and manage application state",
                    "Vitejs to bundle and optimize the application for performance",
                    "Pinia for state management to handle application state efficiently",
                    "Vue Router for seamless navigation between different sections of the portfolio"
                ],
                type: "frontend",
                role: "Solo",
                duration: "1 week",
                status: "Completed",
                year: "2025"
            },

            {
                id: 20,
                name: "SoftExpert company",
                title: "Software task",
                description: "Backend task for SoftExpert company to test my skills",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['php','laravel','sqlite'],
                points: [
                    'From scratch design and development',
                    'Task management system with CRUD operations',
                    'RESTful API',
                    'SQLite database for efficient data storage and retrieval',
                    'Task assignment and status tracking features'
                ],

                technologies: [
                    "PHP and Laravel to handle server-side logic and database interactions",
                    "SQLite to store and manage application data",
                    "RESTful API to facilitate communication between the application and external services"
                ],
                type: "mini",
                role: "solo",
                duration: "1 day",
                status: "Completed",
                year: "2024"
            },


            
            {
                id: 22,
                name: "PentTask company",
                title: "Software company task",
                description: "An analytics dashboard website for PentTask software company to make orders , products and take recommendations",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png"],
                tech:['php','laravel','sqlite'],
                points: [
                    'From scratch design and development',
                    'Dashboard interface for managing orders and products',
                    'Order add and management system with CRUD operations',
                    'Product management system with CRUD operations',
                    'Analytics and reporting features to provide insights on orders and products',
                    'Recommendation system to suggest products based on order history using AI tool'
                ],

                technologies: [
                    "PHP and Laravel to handle server-side logic and database interactions",
                    "SQLite to store and manage application data",
                    "RESTful API to facilitate communication between the application and external services",
                    'Gemini AI to implement the recommendation system for suggesting products based on order history'
                ],

                idea:{
                    overview:"An analytics dashboard website for PentTask software company that allows administrators to manage orders and products. The dashboard provides features for order management, product management, analytics, and recommendations.",
                    problem: "The problem is the need for an efficient system to manage orders and products within the software company.",
                    solution: "The solution is to develop a comprehensive analytics dashboard website that consolidates order and product management into a single platform. This dashboard will allow administrators to easily manage orders and products, gain insights through analytics, and receive product recommendations based on order history, improving overall efficiency and decision-making."
                },


                type: "mini",
                role: "solo",
                duration: "2 day",
                status: "Completed",
                year: "2025"
            },


            {
                id: 23,
                name: "Hesabatee company",
                title: "Software company task",
                description: "An API system for Hesabatee software company to make tasks management and manage tasks status",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png"],
                tech:['php','mysql'],
                points: [
                    'From scratch design and development',
                    'Authentication and authorization system',
                    'API system for managing tasks and their status',
                    'Task management system with CRUD operations',
                    'Task status tracking features'
                ],

                technologies: [
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "RESTful API to facilitate communication between the application and external services"
                ],

                idea:{
                    overview:"An API system for Hesabatee software company that allows administrators to manage tasks and their status. The API provides features for task management and status tracking.",
                    problem: "The problem is the need for an efficient system to manage tasks and their status within the software company.",
                    solution: "The solution is to develop a comprehensive API system that consolidates task management and status tracking into a single platform. This API will allow administrators to easily manage tasks and track their status, improving overall efficiency and productivity."
                },


                type: "mini",
                role: "solo",
                duration: "1 day",
                status: "Completed",
                year: "2025"
            },



            {
                id: 24,
                name: "Charity foundation",
                title: "Charity foundation",
                description: "A charity foundation website to manage donations and campaigns",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],
                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Donation management system with CRUD operations',
                    'Campaign management system with CRUD operations',
                    'Admin panel for managing donations and campaigns',
                    'Responsive design for optimal viewing on various devices',
                    'Papers generation system for donation receipts and campaign reports'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "Print excel and PDF libraries to generate donation receipts",
                    "Dompdf library to generate reports",
                    "Auto saving feature for reports",
                    "Store personal IDs and donation history"
                ],

                idea:{
                    overview:"A charity foundation website that allows administrators to manage donations and campaigns. The website provides features for donation management, campaign management, and an admin panel for overseeing the foundation's activities.",
                    problem: "The problem is the need for an efficient system to manage donations and campaigns within the charity foundation.",
                    solution: "The solution is to develop a comprehensive charity foundation local website that consolidates donation and campaign management into a single platform. This website will allow administrators to easily manage donations and campaigns, improving overall efficiency and effectiveness in achieving the foundation's goals."
                },


                type: "fullstack",
                role: "solo",
                duration: "1 week",
                status: "Completed",
                year: "2024"
            }


];

export const useProjectsStore = defineStore("projects", {
    state: () => ({

        projects: projectsData.map(createProject),
        activeFilter: "all"

    }),

    getters: {
    three: (state) => state.projects.slice(0, 8),
    all: (state) => state.projects,
    byId: (state) => (id) => {
        return state.projects.find(project => project.id === id);
    },
    filteredProjects(state) {
      if (state.activeFilter === "all") {
        return state.projects;
      }
      return state.projects.filter(
        project => project.type === state.activeFilter
      );
    },
  },

   actions: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
  }
})