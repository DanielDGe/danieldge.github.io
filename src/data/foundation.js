export const navigationItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
]

export const focusAreas = [
  {
    number: '01',
    title: 'Backend & APIs',
    description:
      'Java 17, Spring Boot, APIs REST y lógica de negocio para aplicaciones empresariales mantenibles.',
  },
  {
    number: '02',
    title: 'Arquitectura & integración',
    description:
      'Microservicios, mensajería y comunicación con sistemas externos para conectar procesos y datos.',
  },
  {
    number: '03',
    title: 'Frontend & UX',
    description:
      'React, Material UI y Angular para construir interfaces claras, intuitivas y orientadas al usuario.',
  },
]

export const experiencePreview = [
  {
    period: 'Jun 2024 · Actualidad',
    title: 'Analista Programador',
    eyebrow: 'ZTECH SOLUTIONS · GRUPO ZM S.A.',
    description:
      'Desarrollo y mantenimiento evolutivo de aplicaciones empresariales, trabajando en backend y frontend con Java 17, Spring Boot y React. Participación en APIs REST, microservicios, integración con sistemas externos, mensajería, seguridad, bases de datos y resolución de incidencias.',
  },
  {
    period: '2023 · 2024',
    title: 'Analista Programador',
    eyebrow: 'TIGO PANAMÁ · DESARROLLO CORE',
    description:
      'Participación en el desarrollo y mantenimiento de funcionalidades del área core, trabajando con aplicaciones empresariales e integración de sistemas en un entorno de telecomunicaciones.',
  },
  {
    period: '2017',
    title: 'Soporte técnico',
    eyebrow: 'UNIVERSIDAD TECNOLÓGICA DE PANAMÁ',
    description:
      'Encargado de laboratorio de cómputo en el Centro Especializado en Lenguas del Centro Regional de Veraguas, brindando soporte de software y hardware, atención de incidencias y asistencia técnica a usuarios.',
  },
]

export const techGroups = [
  {
    title: 'Backend & APIs',
    description: 'Servicios, lógica de negocio y APIs empresariales.',
    items: ['Java 17', 'Spring Boot', 'C#', 'ASP.NET Core', 'Node.js'],
  },
  {
    title: 'Frontend',
    description: 'Interfaces modernas, mantenibles y orientadas al usuario.',
    items: ['React', 'Material UI', 'Angular', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Datos & integración',
    description: 'Persistencia, mensajería y comunicación entre sistemas.',
    items: ['PostgreSQL', 'MariaDB', 'MySQL', 'Oracle', 'MongoDB', 'RabbitMQ'],
  },
  {
    title: 'Seguridad & delivery',
    description: 'Identidad, contenedores, control de versiones y automatización.',
    items: ['Keycloak', 'Docker', 'Git', 'GitLab', 'GitHub Actions', 'Maven'],
  },
]

export const projectPreview = [
  {
    id: 'task-manager',
    number: '01',
    type: 'Full Stack · Security',
    title: 'Task Manager',
    tagline: 'Gestión de tareas multiusuario con seguridad real de extremo a extremo.',
    description:
      'Aplicación full stack con autenticación centralizada, API protegida y aislamiento de datos por usuario, construida sobre una arquitectura preparada para pruebas, migraciones y ejecución contenerizada.',
    highlights: [
      'Keycloak + OpenID Connect con API protegida mediante JWT.',
      'Aislamiento multiusuario y persistencia relacional con PostgreSQL.',
      'Testcontainers, Flyway, Docker Compose y CI con GitHub Actions.',
    ],
    architecture: ['React + Vite', 'Keycloak', 'Spring Boot API', 'PostgreSQL'],
    technologies: ['Java 17', 'Spring Boot', 'React', 'PostgreSQL', 'Keycloak'],
    status: 'Proyecto público',
    visual: {
      kind: 'image',
      src: 'https://raw.githubusercontent.com/DanielDGe/01-task-manager/master/docs/screenshots/task-manager.png',
      alt: 'Interfaz principal de Task Manager',
    },
    links: [
      {
        label: 'Ver repositorio',
        href: 'https://github.com/DanielDGe/01-task-manager',
        icon: 'github',
      },
    ],
  },
  {
    id: 'fleetpulse',
    number: '02',
    type: 'Real Time · Event Driven',
    title: 'FleetPulse',
    tagline: 'Telemetría, geolocalización y eventos para monitoreo de flotas en tiempo real.',
    description:
      'Plataforma de aprendizaje orientada a sistemas distribuidos. Vehículos simulados publican telemetría por MQTT; el backend procesa los eventos y el dashboard refleja ubicaciones y alertas en tiempo real.',
    highlights: [
      'Backend en ASP.NET Core y dashboard Angular con actualizaciones mediante SignalR.',
      'Comunicación orientada a eventos con MQTT y simulador de telemetría vehicular.',
      'Persistencia temporal y geoespacial con TimescaleDB/PostgreSQL y PostGIS.',
      'Observabilidad planteada con OpenTelemetry, Prometheus y Grafana.',
    ],
    architecture: ['Vehicle simulator', 'MQTT', 'ASP.NET Core', 'SignalR', 'Angular'],
    technologies: ['ASP.NET Core', 'Angular', 'TypeScript', 'MQTT', 'SignalR', 'PostGIS', 'Redis'],
    status: 'Caso técnico · Repositorio privado',
    visual: {
      kind: 'fleet',
      label: 'Representación de telemetría y monitoreo de flota en tiempo real',
    },
    privateNote: 'La arquitectura se presenta sin exponer código fuente ni información privada.',
    links: [],
  },
  {
    id: 'portfolio-education',
    number: '03',
    type: 'Frontend · UX',
    title: 'Portafolio Digital',
    tagline: 'Una experiencia académica diseñada para organizar evidencias, reflexión y aprendizaje.',
    description:
      'Aplicación web desarrollada para la asignatura Sistemas de Evaluación aplicados a la Educación Superior. Convierte documentos, actividades y evidencias en un recorrido visual organizado y accesible.',
    highlights: [
      'React + Vite con Material UI y navegación responsive mediante React Router.',
      'Modo claro/oscuro persistente y transiciones con Framer Motion.',
      'Estructura por experiencias de aprendizaje, evidencias, metacognición y referencias.',
      'Publicación en GitHub Pages con una experiencia preparada para escritorio y móvil.',
    ],
    architecture: ['React', 'Material UI', 'React Router', 'GitHub Pages'],
    technologies: ['React', 'Vite', 'Material UI', 'React Router', 'Framer Motion'],
    status: 'Proyecto público · En uso',
    visual: {
      kind: 'portfolio',
      label: 'Representación de la interfaz del portafolio académico',
    },
    links: [
      {
        label: 'Ver sitio',
        href: 'https://danieldge.github.io/portafolio-evaluacion-superior/',
        icon: 'arrowUpRight',
      },
      {
        label: 'Repositorio',
        href: 'https://github.com/DanielDGe/portafolio-evaluacion-superior',
        icon: 'github',
      },
    ],
  },
]

export const educationPreview = [
  {
    level: 'Grado',
    title: 'Licenciatura en Desarrollo de Software',
    description:
      'Universidad Tecnológica de Panamá. Formación base en análisis, diseño, programación y construcción de soluciones de software.',
  },
  {
    level: 'Docencia',
    title: 'Profesorado de Segunda Enseñanza con especialización en Desarrollo de Software',
    description:
      'Especialización en Desarrollo de Software, complementando la formación técnica con fundamentos pedagógicos.',
  },
  {
    level: 'Posgrado · Completado',
    title: 'Especialización y Maestría en Ingeniería de Software',
    description:
      'Universidad Tecnológica de Panamá. Formación avanzada en ingeniería de software, arquitectura, análisis, calidad y diseño de soluciones.',
  },
  {
    level: 'Posgrado · En curso',
    title: 'Maestría en Docencia Superior',
    description:
      'ISAE Universidad. Formación orientada a la educación superior, evaluación, investigación y práctica docente universitaria.',
  },
]

export const socialLinks = [
  {
    label: 'GitHub',
    value: '@DanielDGe',
    href: 'https://github.com/DanielDGe',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'danielgarcia-dev',
    href: 'https://www.linkedin.com/in/danielgarcia-dev',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'Correo',
    value: 'ddge07@gmail.com',
    href: 'mailto:ddge07@gmail.com?subject=Contacto%20profesional',
    icon: 'mail',
    external: false,
  },
]
