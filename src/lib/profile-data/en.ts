import type { ProfileData } from '@/types';

export const profileDataEn: ProfileData = {
  personal: {
    name: 'Albert Sabaté Martínez',
    preferredName: 'Albert M.',
    title: 'Senior Software Engineer & Consultant',
    headline: 'Senior FullStack Developer from Barcelona working in Singapore',
    location: {
      city: 'Barcelona',
      region: 'Catalonia',
      country: 'Spain',
      timezone: 'Madrid (UTC+2)',
    },
    languages: [
      {
        name: 'Spanish',
        proficiency: 'Native',
      },
      {
        name: 'Catalan',
        proficiency: 'Native',
      },
      {
        name: 'English',
        proficiency: 'Professional',
      },
    ],
    links: {
      github: 'https://github.com/AlbertSabate',
      stackoverflow: 'https://stackoverflow.com/users/8403846/albertsabate',
      linkedin: 'https://www.linkedin.com/in/albertsabatemartinez/',
      arc: 'https://arc.dev/@albertsabate',
    },
    stats: {
      yearsOfExperience: 13,
      projectsDelivered: 20,
      usersImpacted: '2M+',
      teamsLed: 5,
    },
  },
  about:
    "I'm Albert, a Senior Software Engineer with over ten years of international experience, including a proven track record in Singapore's fast-paced tech environment. Starting my career in 2011, I've mastered JavaScript and TypeScript, delivering high-impact solutions across both backend and frontend development. My expertise extends to DevOps, project management, and leadership, where I've consistently led teams to success, collaborating with top-tier talent worldwide. I excel at adapting to diverse project needs, building innovative solutions, and driving excellence, while mentoring teams to elevate their capabilities.",
  skills: {
    primary: [
      {
        name: 'JavaScript',
        years: 10,
        rating: 9,
        description:
          'It was my first language when I decided to start coding. It is just an amazing language, it gives you a lot of flexibility. I have worked in all of my projects with javascript since I started to code.',
      },
      {
        name: 'React',
        years: 7,
        rating: 8,
        description:
          'I started to code React in 2016, and I love it. It makes everything easier, like a simple one-page website or a super complex application.',
      },
      {
        name: 'Node.js',
        years: 8,
        rating: 9,
        description:
          'I started to use NodeJS when it was just in beta, and I just love it. When the first stable version was introduced into the market, I started to use it for production environments and I have been using it ever since. Mostly I code REST API with Express.',
      },
      {
        name: 'TypeScript',
        years: 7,
        rating: 8,
        description: 'Strong expertise in TypeScript for building type-safe, scalable applications',
      },
    ],
    technical: [
      {
        name: 'HTML/CSS',
        years: 10,
        rating: 9,
        description:
          'As a FullStack Web Developer, I had to work in all of my projects with HTML/CSS, with javascript in frontend we always have to manipulate it.',
      },
      {
        name: 'Git',
        years: 10,
        rating: 9,
        description: 'Version control expert with extensive Git experience',
      },
      {
        name: 'MongoDB',
        years: 4,
        rating: 7,
        description: 'NoSQL database expertise for scalable applications',
      },
      {
        name: 'SQL',
        years: 5,
        rating: 7,
        description: 'Relational database design and optimization',
      },
      {
        name: 'Kubernetes',
        years: 5,
        rating: 7,
        description: 'Container orchestration and cloud-native deployment',
      },
      {
        name: 'CI/CD',
        years: 5,
        rating: 7,
        description: 'Continuous integration and deployment pipelines',
      },
      {
        name: 'DevOps',
        years: 3,
        rating: 5,
        description:
          'Just starting to learn more seriously about how DevOps world works. I have working experience with RedHat Openshift, Kubernetes, Docker and CI/CD pipelines with Jenkins and GoCD. Also I worked with AWS for basic implementations.',
      },
      {
        name: 'Containers',
        years: 3,
        rating: 6,
        description: 'Docker and containerization technologies',
      },
    ],
    frameworks: ['Next.js', 'Express.js', 'Redux', 'Tailwind CSS', 'Solid.js', 'Bun.js', 'Webpack', 'Socket.IO'],
    cloud: ['Google Cloud Platform', 'AWS', 'Kubernetes', 'Docker', 'OpenShift', 'Terraform', 'Vercel', 'Cloudflare'],
  },
  projects: [
    {
      title: 'Luce - Dental Jewelry E-commerce Platform',
      description:
        'Luce is a cutting-edge dental jewelry e-commerce platform that revolutionizes how people discover and purchase dental gems, stars, and grillz. I architected and developed the entire platform as a modern monorepo, featuring separate applications for consumers and studio partners. The platform includes real-time order tracking, digital signature integration for legal compliance, multi-language support, and a sophisticated studio management dashboard. Built with a serverless architecture on Cloudflare Workers, the platform handles everything from product browsing and customization to secure payments via Stripe and jewelry registry management. This project showcases my ability to build complete, production-ready e-commerce solutions with complex business logic, regulatory compliance, and beautiful user experiences.',
      year: 2024,
      highlights: [
        'Architected a scalable monorepo structure with shared packages for optimal code reuse and maintainability',
        'Implemented secure authentication and authorization system with role-based access control for users, studios, and admins',
        'Built real-time order tracking and jewelry registry system with digital certificate generation',
        'Integrated VidSigner for legally compliant digital signatures and Stripe for secure payment processing',
        'Developed multi-language support with Paraglide.js for international market expansion',
      ],
      technologies: [
        'TypeScript',
        'React',
        'TanStack Start',
        'Hono.js',
        'Cloudflare Workers',
        'PostgreSQL',
        'Drizzle ORM',
        'Stripe',
        'Tailwind CSS',
        'Bun.js',
      ],
      links: [
        {
          url: 'https://luce.es/',
          label: 'Live Site',
        },
        {
          url: 'https://studio.luce.es/',
          label: 'Studio Portal',
        },
      ],
      image: '/images/luce-screenshot.png',
    },
    {
      title: 'Viatsy - Online Travel Agency Platform',
      description:
        "Viatsy is an innovative online travel agency where I'm leading the development of a comprehensive backend system with the vision of transforming it into a SaaS product for other travel agencies. Currently operating as a B2C travel platform, I'm architecting the entire backend infrastructure to support both current operations and future B2B scalability. The platform includes sophisticated tools for itinerary creation, client management, provider integrations, automated invoicing, and multi-channel communication via WhatsApp and email. My role involves building a robust, scalable architecture that can handle the complexities of travel operations while preparing the codebase for white-label deployment. This project demonstrates my ability to balance immediate business needs with long-term technical vision, creating software that serves current customers while building toward a larger SaaS opportunity.",
      year: 2024,
      highlights: [
        'Building scalable backend infrastructure for an online travel agency with future SaaS capabilities in mind',
        'Developing modular architecture that supports both B2C operations and future B2B white-label deployment',
        'Implementing WhatsApp Business API integration and automated communication systems for enhanced customer experience',
      ],
      technologies: [
        'HTML/CSS',
        'Node.js',
        'MongoDB',
        'TypeScript',
        'JavaScript',
        'Kubernetes',
        'WhatsApp',
        'Tailwind CSS',
        'Solid.js',
        'Bun.js',
      ],
      links: [
        {
          url: 'https://viatsy.com/',
          label: 'Live Site',
        },
      ],
      image: 'https://ucarecdn.com/295d6f69-1206-4fed-9dd6-91e06064b851/',
    },
    {
      title: 'Brisa - The Web Platform Framework',
      description:
        'Brisa is a cutting-edge server-side rendering (SSR) web framework launched in Q3 2024, designed to seamlessly integrate SSR with web components and signals. I have been collaborating with the main author, @aralroca, since version 0.0.2, contributing extensively to its development. As a top contributor, I played a pivotal role in refining the framework and was the first to successfully integrate it into live applications.',
      year: 2024,
      highlights: [
        'Collaborated with the main author from early versions, contributing to the development and refinement of the framework',
        'Became the top contributor, significantly enhancing the functionality and features of the framework',
        'Integrated Brisa into real-world applications, leveraging advanced technical knowledge to ensure smooth deployment and performance',
      ],
      technologies: ['TypeScript', 'JavaScript', 'Bun.js'],
      links: [
        {
          url: 'https://brisa.build/',
          label: 'Framework Site',
        },
      ],
      image: 'https://ucarecdn.com/7cb15ae6-bda0-424b-8277-f964b96f5475/',
    },
    {
      title: 'Setoros - Crypto Sportsbook',
      description:
        'Setoros was a decentralized crypto sportsbook allowing users to place bets on their favorite teams using their personal wallets, from anywhere in the world. I contributed to the development of the frontend and played a key role in integrating the crypto wallet, enabling seamless user transactions within the platform.',
      year: 2023,
      highlights: [
        'Contributed to the development of the frontend, ensuring a user-friendly and responsive interface for bettors',
        'Integrated the crypto wallet functionality, facilitating secure and efficient transactions for users',
        'Gained hands-on experience in decentralized applications and blockchain technology',
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'Vercel', 'DeFi'],
      links: [
        {
          url: 'https://setoros.com/',
          label: 'Live Site',
        },
      ],
      image: 'https://ucarecdn.com/b7cb0725-1c71-4780-8862-4c991546b098/',
    },
    {
      title: 'Binance Ride-Hailing',
      description:
        'The Binance Ride-Hailing app integrates seamlessly with the Binance ecosystem using mini-program technology and WebView. Built with ReactJS, the app supports over a million users and processes real-time data to ensure a smooth experience. I led a team of seven developers to deliver this high-performance solution.',
      year: 2022,
      highlights: [
        'Led a team of 7 developers to build and deliver a scalable ride-hailing app within the Binance ecosystem',
        'Managed real-time data processing to support over a million users, ensuring performance and reliability',
        'Directed both technical development and team coordination, ensuring timely and high-quality project delivery',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'TypeScript', 'React', 'JavaScript', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Company Site',
        },
      ],
      video: '8YDXTqEDG_U',
    },
    {
      title: 'Grab SuperApp - Intercity',
      description:
        'Grab Intercity is a feature within the Grab SuperApp that enables users to purchase bus and ferry tickets across more than 15,000 routes. I led the project from its inception through to the successful launch in 2022, overseeing a team of 11 engineers over the course of one year.',
      year: 2021,
      highlights: [
        'Led a team of 11 engineers through the full lifecycle of the project, ensuring its successful launch in 2022',
        'Contributed directly to development while mentoring and guiding the team to foster collaboration and growth',
        'Managed backend integrations and APIs to support a large-scale ticketing system with over 15,000 routes',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'Cloud', 'TypeScript', 'React', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Company Site',
        },
      ],
      video: 'TX1eDnLWX5M',
    },
    {
      title: 'Alipay Ride-Hailing',
      description:
        'The Alipay Ride-Hailing app is integrated into the Alipay ecosystem using mini-program technology, built with ReactJS and RxJS and delivered through a WebView. Initially joining the project as a Senior Software Engineer, I took on a leadership role in 2022.',
      year: 2020,
      highlights: [
        'Transitioned from Senior Engineer to Project Lead, guiding the team through the development and launch phases',
        "Managed real-time data processing and ensured the app's scalability to support over a million users",
        'Led technical decision-making and team coordination to deliver a seamless, high-performance ride-hailing solution',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'TypeScript', 'React', 'JavaScript', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Company Site',
        },
      ],
      video: 'KVQJBnA5RcI',
    },
    {
      title: 'Dashboard Editor for Machine Learning SaaS',
      description:
        'The Dashboard Editor is a frontend tool for a big data software platform that allows users to generate and manage customizable dashboards for machine learning insights. I worked exclusively on the frontend, using React and Redux to create the UI panel and integrations.',
      year: 2017,
      highlights: [
        'Developed the UI panel and integrations, enabling users to easily customize and manage their dashboards',
        'Collaborated closely with a colleague to integrate D3.js-based visualizations',
        'Utilized React and Redux to build a scalable and responsive dashboard editor for a big data SaaS platform',
      ],
      technologies: ['React', 'JavaScript', 'Redux', 'D3.js'],
      video: 'g96AqJbqL_4',
    },
  ],
  experience: [
    {
      company: 'Zenet Technology',
      title: 'Freelance Sr. Software Engineer',
      type: 'Freelance',
      startDate: '2022-01-01',
      endDate: null,
      current: true,
      description:
        'In my role as a Sr. Software Engineer, I provided expert consultancy to a wide range of clients, identifying and resolving technical bottlenecks to optimize their systems. I contributed to projects that supported millions of users, delivering high-performing, reliable solutions while offering strategic guidance on technology and infrastructure. I also mentored clients, enhancing their development capabilities and strengthening project outcomes.',
      highlights: [
        'Led project teams, offering mentorship and training that boosted client satisfaction and improved overall project success',
        'Developed and maintained software with high availability and reliability, ensuring smooth experiences for millions of users',
        'Strategy & Management consultancy',
        'Technical architecture design',
      ],
      technologies: [
        'HTML/CSS',
        'SQL',
        'Node.js',
        'Git',
        'MongoDB',
        'Redis',
        'TypeScript',
        'React',
        'JavaScript',
        'Next.js',
        'CI/CD',
        'Docker & Kubernetes',
        'Solid.js',
        'Bun.js',
      ],
    },
    {
      company: 'Splyt Singapore Pte. Ltd.',
      title: 'Engineering Manager',
      type: 'Full-time',
      startDate: '2021-01-01',
      endDate: '2022-02-01',
      current: false,
      description:
        "As Engineering Manager, I led cross-functional teams to deliver scalable, high-performance solutions for Splyt, a leading global mobility network. Our technology integrated ride-hailing, airport transfers, bike-sharing, and scooters into partners' travel platforms, wallets, and superapps, enabling global access for users.",
      highlights: [
        'Directed and helped engineering teams to build and maintain resilient systems',
        'Coordinated closely with product, QA, and operations teams to streamline workflows',
        'Implemented best practices for cloud infrastructure, security, and scalability, using tools like Kubernetes and Terraform',
      ],
      technologies: [
        'Node.js',
        'MongoDB',
        'Redis',
        'TypeScript',
        'React',
        'Google Cloud Platform',
        'JavaScript',
        'Kubernetes',
        'Terraform',
        'Next.js',
        'CI/CD',
      ],
    },
    {
      company: 'Splyt Singapore Pte. Ltd.',
      title: 'Sr. Software Engineer',
      type: 'Full-time',
      startDate: '2019-10-01',
      endDate: '2021-01-01',
      current: false,
      description:
        "As a Senior Software Engineer, I contributed to Splyt's mission of transforming the e-hailing industry through its innovative roaming API, which enables seamless, borderless travel for users across 380 cities globally.",
      highlights: [
        "Developed and optimized backend services to support Splyt's international roaming network",
        'Established and enforced code standards, promoting maintainable and scalable solutions',
        'Collaborated with cross-functional teams to ensure alignment on technical requirements',
      ],
      technologies: [
        'Node.js',
        'MongoDB',
        'Redis',
        'TypeScript',
        'GitLab',
        'React',
        'Google Cloud Platform',
        'JavaScript',
        'Kubernetes',
        'Terraform',
      ],
    },
    {
      company: 'Biqmind',
      title: 'Senior Software Engineer',
      type: 'Full-time',
      startDate: '2018-05-01',
      endDate: '2019-10-01',
      current: false,
      description:
        'As a Senior Software Engineer in the R&D department, I contributed to the development of an advanced framework for managing IoT devices, supporting hundreds of real-time connections.',
      highlights: [
        'Contributed to defining microservices architecture, enabling efficient deployment across 70+ microservices in Kubernetes',
        'Developed backend and frontend features in Node.js and React, enhancing IoT device functionality',
        'Secured and optimized infrastructure, with monitoring using Zabbix, Prometheus, Grafana, and EFK',
        'Employed TDD to maintain high code quality, implemented CI/CD with GoCD',
      ],
      technologies: [
        'HTML/CSS',
        'Node.js',
        'NoSQL',
        'Socket.IO',
        'Docker',
        'React',
        'JavaScript',
        'OpenShift',
        'Redux',
        'Express.js',
      ],
    },
    {
      company: 'Klaud9',
      title: 'Chief Technology Officer',
      type: 'Full-time',
      startDate: '2017-09-01',
      endDate: '2018-05-01',
      current: false,
      description:
        "As CTO of Klaud9, Asia's first platform dedicated to Asian stock photography, I led the company's entire technology strategy, from architecture and development to deployment and quality assurance.",
      highlights: [
        'Analyzed, designed, and developed the core architecture of the Klaud9 platform',
        'Oversaw infrastructure, backend, and frontend development',
        'Directed IT team activities, fostering a collaborative environment',
      ],
      technologies: [
        'HTML/CSS',
        'PHP',
        'Node.js',
        'MySQL',
        'MongoDB',
        'React',
        'JavaScript',
        'Symfony 3',
        'Express.js',
      ],
    },
    {
      company: 'Bigfinite',
      title: 'FullStack Developer',
      type: 'Full-time',
      startDate: '2017-02-01',
      endDate: '2017-09-01',
      current: false,
      description:
        "As FullStack Developer, I played a key role in Bigfinite's platform for real-time data acquisition in the biotech and pharma sectors, integrating regulatory-compliant layers on big data and AI solutions.",
      highlights: [
        'Led the migration from legacy code to ReactJS, improving codebase efficiency',
        'Designed and implemented the Solutions module, establishing it as the core frontend component',
        'Collaborated with cross-functional teams to ensure regulatory compliance',
      ],
      technologies: [
        'HTML/CSS',
        'Node.js',
        'MongoDB',
        'Mongoose',
        'React',
        'JavaScript',
        'Webpack',
        'Redux',
        'Express.js',
      ],
    },
    {
      company: 'SmartCommerce',
      title: 'FullStack Developer',
      type: 'Full-time',
      startDate: '2016-03-01',
      endDate: '2017-02-01',
      current: false,
      description:
        "As a Full Stack Developer, I contributed to the design and development of SmartCommerce's eShop platform, enhancing both frontend and backend capabilities.",
      highlights: [
        'Designed and developed key features of the eShop platform using AngularJS and Angular 2',
        'Led the migration of frontend code from AngularJS to Angular 2',
        'Maintained and optimized the backend API developed in PhalconPHP',
      ],
      technologies: ['HTML/CSS', 'PHP', 'MySQL', 'Angular', 'Redis', 'TypeScript', 'Grunt', 'Phalcon', 'JavaScript'],
    },
    {
      company: 'Social & Loyal',
      title: 'Lead Developer',
      type: 'Full-time',
      startDate: '2012-08-01',
      endDate: '2016-03-01',
      current: false,
      description:
        'As Lead Developer at Social & Loyal, a SaaS-based omnichannel loyalty platform with thousands of users, I was responsible for the end-to-end development of the platform.',
      highlights: [
        'Led the analysis, design, and development of the Social & Loyal platform',
        'Managed the full stack, from infrastructure to frontend and backend',
        'Collaborated with cross-functional teams to deliver a product that attracted millions of users',
      ],
      technologies: ['HTML/CSS', 'PHP', 'jQuery', 'Git', 'CakePHP', 'Grunt', 'JavaScript', 'AWS'],
    },
    {
      company: 'Freelance',
      title: 'FullStack Developer',
      type: 'Freelance',
      startDate: '2011-10-01',
      endDate: '2012-08-01',
      current: false,
      description:
        'As a Full Stack Developer, I designed and developed custom client platforms, ensuring high-quality code and seamless functionality.',
      highlights: [
        'Designed and developed client platforms tailored to specific business needs',
        'Monitored, maintained, and optimized Apache HTTP Server environments',
        'Provided technical consulting to improve platform architecture',
      ],
      technologies: ['HTML/CSS', 'PHP', 'jQuery', 'MySQL', 'AJAX', 'jQuery UI', 'JavaScript', 'Apache HTTP Server'],
    },
  ],
  education: [
    {
      institution: 'University of Illinois Urbana-Champaign (UIUC)',
      degree: 'Master of Business Administration (MBA)',
      field: 'Business Administration',
      startDate: '2021-09-01',
      endDate: '2023-07-01',
      location: 'Illinois, USA',
    },
    {
      institution: 'Universitat Oberta de Catalunya',
      degree: 'Engineer in Telecommunications and IT Services',
      field: 'Engineering',
      startDate: '2014-01-01',
      endDate: '2020-06-01',
      location: 'Barcelona, Spain',
    },
  ],
  certifications: [
    {
      name: 'Business Analytics Specialization',
      issuer: 'Gies College of Business - University of Illinois Urbana-Champaign',
      issueDate: '2022-12-01',
      url: null,
    },
    {
      name: 'CKA: Certified Kubernetes Administrator',
      issuer: 'The Linux Foundation',
      issueDate: '2019-07-01',
      expiryDate: '2022-07-01',
      url: null,
    },
  ],
  testimonials: [
    {
      name: 'Matthew Aldrin Torres',
      role: 'Engineering Manager',
      text: 'Albert is a great developer. He is very detailed oriented and can deliver technical requirements to completion. He is inquisitive and delivers high-quality work.',
    },
    {
      name: 'Liher Del Rio',
      role: 'Senior Software Engineer',
      text: 'Albert is an experienced developer with great coding skills who stays in the forefront of emerging technologies. He has a collaborative spirit that makes working with him a pleasure.',
    },
  ],
};
