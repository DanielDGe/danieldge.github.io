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
      'Servicios robustos, reglas de negocio, seguridad e integración con sistemas empresariales.',
  },
  {
    number: '02',
    title: 'Integración',
    description:
      'Mensajería, comunicación entre servicios y flujos de datos que conectan plataformas distintas.',
  },
  {
    number: '03',
    title: 'Frontend & UX',
    description:
      'Interfaces claras y funcionales que convierten procesos complejos en experiencias simples.',
  },
]

export const experiencePreview = [
  {
    period: 'Actualidad',
    title: 'Analista Programador',
    eyebrow: 'Software empresarial',
    description:
      'Desarrollo y evolución de aplicaciones, APIs, integraciones y funcionalidades de negocio en entornos empresariales.',
  },
  {
    period: 'Trayectoria',
    title: 'Desarrollo Full Stack',
    eyebrow: 'Backend + Frontend',
    description:
      'Experiencia trabajando en distintas capas del producto, desde datos y servicios hasta interfaces orientadas al usuario.',
  },
  {
    period: 'Fundamentos',
    title: 'Soporte y tecnología',
    eyebrow: 'Resolución de problemas',
    description:
      'Una base práctica en soporte técnico que fortaleció el análisis, diagnóstico y enfoque hacia soluciones confiables.',
  },
]

export const techGroups = [
  {
    title: 'Backend & APIs',
    description: 'Lógica de negocio, servicios e integración.',
    items: ['Java 17', 'Spring Boot', 'C#', 'ASP.NET Core', 'Node.js'],
  },
  {
    title: 'Frontend',
    description: 'Experiencias web modernas y mantenibles.',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Material UI'],
  },
  {
    title: 'Datos & mensajería',
    description: 'Persistencia, comunicación y procesamiento.',
    items: ['PostgreSQL', 'MariaDB', 'MySQL', 'Oracle', 'RabbitMQ'],
  },
  {
    title: 'Seguridad & delivery',
    description: 'Identidad, contenedores y flujo de entrega.',
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
    level: 'Posgrado',
    title: 'Maestría en Ingeniería de Software',
    description: 'Formación avanzada en ingeniería, arquitectura, análisis y construcción de software.',
  },
  {
    level: 'Especialización',
    title: 'Ingeniería de Software',
    description: 'Profundización en prácticas, procesos y fundamentos de la disciplina.',
  },
  {
    level: 'En curso',
    title: 'Maestría en Docencia Superior',
    description: 'Complemento de la experiencia tecnológica con formación orientada a educación universitaria.',
  },
]

export const socialLinks = [
  {
    label: 'GitHub',
    value: '@DanielDGe',
    href: 'https://github.com/DanielDGe',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'danielgarcia-dev',
    href: 'https://www.linkedin.com/in/danielgarcia-dev',
    icon: 'linkedin',
  },
]
