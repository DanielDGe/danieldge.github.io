# Rediseño del Portafolio 2026 — Roadmap

Este documento es la **fuente de verdad** para la modernización del portafolio personal de Daniel García publicado en:

- https://danieldge.github.io/
- Repositorio: `DanielDGe/danieldge.github.io`

Debe actualizarse a medida que avancemos para mantener claros el estado actual, las decisiones tomadas, el trabajo pendiente y los hitos completados.

---

## Principio rector del proyecto

Este portafolio no debe limitarse a ser funcional.

La marca de los desarrollos de Daniel debe reflejarse también aquí:

- **Funcional:** todo debe cumplir correctamente su propósito.
- **Sin errores:** no se aceptan flujos rotos, enlaces defectuosos, comportamientos inconsistentes ni detalles descuidados.
- **Sorprendente:** el producto debe tener detalles visuales, interacciones y acabados que destaquen sin caer en excesos.
- **Grato para el usuario:** la interfaz debe sentirse agradable, clara, moderna y coherente.
- **Buena experiencia de usuario:** navegación intuitiva, jerarquía visual clara, tiempos de respuesta adecuados, accesibilidad y adaptación correcta a distintos dispositivos.

Cada decisión de diseño o implementación debe evaluarse no solo con la pregunta **“¿funciona?”**, sino también con:

> **¿Se siente bien usarlo? ¿Es claro? ¿Sorprende positivamente? ¿Se percibe cuidado y profesional?**

El objetivo es lograr un portafolio que represente tanto la capacidad técnica como el cuidado por la experiencia final del usuario.

---

## Estado actual

**Estado del proyecto:** Planificación  
**Sitio público actual:** Portafolio legacy  
**Rama fuente actual:** `main`  
**Rama de despliegue actual:** `gh-pages`  
**Stack objetivo:** React + Vite  
**Despliegue objetivo:** GitHub Actions + GitHub Pages

El portafolio actual fue creado originalmente con Create React App y desplegado mediante el paquete npm `gh-pages`.

El rediseño conservará el repositorio y la URL pública actuales, pero reemplazará la implementación legacy por una versión moderna.

---

## Decisiones base

- Mantener el nombre del repositorio `DanielDGe/danieldge.github.io`.
- Mantener la URL pública `https://danieldge.github.io/`.
- Preservar el portafolio anterior en una rama legacy antes de reemplazar el código fuente actual.
- Desarrollar el nuevo portafolio en una rama feature independiente.
- Mantener intacta la rama `gh-pages` mientras el nuevo portafolio esté en desarrollo.
- Reemplazar Create React App por React + Vite.
- Sustituir el despliegue manual mediante `gh-pages -d build` por GitHub Actions cuando el nuevo portafolio esté listo.
- No exponer información personal innecesaria como número de teléfono.
- No publicar un CV descargable con información personal excesiva.
- Priorizar proyectos actuales y representativos frente a ejercicios antiguos, tutoriales o trabajos universitarios básicos.
- Priorizar experiencia de usuario, coherencia visual, rendimiento y accesibilidad como requisitos de primera clase, no como detalles finales.

---

# Roadmap

## Fase 1 — Preparación del repositorio

**Estado:** ⬜ Pendiente

### Tareas

- [ ] Crear `legacy-portfolio-2022` desde el estado actual del código legacy.
- [ ] Crear `feature/portfolio-redesign-2026`.
- [ ] Confirmar que `gh-pages` permanece sin cambios.
- [ ] Confirmar que el sitio público actual sigue funcionando.
- [ ] Establecer la nueva rama feature como rama activa de desarrollo.

### Criterios de cierre

- El código legacy queda preservado de forma segura.
- Podemos desarrollar la nueva versión sin afectar el portafolio actual en producción.

---

## Fase 2 — Modernización de la base técnica

**Estado:** ⬜ Pendiente

### Tareas

- [ ] Reemplazar Create React App por Vite.
- [ ] Mantener React como framework frontend.
- [ ] Eliminar archivos y dependencias obsoletas de CRA.
- [ ] Eliminar de la nueva implementación la configuración antigua de despliegue mediante el paquete npm `gh-pages`.
- [ ] Eliminar la integración obsoleta de Bootstrap / jQuery / Popper.
- [ ] Definir una estructura limpia para:
  - componentes
  - secciones
  - assets
  - datos / contenido
  - estilos
- [ ] Confirmar que el desarrollo local funciona con:
  - `npm install`
  - `npm run dev`
- [ ] Confirmar que el build de producción funciona con:
  - `npm run build`

### Criterios de cierre

- La aplicación moderna basada en Vite funciona correctamente en local.
- El build finaliza sin errores.
- La nueva implementación ya no depende del código legacy de CRA.

---

## Fase 3 — Sistema visual y estructura de la experiencia

**Estado:** ⬜ Pendiente

### Secciones previstas

- [ ] Navegación
- [ ] Hero
- [ ] Sobre mí
- [ ] Experiencia
- [ ] Stack tecnológico
- [ ] Proyectos destacados
- [ ] Formación
- [ ] Contacto
- [ ] Footer

### Requisitos visuales y de experiencia

- [ ] Estética moderna y profesional orientada a ingeniería de software.
- [ ] Diseño responsive para escritorio, tablet y móvil.
- [ ] Modo claro y oscuro.
- [ ] Tipografía y jerarquía visual claras.
- [ ] Animaciones y movimiento sutiles que aporten vida sin distraer.
- [ ] Cards, espaciados, bordes y colores de acento coherentes.
- [ ] Microinteracciones agradables en botones, enlaces, navegación y tarjetas.
- [ ] Navegación intuitiva y predecible.
- [ ] Estados hover/focus/active cuidados.
- [ ] Evitar efectos excesivos, ruido visual o elementos decorativos sin propósito.
- [ ] Buscar al menos algunos detalles visuales memorables que den carácter propio al portafolio.
- [ ] Validar cada sección desde la perspectiva de experiencia de usuario, no solo desde la implementación técnica.

### Criterios de cierre

- La estructura general y el lenguaje visual están definidos.
- Todas las secciones principales cuentan con una estructura aprobada.
- El diseño se percibe coherente, moderno, agradable y diferenciador.

---

## Fase 4 — Actualización del contenido profesional

**Estado:** ⬜ Pendiente

### Perfil

- [ ] Actualizar titular e introducción profesional.
- [ ] Reflejar el perfil actual de Ingeniero de Software / Analista Programador.
- [ ] Destacar experiencia backend y frontend.
- [ ] Destacar interés en arquitectura e integración de sistemas.

### Tecnologías actuales

Priorizar tecnologías representativas como:

- Java 17
- Spring Boot
- React
- Material UI
- C#
- ASP.NET Core
- Angular
- TypeScript
- PostgreSQL
- MariaDB / MySQL
- Oracle
- RabbitMQ
- Keycloak
- Docker
- Git / GitLab
- GitHub Actions
- Maven

No utilizar barras de porcentaje para representar nivel de conocimientos.

### Experiencia

- [ ] ZTECH SOLUTIONS | Grupo ZM S.A.
- [ ] Tigo Panamá.
- [ ] Experiencia de soporte técnico en la Universidad Tecnológica de Panamá.
- [ ] Mantener descripciones profesionales sin exponer información interna o sensible de proyectos laborales.

### Formación

- [ ] Licenciatura en Desarrollo de Software.
- [ ] Especialización en Ingeniería de Software.
- [ ] Maestría en Ingeniería de Software.
- [ ] Maestría en Docencia Superior — en curso.
- [ ] Profesorado y formación previa relevante cuando aporte valor.

### Privacidad

- [ ] Eliminar el número de teléfono público.
- [ ] Evitar exponer documentos personales innecesarios.
- [ ] No restaurar el antiguo PDF descargable del CV.
- [ ] Priorizar LinkedIn / GitHub / correo electrónico como vías de contacto.

### Criterios de cierre

- El contenido representa correctamente el perfil profesional de Daniel en 2026.
- No quedan datos obsoletos ni información personal innecesariamente expuesta.

---

## Fase 5 — Proyectos destacados

**Estado:** ⬜ Pendiente

### Proyectos prioritarios

#### Task Manager Full Stack

- [ ] Añadir como proyecto público principal.
- [ ] Java 17 / Spring Boot / React / PostgreSQL.
- [ ] Mencionar Keycloak, OpenID Connect, JWT, Flyway, Docker y pruebas automatizadas cuando sea útil.
- [ ] Enlazar repositorio público.

#### FleetPulse

- [ ] Añadir como proyecto privado destacado.
- [ ] Describir arquitectura y tecnologías sin exponer código fuente privado.
- [ ] ASP.NET Core / Angular / MQTT / SignalR / PostgreSQL / PostGIS / observabilidad.
- [ ] No enlazar el repositorio privado.

#### Portafolio Digital — Evaluación en Educación Superior

- [ ] Añadir como proyecto actual desarrollado con React / Vite / Material UI.
- [ ] Mencionar navegación responsive, temas, progreso de lectura y visor PDF personalizado.
- [ ] Enlazar el repositorio mientras permanezca público.

#### Portafolio profesional

- [ ] El nuevo portafolio podrá presentarse como proyecto propio una vez publicado.

### Mejoras posteriores

- [ ] Añadir screenshots de proyectos.
- [ ] Añadir demos cortas / GIF cuando realmente mejoren la experiencia.

### Criterios de cierre

- Los proyectos destacados representan la capacidad técnica actual y no ejercicios antiguos.
- La presentación de cada proyecto ayuda a entender rápidamente qué problema resuelve, qué tecnologías utiliza y qué aporta Daniel.

---

## Fase 6 — Pulido técnico y de experiencia

**Estado:** ⬜ Pendiente

### SEO y metadata

- [ ] Reemplazar el título genérico `Portfolio`.
- [ ] Añadir una meta description relevante.
- [ ] Añadir metadata Open Graph.
- [ ] Añadir imagen social preview.
- [ ] Actualizar favicon y metadata de la aplicación.
- [ ] Revisar robots metadata.

### Calidad

- [ ] Revisar accesibilidad.
- [ ] Navegación completa por teclado.
- [ ] HTML semántico.
- [ ] Contraste de colores.
- [ ] Soporte para `prefers-reduced-motion` cuando corresponda.
- [ ] Optimizar imágenes y assets.
- [ ] Revisar todos los enlaces externos.
- [ ] Eliminar código muerto y assets obsoletos.
- [ ] Eliminar archivos de plantilla y tests obsoletos de CRA.
- [ ] Revisar tamaño del bundle y rendimiento.
- [ ] Validar estados de carga, error y ausencia de contenido cuando apliquen.
- [ ] Revisar la experiencia completa en móvil, tablet y escritorio.
- [ ] Revisar consistencia visual y microinteracciones.
- [ ] Realizar una revisión final específica de UX antes de aprobar producción.

### Criterios de cierre

- El portafolio está pulido, accesible, rápido y preparado para producción.
- No presenta errores visibles ni comportamientos inconsistentes.
- La experiencia se siente agradable, clara, cuidada y profesional.

---

## Fase 7 — Modernización del despliegue en GitHub Pages

**Estado:** ⬜ Pendiente

### Tareas

- [ ] Añadir workflow de GitHub Actions para el build de Vite.
- [ ] Configurar GitHub Pages para desplegar mediante Actions.
- [ ] Validar el artefacto de producción.
- [ ] Integrar el rediseño aprobado en `main`.
- [ ] Cambiar GitHub Pages al nuevo sistema de despliegue mediante Actions.
- [ ] Confirmar que `https://danieldge.github.io/` muestra el nuevo portafolio.
- [ ] Probar navegación directa y refresh de rutas.
- [ ] Validar el sitio publicado desde escritorio y móvil.

### Criterios de cierre

- Cada actualización aprobada de `main` puede desplegarse automáticamente.
- La URL pública permanece igual.
- El nuevo portafolio está publicado y estable.

---

## Fase 8 — Limpieza legacy y documentación

**Estado:** ⬜ Pendiente

### Tareas

- [ ] Confirmar estabilidad en producción antes de eliminar recursos antiguos.
- [ ] Mantener `legacy-portfolio-2022` como respaldo histórico.
- [ ] Eliminar la rama antigua `gh-pages` únicamente después de confirmar el nuevo despliegue.
- [ ] Eliminar dependencias y scripts antiguos de despliegue.
- [ ] Reemplazar el README por defecto de Create React App por documentación real del proyecto.
- [ ] Documentar desarrollo local y despliegue.
- [ ] Verificar enlaces desde el perfil de GitHub y LinkedIn.

### Criterios de cierre

- El repositorio contiene una estructura moderna y limpia.
- La versión legacy continúa siendo recuperable.
- El desarrollo y el despliegue están correctamente documentados.

---

# Flujo de trabajo

El rediseño se implementará de forma incremental.

Para cada etapa:

1. Implementar un cambio enfocado en `feature/portfolio-redesign-2026`.
2. Subir el cambio a GitHub.
3. Descargar / hacer pull de la rama en local.
4. Ejecutar y probar el portafolio localmente.
5. Revisar comportamiento, diseño y experiencia mediante capturas y pruebas.
6. Aplicar correcciones.
7. Marcar en este roadmap las tareas completadas.
8. Continuar con el siguiente hito.

Durante el desarrollo se evaluará cada entrega con tres criterios simultáneos:

- **Correctitud técnica:** debe funcionar sin errores.
- **Calidad visual:** debe verse profesional, coherente y diferenciador.
- **Experiencia de usuario:** debe ser intuitivo, agradable y satisfactorio de utilizar.

El sitio público actual debe permanecer sin cambios hasta que el rediseño haya sido revisado y aprobado.

---

# Registro de progreso

## 2026-10-06

- Se revisó el repositorio legacy y su estrategia de despliegue.
- Se confirmó que la implementación actual utiliza Create React App.
- Se confirmó el despliegue mediante `gh-pages -d build`.
- Se confirmaron las ramas `main` y `gh-pages`.
- Se identificaron contenido, metadata, dependencias y proyectos obsoletos.
- Se confirmó que se conservarán el repositorio y la URL pública actual de GitHub Pages.
- Se definió el roadmap inicial del rediseño.
- Se estableció como principio rector que el nuevo portafolio debe ser funcional, sin errores, visualmente sorprendente, agradable y con una experiencia de usuario cuidada.
