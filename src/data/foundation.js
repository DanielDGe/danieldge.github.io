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
    type: 'Full Stack',
    title: 'Task Manager',
    description:
      'Aplicación full stack con autenticación, gestión de tareas, persistencia relacional y entorno contenerizado.',
    technologies: ['Java 17', 'Spring Boot', 'React', 'PostgreSQL'],
    status: 'Repositorio público',
    href: 'https://github.com/DanielDGe/01-task-manager',
  },
  {
    id: 'fleetpulse',
    number: '02',
    type: 'Distributed Systems',
    title: 'FleetPulse',
    description:
      'Plataforma orientada a telemetría y procesamiento de eventos, diseñada alrededor de servicios e integración en tiempo real.',
    technologies: ['ASP.NET Core', 'Angular', 'MQTT', 'SignalR'],
    status: 'Proyecto privado',
  },
  {
    id: 'portfolio-education',
    number: '03',
    type: 'Frontend',
    title: 'Portafolio Digital',
    description:
      'Experiencia académica interactiva construida con React, navegación responsive y un visor PDF personalizado.',
    technologies: ['React', 'Vite', 'Material UI', 'PDF.js'],
    status: 'Repositorio público',
    href: 'https://github.com/DanielDGe/portafolio-evaluacion-superior',
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
    title: 'Profesorado de Segunda Enseñanza',
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
