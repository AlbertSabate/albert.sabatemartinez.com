import type { ProfileData } from '@/types';

export const profileDataEs: ProfileData = {
  personal: {
    name: 'Albert Sabaté Martínez',
    preferredName: 'Albert M.',
    title: 'Ingeniero de Software Senior y Consultor',
    headline: 'Desarrollador FullStack Senior de Barcelona trabajando en Singapur',
    location: {
      city: 'Barcelona',
      region: 'Cataluña',
      country: 'España',
      timezone: 'Madrid (UTC+2)',
    },
    languages: [
      {
        name: 'Español',
        proficiency: 'Nativo',
      },
      {
        name: 'Catalán',
        proficiency: 'Nativo',
      },
      {
        name: 'Inglés',
        proficiency: 'Profesional',
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
    'Soy Albert, un Ingeniero de Software Senior con más de diez años de experiencia internacional, incluyendo un historial probado en el dinámico entorno tecnológico de Singapur. Comenzando mi carrera en 2011, he dominado JavaScript y TypeScript, entregando soluciones de alto impacto tanto en desarrollo backend como frontend. Mi experiencia se extiende a DevOps, gestión de proyectos y liderazgo, donde he dirigido equipos hacia el éxito consistentemente, colaborando con talento de primer nivel en todo el mundo. Destaco en adaptarme a diversas necesidades de proyectos, construyendo soluciones innovadoras y promoviendo la excelencia, mientras guío a los equipos para elevar sus capacidades.',
  skills: {
    primary: [
      {
        name: 'JavaScript',
        years: 10,
        rating: 9,
        description:
          'Fue mi primer lenguaje cuando decidí empezar a programar. Es un lenguaje increíble que te da mucha flexibilidad. He trabajado en todos mis proyectos con JavaScript desde que empecé a programar.',
      },
      {
        name: 'React',
        years: 7,
        rating: 8,
        description:
          'Empecé a programar React en 2016, y me encanta. Hace todo más fácil, como un sitio web simple de una página o una aplicación súper compleja.',
      },
      {
        name: 'Node.js',
        years: 8,
        rating: 9,
        description:
          'Empecé a usar NodeJS cuando estaba en beta, y simplemente me encanta. Cuando se introdujo la primera versión estable en el mercado, empecé a usarlo para entornos de producción y lo he estado usando desde entonces. Principalmente codifico REST API con Express.',
      },
      {
        name: 'TypeScript',
        years: 7,
        rating: 8,
        description: 'Fuerte experiencia en TypeScript para construir aplicaciones escalables y seguras en tipos',
      },
    ],
    technical: [
      {
        name: 'HTML/CSS',
        years: 10,
        rating: 9,
        description:
          'Como desarrollador FullStack Web, tuve que trabajar en todos mis proyectos con HTML/CSS, con JavaScript en el frontend siempre tenemos que manipularlo.',
      },
      {
        name: 'Git',
        years: 10,
        rating: 9,
        description: 'Experto en control de versiones con amplia experiencia en Git',
      },
      {
        name: 'MongoDB',
        years: 4,
        rating: 7,
        description: 'Experiencia en bases de datos NoSQL para aplicaciones escalables',
      },
      {
        name: 'SQL',
        years: 5,
        rating: 7,
        description: 'Diseño y optimización de bases de datos relacionales',
      },
      {
        name: 'Kubernetes',
        years: 5,
        rating: 7,
        description: 'Orquestación de contenedores y despliegue nativo en la nube',
      },
      {
        name: 'CI/CD',
        years: 5,
        rating: 7,
        description: 'Pipelines de integración y despliegue continuo',
      },
      {
        name: 'DevOps',
        years: 3,
        rating: 5,
        description:
          'Estoy empezando a aprender más seriamente sobre cómo funciona el mundo DevOps. Tengo experiencia trabajando con RedHat Openshift, Kubernetes, Docker y pipelines CI/CD con Jenkins y GoCD. También trabajé con AWS para implementaciones básicas.',
      },
      {
        name: 'Containers',
        years: 3,
        rating: 6,
        description: 'Docker y tecnologías de contenedorización',
      },
    ],
    frameworks: ['Next.js', 'Express.js', 'Redux', 'Tailwind CSS', 'Solid.js', 'Bun.js', 'Webpack', 'Socket.IO'],
    cloud: ['Google Cloud Platform', 'AWS', 'Kubernetes', 'Docker', 'OpenShift', 'Terraform', 'Vercel', 'Cloudflare'],
  },
  projects: [
    {
      title: 'Luce - Plataforma de E-commerce de Joyería Dental',
      description:
        'Luce es una plataforma de e-commerce de joyería dental de vanguardia que revoluciona cómo las personas descubren y compran gemas dentales, estrellas y grillz. Arquitecté y desarrollé toda la plataforma como un monorepo moderno, con aplicaciones separadas para consumidores y socios de estudio. La plataforma incluye seguimiento de pedidos en tiempo real, integración de firma digital para cumplimiento legal, soporte multiidioma y un sofisticado panel de gestión de estudios. Construida con arquitectura serverless en Cloudflare Workers, la plataforma maneja todo, desde la navegación y personalización de productos hasta pagos seguros a través de Stripe y gestión de registro de joyas. Este proyecto muestra mi capacidad para construir soluciones de e-commerce completas y listas para producción con lógica de negocio compleja, cumplimiento regulatorio y hermosas experiencias de usuario.',
      year: 2024,
      highlights: [
        'Arquitecté una estructura monorepo escalable con paquetes compartidos para reutilización óptima de código y mantenibilidad',
        'Implementé sistema seguro de autenticación y autorización con control de acceso basado en roles para usuarios, estudios y administradores',
        'Construí sistema de seguimiento de pedidos en tiempo real y registro de joyas con generación de certificados digitales',
        'Integré VidSigner para firmas digitales legalmente válidas y Stripe para procesamiento seguro de pagos',
        'Desarrollé soporte multiidioma con Paraglide.js para expansión al mercado internacional',
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
          label: 'Sitio en Vivo',
        },
        {
          url: 'https://studio.luce.es/',
          label: 'Portal de Estudios',
        },
      ],
      image: '/images/luce-screenshot.png',
    },
    {
      title: 'Viatsy - Plataforma de Agencia de Viajes Online',
      description:
        'Viatsy es una innovadora agencia de viajes online donde lidero el desarrollo de un sistema backend integral con la visión de transformarlo en un producto SaaS para otras agencias de viajes. Actualmente operando como plataforma de viajes B2C, estoy arquitectando toda la infraestructura backend para soportar tanto las operaciones actuales como la escalabilidad B2B futura. La plataforma incluye herramientas sofisticadas para creación de itinerarios, gestión de clientes, integraciones con proveedores, facturación automatizada y comunicación multicanal vía WhatsApp y email. Mi rol implica construir una arquitectura robusta y escalable que pueda manejar las complejidades de las operaciones de viaje mientras prepara el código base para despliegue de marca blanca. Este proyecto demuestra mi capacidad para equilibrar las necesidades empresariales inmediatas con la visión técnica a largo plazo, creando software que sirve a los clientes actuales mientras construye hacia una oportunidad SaaS mayor.',
      year: 2024,
      highlights: [
        'Construyendo infraestructura backend escalable para agencia de viajes online con capacidades SaaS futuras en mente',
        'Desarrollando arquitectura modular que soporta operaciones B2C y futuro despliegue B2B de marca blanca',
        'Implementando integración con WhatsApp Business API y sistemas de comunicación automatizados para mejorar la experiencia del cliente',
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
          label: 'Sitio en Vivo',
        },
      ],
      image: 'https://ucarecdn.com/295d6f69-1206-4fed-9dd6-91e06064b851/',
    },
    {
      title: 'Brisa - El Framework de Plataforma Web',
      description:
        'Brisa es un framework web de renderizado del lado del servidor (SSR) de vanguardia lanzado en Q3 2024, diseñado para integrar sin problemas SSR con componentes web y señales. He estado colaborando con el autor principal, @aralroca, desde la versión 0.0.2, contribuyendo extensamente a su desarrollo. Como principal contribuidor, jugué un papel fundamental en refinar el framework y fui el primero en integrarlo exitosamente en aplicaciones en vivo.',
      year: 2024,
      highlights: [
        'Colaboré con el autor principal desde las primeras versiones, contribuyendo al desarrollo y refinamiento del framework',
        'Me convertí en el principal contribuidor, mejorando significativamente la funcionalidad y características del framework',
        'Integré Brisa en aplicaciones del mundo real, aprovechando conocimiento técnico avanzado para asegurar despliegue y rendimiento fluidos',
      ],
      technologies: ['TypeScript', 'JavaScript', 'Bun.js'],
      links: [
        {
          url: 'https://brisa.build/',
          label: 'Sitio del Framework',
        },
      ],
      image: 'https://ucarecdn.com/7cb15ae6-bda0-424b-8277-f964b96f5475/',
    },
    {
      title: 'Setoros - Casa de Apuestas Crypto',
      description:
        'Setoros era una casa de apuestas deportivas descentralizada que permitía a los usuarios apostar en sus equipos favoritos usando sus billeteras personales, desde cualquier parte del mundo. Contribuí al desarrollo del frontend y jugué un papel clave en la integración de la billetera crypto, permitiendo transacciones de usuario fluidas dentro de la plataforma.',
      year: 2023,
      highlights: [
        'Contribuí al desarrollo del frontend, asegurando una interfaz amigable y responsive para apostadores',
        'Integré la funcionalidad de billetera crypto, facilitando transacciones seguras y eficientes para usuarios',
        'Obtuve experiencia práctica en aplicaciones descentralizadas y tecnología blockchain',
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'Vercel', 'DeFi'],
      links: [
        {
          url: 'https://setoros.com/',
          label: 'Sitio en Vivo',
        },
      ],
      image: 'https://ucarecdn.com/b7cb0725-1c71-4780-8862-4c991546b098/',
    },
    {
      title: 'Binance Ride-Hailing',
      description:
        'La aplicación Binance Ride-Hailing se integra perfectamente con el ecosistema Binance usando tecnología de mini-programa y WebView. Construida con ReactJS, la aplicación soporta más de un millón de usuarios y procesa datos en tiempo real para asegurar una experiencia fluida. Lideré un equipo de siete desarrolladores para entregar esta solución de alto rendimiento.',
      year: 2022,
      highlights: [
        'Lideré un equipo de 7 desarrolladores para construir y entregar una aplicación escalable de transporte dentro del ecosistema Binance',
        'Gestioné procesamiento de datos en tiempo real para soportar más de un millón de usuarios, asegurando rendimiento y confiabilidad',
        'Dirigí tanto el desarrollo técnico como la coordinación del equipo, asegurando entrega puntual y de alta calidad del proyecto',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'TypeScript', 'React', 'JavaScript', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Sitio de la Empresa',
        },
      ],
      video: '8YDXTqEDG_U',
    },
    {
      title: 'Grab SuperApp - Intercity',
      description:
        'Grab Intercity es una función dentro de Grab SuperApp que permite a los usuarios comprar boletos de autobús y ferry en más de 15,000 rutas. Lideré el proyecto desde su inicio hasta el lanzamiento exitoso en 2022, supervisando un equipo de 11 ingenieros durante el transcurso de un año.',
      year: 2021,
      highlights: [
        'Lideré un equipo de 11 ingenieros a través del ciclo de vida completo del proyecto, asegurando su lanzamiento exitoso en 2022',
        'Contribuí directamente al desarrollo mientras guiaba y mentorizaba al equipo para fomentar colaboración y crecimiento',
        'Gestioné integraciones backend y APIs para soportar un sistema de boletos a gran escala con más de 15,000 rutas',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'Cloud', 'TypeScript', 'React', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Sitio de la Empresa',
        },
      ],
      video: 'TX1eDnLWX5M',
    },
    {
      title: 'Alipay Ride-Hailing',
      description:
        'La aplicación Alipay Ride-Hailing está integrada en el ecosistema Alipay usando tecnología de mini-programa, construida con ReactJS y RxJS y entregada a través de WebView. Inicialmente uniéndome al proyecto como Ingeniero de Software Senior, asumí un rol de liderazgo en 2022.',
      year: 2020,
      highlights: [
        'Transicioné de Ingeniero Senior a Líder de Proyecto, guiando al equipo a través de las fases de desarrollo y lanzamiento',
        'Gestioné procesamiento de datos en tiempo real y aseguré la escalabilidad de la aplicación para soportar más de un millón de usuarios',
        'Lideré la toma de decisiones técnicas y coordinación del equipo para entregar una solución de transporte fluida y de alto rendimiento',
      ],
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'TypeScript', 'React', 'JavaScript', 'Kubernetes'],
      links: [
        {
          url: 'https://splyt.com/',
          label: 'Sitio de la Empresa',
        },
      ],
      video: 'KVQJBnA5RcI',
    },
    {
      title: 'Editor de Dashboard para SaaS de Machine Learning',
      description:
        'El Editor de Dashboard es una herramienta frontend para una plataforma de software de big data que permite a los usuarios generar y gestionar dashboards personalizables para insights de machine learning. Trabajé exclusivamente en el frontend, usando React y Redux para crear el panel UI y las integraciones.',
      year: 2017,
      highlights: [
        'Desarrollé el panel UI e integraciones, permitiendo a los usuarios personalizar y gestionar fácilmente sus dashboards',
        'Colaboré estrechamente con un colega para integrar visualizaciones basadas en D3.js',
        'Utilicé React y Redux para construir un editor de dashboard escalable y responsive para una plataforma SaaS de big data',
      ],
      technologies: ['React', 'JavaScript', 'Redux', 'D3.js'],
      video: 'g96AqJbqL_4',
    },
  ],
  experience: [
    {
      company: 'Zenet Technology',
      title: 'Ingeniero de Software Senior Freelance',
      type: 'Freelance',
      startDate: '2022-01-01',
      endDate: null,
      current: true,
      description:
        'En mi rol como Ingeniero de Software Senior, proporcioné consultoría experta a una amplia gama de clientes, identificando y resolviendo cuellos de botella técnicos para optimizar sus sistemas. Contribuí a proyectos que soportaban millones de usuarios, entregando soluciones confiables de alto rendimiento mientras ofrecía orientación estratégica sobre tecnología e infraestructura. También mentorié a clientes, mejorando sus capacidades de desarrollo y fortaleciendo los resultados del proyecto.',
      highlights: [
        'Lideré equipos de proyecto, ofreciendo mentoría y capacitación que aumentó la satisfacción del cliente y mejoró el éxito general del proyecto',
        'Desarrollé y mantuve software con alta disponibilidad y confiabilidad, asegurando experiencias fluidas para millones de usuarios',
        'Consultoría de Estrategia y Gestión',
        'Diseño de arquitectura técnica',
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
      title: 'Gerente de Ingeniería',
      type: 'Tiempo completo',
      startDate: '2021-01-01',
      endDate: '2022-02-01',
      current: false,
      description:
        'Como Gerente de Ingeniería, lideré equipos multifuncionales para entregar soluciones escalables y de alto rendimiento para Splyt, una red de movilidad global líder. Nuestra tecnología integró transporte compartido, traslados al aeropuerto, bicicletas compartidas y scooters en las plataformas de viaje, billeteras y superapps de los socios, permitiendo acceso global para los usuarios.',
      highlights: [
        'Dirigí y ayudé a los equipos de ingeniería a construir y mantener sistemas resilientes',
        'Coordiné estrechamente con los equipos de producto, QA y operaciones para optimizar los flujos de trabajo',
        'Implementé mejores prácticas para infraestructura en la nube, seguridad y escalabilidad, usando herramientas como Kubernetes y Terraform',
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
      title: 'Ingeniero de Software Senior',
      type: 'Tiempo completo',
      startDate: '2019-10-01',
      endDate: '2021-01-01',
      current: false,
      description:
        'Como Ingeniero de Software Senior, contribuí a la misión de Splyt de transformar la industria del transporte electrónico a través de su innovadora API de roaming, que permite viajes sin fronteras y sin problemas para usuarios en 380 ciudades a nivel mundial.',
      highlights: [
        'Desarrollé y optimicé servicios backend para soportar la red de roaming internacional de Splyt',
        'Establecí y apliqué estándares de código, promoviendo soluciones mantenibles y escalables',
        'Colaboré con equipos multifuncionales para asegurar alineación en requisitos técnicos',
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
      title: 'Ingeniero de Software Senior',
      type: 'Tiempo completo',
      startDate: '2018-05-01',
      endDate: '2019-10-01',
      current: false,
      description:
        'Como Ingeniero de Software Senior en el departamento de I+D, contribuí al desarrollo de un framework avanzado para gestionar dispositivos IoT, soportando cientos de conexiones en tiempo real.',
      highlights: [
        'Contribuí a definir arquitectura de microservicios, permitiendo despliegue eficiente en más de 70 microservicios en Kubernetes',
        'Desarrollé características backend y frontend en Node.js y React, mejorando la funcionalidad de dispositivos IoT',
        'Aseguré y optimicé infraestructura, con monitoreo usando Zabbix, Prometheus, Grafana y EFK',
        'Empleé TDD para mantener alta calidad de código, implementé CI/CD con GoCD',
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
      title: 'Director de Tecnología',
      type: 'Tiempo completo',
      startDate: '2017-09-01',
      endDate: '2018-05-01',
      current: false,
      description:
        'Como CTO de Klaud9, la primera plataforma de Asia dedicada a fotografía de stock asiática, lideré toda la estrategia tecnológica de la empresa, desde arquitectura y desarrollo hasta despliegue y aseguramiento de calidad.',
      highlights: [
        'Analicé, diseñé y desarrollé la arquitectura central de la plataforma Klaud9',
        'Supervisé infraestructura, desarrollo backend y frontend',
        'Dirigí actividades del equipo de TI, fomentando un ambiente colaborativo',
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
      title: 'Desarrollador FullStack',
      type: 'Tiempo completo',
      startDate: '2017-02-01',
      endDate: '2017-09-01',
      current: false,
      description:
        'Como Desarrollador FullStack, jugué un papel clave en la plataforma de Bigfinite para adquisición de datos en tiempo real en los sectores de biotecnología y farmacéutica, integrando capas compatibles con regulaciones en soluciones de big data e IA.',
      highlights: [
        'Lideré la migración de código legacy a ReactJS, mejorando la eficiencia del código base',
        'Diseñé e implementé el módulo de Soluciones, estableciéndolo como el componente frontend central',
        'Colaboré con equipos multifuncionales para asegurar cumplimiento regulatorio',
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
      title: 'Desarrollador FullStack',
      type: 'Tiempo completo',
      startDate: '2016-03-01',
      endDate: '2017-02-01',
      current: false,
      description:
        'Como Desarrollador Full Stack, contribuí al diseño y desarrollo de la plataforma eShop de SmartCommerce, mejorando las capacidades tanto del frontend como del backend.',
      highlights: [
        'Diseñé y desarrollé características clave de la plataforma eShop usando AngularJS y Angular 2',
        'Lideré la migración del código frontend de AngularJS a Angular 2',
        'Mantuve y optimicé la API backend desarrollada en PhalconPHP',
      ],
      technologies: ['HTML/CSS', 'PHP', 'MySQL', 'Angular', 'Redis', 'TypeScript', 'Grunt', 'Phalcon', 'JavaScript'],
    },
    {
      company: 'Social & Loyal',
      title: 'Desarrollador Principal',
      type: 'Tiempo completo',
      startDate: '2012-08-01',
      endDate: '2016-03-01',
      current: false,
      description:
        'Como Desarrollador Principal en Social & Loyal, una plataforma de fidelización omnicanal basada en SaaS con miles de usuarios, fui responsable del desarrollo end-to-end de la plataforma.',
      highlights: [
        'Lideré el análisis, diseño y desarrollo de la plataforma Social & Loyal',
        'Gestioné el stack completo, desde infraestructura hasta frontend y backend',
        'Colaboré con equipos multifuncionales para entregar un producto que atrajo millones de usuarios',
      ],
      technologies: ['HTML/CSS', 'PHP', 'jQuery', 'Git', 'CakePHP', 'Grunt', 'JavaScript', 'AWS'],
    },
    {
      company: 'Freelance',
      title: 'Desarrollador FullStack',
      type: 'Freelance',
      startDate: '2011-10-01',
      endDate: '2012-08-01',
      current: false,
      description:
        'Como Desarrollador Full Stack, diseñé y desarrollé plataformas de clientes personalizadas, asegurando código de alta calidad y funcionalidad fluida.',
      highlights: [
        'Diseñé y desarrollé plataformas de clientes adaptadas a necesidades empresariales específicas',
        'Monitoreé, mantuve y optimicé entornos Apache HTTP Server',
        'Proporcioné consultoría técnica para mejorar la arquitectura de la plataforma',
      ],
      technologies: ['HTML/CSS', 'PHP', 'jQuery', 'MySQL', 'AJAX', 'jQuery UI', 'JavaScript', 'Apache HTTP Server'],
    },
  ],
  education: [
    {
      institution: 'Universidad de Illinois Urbana-Champaign (UIUC)',
      degree: 'Maestría en Administración de Empresas (MBA)',
      field: 'Administración de Empresas',
      startDate: '2021-09-01',
      endDate: '2023-07-01',
      location: 'Illinois, EE.UU.',
    },
    {
      institution: 'Universitat Oberta de Catalunya',
      degree: 'Ingeniero en Telecomunicaciones y Servicios TI',
      field: 'Ingeniería',
      startDate: '2014-01-01',
      endDate: '2020-06-01',
      location: 'Barcelona, España',
    },
  ],
  certifications: [
    {
      name: 'Especialización en Análisis de Negocios',
      issuer: 'Gies College of Business - Universidad de Illinois Urbana-Champaign',
      issueDate: '2022-12-01',
      url: null,
    },
    {
      name: 'CKA: Administrador Certificado de Kubernetes',
      issuer: 'The Linux Foundation',
      issueDate: '2019-07-01',
      expiryDate: '2022-07-01',
      url: null,
    },
  ],
  testimonials: [
    {
      name: 'Matthew Aldrin Torres',
      role: 'Gerente de Ingeniería',
      text: 'Albert es un gran desarrollador. Está muy orientado a los detalles y puede completar los requisitos técnicos hasta su finalización. Es inquisitivo y entrega trabajo de alta calidad.',
    },
    {
      name: 'Liher Del Rio',
      role: 'Ingeniero de Software Senior',
      text: 'Albert es un desarrollador experimentado con excelentes habilidades de programación que se mantiene a la vanguardia de las tecnologías emergentes. Tiene un espíritu colaborativo que hace que trabajar con él sea un placer.',
    },
  ],
};
