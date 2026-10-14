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

**Estado del proyecto:** En desarrollo — Fase 6.5 implementada, pendiente validación local  
**Sitio público actual:** Portafolio legacy  
**Rama fuente actual:** `main`  
**Rama activa de desarrollo:** `feature/portfolio-redesign-2026`  
**Rama de respaldo legacy:** `legacy-portfolio-2022`  
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

**Estado:** ✅ Completada

### Tareas

- [x] Crear `legacy-portfolio-2022` desde el estado actual del código legacy.
- [x] Crear `feature/portfolio-redesign-2026`.
- [x] Confirmar que `gh-pages` permanece sin cambios.
- [x] Confirmar que el sitio público actual no recibe cambios durante esta etapa.
- [x] Establecer la nueva rama feature como rama activa de desarrollo.

### Criterios de cierre

- [x] El código legacy queda preservado de forma segura.
- [x] Podemos desarrollar la nueva versión sin afectar el portafolio actual en producción.

### Referencias de seguridad

- Punto de partida preservado en `legacy-portfolio-2022`: `b0d5d942313296d7dd78cfff292c3ca458d92d6c`.
- Rama de desarrollo creada desde el mismo punto: `feature/portfolio-redesign-2026`.
- `gh-pages` permanece en `f6eec248277541457f900576f32552c3d00d9c4a` y no fue modificada.

---

## Fase 2 — Modernización de la base técnica

**Estado:** ✅ Completada

### Tareas

- [x] Reemplazar Create React App por Vite.
- [x] Mantener React como framework frontend.
- [x] Eliminar archivos y dependencias obsoletas de CRA.
- [x] Eliminar de la nueva implementación la configuración antigua de despliegue mediante el paquete npm `gh-pages`.
- [x] Eliminar la integración obsoleta de Bootstrap / jQuery / Popper.
- [x] Definir una estructura limpia para:
  - componentes
  - secciones
  - assets
  - datos / contenido
  - estilos
- [x] Confirmar en local que el desarrollo funciona con:
  - `npm install`
  - `npm run dev`
- [x] Confirmar en local que el build de producción funciona con:
  - `npm run build`
- [x] Confirmar en local que el análisis estático funciona con:
  - `npm run lint`

### Criterios de cierre

- [x] La aplicación moderna basada en Vite funciona correctamente en local.
- [x] El build finaliza sin errores.
- [x] El análisis estático finaliza sin warnings ni errores.
- [x] La nueva implementación ya no depende del código legacy de CRA.
- [x] La instalación limpia queda en 24 paquetes y 0 vulnerabilidades reportadas por npm durante la validación local.

---

## Fase 3 — Sistema visual y estructura de la experiencia

**Estado:** ✅ Completada

### Secciones previstas

- [x] Navegación
- [x] Hero
- [x] Sobre mí
- [x] Experiencia
- [x] Stack tecnológico
- [x] Proyectos destacados
- [x] Formación
- [x] Contacto
- [x] Footer

### Requisitos visuales y de experiencia

- [x] Estética moderna y profesional orientada a ingeniería de software.
- [x] Diseño responsive para escritorio, tablet y móvil.
- [x] Modo claro y oscuro.
- [x] Tipografía y jerarquía visual claras.
- [x] Animaciones y movimiento sutiles que aporten vida sin distraer.
- [x] Cards, espaciados, bordes y colores de acento coherentes.
- [x] Microinteracciones agradables en botones, enlaces, navegación y tarjetas.
- [x] Navegación intuitiva y predecible.
- [x] Estados hover/focus/active cuidados.
- [x] Evitar efectos excesivos, ruido visual o elementos decorativos sin propósito.
- [x] Buscar al menos algunos detalles visuales memorables que den carácter propio al portafolio.
- [x] Validar cada sección desde la perspectiva de experiencia de usuario, no solo desde la implementación técnica.

### Criterios de cierre

- [x] La estructura general y el lenguaje visual están implementados.
- [x] Todas las secciones principales cuentan con una estructura funcional.
- [x] Validar en local que el diseño se percibe coherente, moderno, agradable y diferenciador.
- [x] Validar comportamiento responsive, navegación, tema claro/oscuro y microinteracciones antes de cerrar la fase.

---

## Fase 4 — Actualización del contenido profesional

**Estado:** ✅ Completada

### Perfil

- [x] Actualizar titular e introducción profesional.
- [x] Reflejar el perfil actual de Ingeniero de Software / Analista Programador.
- [x] Destacar experiencia backend y frontend.
- [x] Destacar interés en arquitectura e integración de sistemas.

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

- [x] ZTECH SOLUTIONS | Grupo ZM S.A.
- [x] Tigo Panamá.
- [x] Experiencia de soporte técnico en la Universidad Tecnológica de Panamá.
- [x] Mantener descripciones profesionales sin exponer información interna o sensible de proyectos laborales.

### Formación

- [x] Licenciatura en Desarrollo de Software.
- [x] Especialización en Ingeniería de Software.
- [x] Maestría en Ingeniería de Software.
- [x] Maestría en Docencia Superior — en curso.
- [x] Profesorado y formación previa relevante cuando aporte valor.

### Privacidad

- [x] Eliminar el número de teléfono público.
- [x] Evitar exponer documentos personales innecesarios.
- [x] No restaurar el antiguo PDF descargable del CV.
- [x] Priorizar LinkedIn / GitHub / correo electrónico como vías de contacto.

### Criterios de cierre

- [x] Validar en local que el contenido representa correctamente el perfil profesional de Daniel en 2026.
- [x] Confirmar que no quedan datos obsoletos ni información personal innecesariamente expuesta.

---

## Fase 5 — Proyectos destacados

**Estado:** ✅ Completada

### Proyectos prioritarios

#### Task Manager Full Stack

- [x] Añadir como proyecto público complementario.
- [x] Java 17 / Spring Boot / React / PostgreSQL.
- [x] Mencionar Keycloak, OpenID Connect, JWT, Flyway, Docker y pruebas automatizadas cuando sea útil.
- [x] Enlazar repositorio público.
- [x] Representar visualmente la arquitectura y el flujo de seguridad del proyecto en lugar de destacar una interfaz deliberadamente sencilla.

#### FleetPulse

- [x] Añadir como proyecto privado principal y destacado.
- [x] Describir arquitectura y tecnologías sin exponer código fuente privado.
- [x] ASP.NET Core / Angular / MQTT / SignalR / PostgreSQL / PostGIS / observabilidad.
- [x] No enlazar el repositorio privado.
- [x] Añadir preview visual abstracto de telemetría sin utilizar material privado.

#### Portafolio Digital — Evaluación en Educación Superior

- [x] Añadir como proyecto actual desarrollado con React / Vite / Material UI.
- [x] Mencionar navegación responsive, temas y estructura de evidencias académicas.
- [x] Enlazar el repositorio mientras permanezca público.
- [x] Enlazar el sitio publicado en GitHub Pages.
- [x] Añadir preview visual propio sin reutilizar documentos o evidencias académicas.

#### Portafolio profesional

- [ ] El nuevo portafolio podrá presentarse como proyecto propio una vez publicado.

### Mejoras posteriores

- [ ] Evaluar screenshots o demos cortas únicamente cuando aporten valor real y exista material visual representativo.
- [ ] Evitar incorporar recursos visuales por obligación si una representación técnica comunica mejor el proyecto.

### Criterios de cierre

- [x] Validar en local que los proyectos destacados representan la capacidad técnica actual y no ejercicios antiguos.
- [x] Validar que la presentación permite entender rápidamente problema, arquitectura, tecnologías y aportes.
- [x] Revisar responsive y enlaces públicos en escritorio y móvil.
- [x] Confirmar análisis estático sin warnings ni errores.
- [x] Confirmar build de producción exitoso.

---

## Fase 6 — Pulido técnico y de experiencia

**Estado:** ✅ Completada

### SEO y metadata

- [x] Definir título profesional `Daniel García | Software Engineer`.
- [x] Añadir una meta description específica y relevante.
- [x] Añadir metadata Open Graph y Twitter Card.
- [x] Añadir imagen social preview propia en SVG 1200×630 y generar PNG compatible con redes sociales durante desarrollo y build.
- [x] Referenciar PNG en Open Graph y Twitter Card, manteniendo SVG como fuente editable.
- [x] Actualizar favicon y añadir `site.webmanifest`.
- [x] Añadir canonical URL y datos estructurados `Person` mediante JSON-LD.
- [x] Añadir `robots.txt`, robots metadata y `sitemap.xml`.
- [x] Preparar la previsualización social para producción con PNG 1200×630; la validación visual en plataformas reales se realizará tras el despliegue público de la Fase 7.

### Identidad visual personal

- [x] Definir un monograma DG como símbolo principal de la identidad del portafolio.
- [x] Unificar el mismo símbolo en header, firma de perfil, favicon y social preview.
- [x] Eliminar el favicon ambiguo basado en “D + barra” y sustituirlo por un DG inequívoco.
- [x] Mantener una geometría simple y legible con identidad monocromática cian sobre fondo azul oscuro.
- [x] Implementar el logo del sitio como componente SVG reutilizable sin añadir dependencias.

### Iconografía y movimiento

- [x] Incorporar logos en el stack tecnológico sin añadir una dependencia pesada al bundle.
- [x] Añadir fallback visual cuando un logo remoto no esté disponible.
- [x] Cargar logos SVG de forma diferida con `loading="lazy"` y `decoding="async"`.
- [x] Añadir animaciones progresivas al entrar contenido en viewport mediante `IntersectionObserver`.
- [x] Mantener las animaciones desacopladas de los estados hover existentes.
- [x] Desactivar movimiento no esencial cuando el sistema solicita `prefers-reduced-motion`.

### Calidad

- [x] Mantener HTML semántico con `header`, `nav`, `main`, `section`, `article` y `footer`.
- [x] Mejorar comportamiento por teclado: cierre del menú móvil con Escape y navegación sin movimiento forzado cuando se reduce animación.
- [x] Añadir etiquetas accesibles a enlaces externos que abren una nueva pestaña.
- [x] Mantener enlace de salto al contenido y estados `:focus-visible`.
- [x] Reforzar soporte para `prefers-reduced-motion`.
- [x] Evitar nuevas dependencias JavaScript para iconografía o animación.
- [x] Mantener fuera de la rama activa archivos y dependencias legacy eliminados en Fase 2.
- [x] Validar navegación completa únicamente con teclado.
- [x] Validar contraste de colores en ambos temas mediante revisión visual en modo claro y oscuro.
- [x] Revisar estructura, destinos y comportamiento accesible de los enlaces externos; la comprobación final de URLs desde producción se realizará en la Fase 7.
- [x] Revisar tamaño del bundle y rendimiento después de esta fase.
- [x] Revisar la experiencia completa en móvil, tablet y escritorio después de los nuevos logos y animaciones.
- [x] Revisar consistencia visual y microinteracciones.
- [x] Realizar una revisión final específica de UX antes de aprobar producción.

### Criterios de cierre

- [x] El portafolio está pulido, accesible, rápido y preparado para producción.
- [x] No presenta errores visibles ni comportamientos inconsistentes.
- [x] La experiencia se siente agradable, clara, cuidada y profesional.
- [x] `npm run lint` finaliza sin warnings ni errores.
- [x] `npm run build` finaliza correctamente después de los cambios de Fase 6.

---

## Fase 6.5 — Motion & Delight

**Estado:** 🟨 Implementada — pendiente validación local

### Objetivo

Añadir vida y profundidad al sitio sin convertir la experiencia en una demostración excesiva de animaciones. El movimiento debe reforzar jerarquía, interacción y sensación de producto cuidado.

### Tareas

- [x] Añadir movimiento ambiental lento a los halos del Hero.
- [x] Animar sutilmente el grid y halo de la visual del Hero.
- [x] Añadir una secuencia progresiva de inicialización a las líneas de la tarjeta `software.system`.
- [x] Añadir pulso sutil a indicadores de estado.
- [x] Evolucionar la flotación existente de los nodos API / EVENTS / UX.
- [x] Añadir parallax ligero controlado por puntero únicamente en dispositivos con puntero fino.
- [x] Añadir glow dinámico que sigue el cursor en las tarjetas de proyectos.
- [x] Mantener un estado de glow centrado para interacción mediante teclado.
- [x] Añadir señales de actividad a FleetPulse: grid en movimiento, rutas activas, marcadores flotantes, métricas e indicadores vivos.
- [x] Añadir dibujo progresivo de la línea y puntos del timeline de experiencia.
- [x] Añadir entrada escalonada de chips/logos tecnológicos al mostrar cada grupo del stack.
- [x] Añadir entrada escalonada y glow ambiental dinámico al bloque de contacto.
- [x] Añadir estado compacto del header al hacer scroll, con mayor blur y sombra sutil.
- [x] Añadir stagger específico a las tarjetas de Formación para mantener continuidad con Stack y Contacto.
- [x] Añadir microinteracción de flecha, elevación y presión a botones principales y enlaces de contacto.
- [x] Mantener “Descubrir” visible durante la mayor parte del Hero y desvanecerlo únicamente entre ~70% y ~95% del recorrido.
- [x] Unificar la navegación interna de menú, CTAs del Hero y “Descubrir” mediante un único cálculo de scroll y offset.
- [x] Refinar el hover de tecnologías con glow mínimo y respuesta más orgánica del logo.
- [x] Refinamiento de timing y easing: reveal general 760 ms, timeline más pausado, stagger perceptible en stack/contacto y transiciones del header suavizadas.
- [x] Eliminar el flash inicial de tema aplicando la preferencia guardada antes del primer paint.
- [x] Enriquecer el cambio claro ↔ oscuro con View Transition cuando está disponible y fallback progresivo sin dependencias.
- [x] Añadir glow/borde suave al logo `<DG/>` en hover/focus.
- [x] Convertir el `<DG/>` de Perfil en enlace real a Inicio, con navegación suave, cursor de enlace y soporte de teclado; el nombre y cargo permanecen como texto.
- [x] Sustituir el `background-clip: text` multilínea del Hero por colores progresivos por palabra para evitar artefactos de clipping/reflow en Chromium y distintos niveles de zoom.
- [x] Suavizar el `::selection` específico del título para que una selección parcial no parezca un recorte visual.
- [x] Reforzar visualmente Formación con iconografía propia por tarjeta sin añadir dependencias.
- [x] Integrar el Técnico en Desarrollo de Software dentro del párrafo de la tarjeta de Licenciatura, sin crear una quinta tarjeta ni un elemento visual independiente.
- [x] Implementar las interacciones sin dependencias adicionales.
- [x] Respetar `prefers-reduced-motion` y evitar parallax en dispositivos sin puntero fino.
- [ ] Validar que las animaciones se sienten sutiles y no distraen del contenido.
- [x] Validar Hero y proyectos en escritorio.
- [x] Validar que móvil mantiene una experiencia fluida y sin exceso de movimiento.
- [ ] Confirmar nuevamente `npm run lint` y `npm run build`.

### Criterios de cierre

- [x] El sitio se percibe más vivo sin sacrificar claridad ni profesionalismo.
- [ ] El movimiento aporta profundidad o feedback, no decoración gratuita.
- [x] No existen saltos de layout ni degradación visible de rendimiento.
- [x] La experiencia reducida mediante `prefers-reduced-motion` permanece estable.

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
- [ ] Comprobar en producción todos los enlaces externos y la previsualización Open Graph / Twitter Card en plataformas reales.

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

## 2026-10-14 — Fase 6.5 · Motion & Delight

- Se añadió `useMotionDelight` para interacciones de puntero sin dependencias externas.
- Hero:
  - halos ambientales con desplazamiento lento;
  - grid con deriva sutil y halo respirando;
  - líneas de `software.system` aparecen secuencialmente como inicialización;
  - estado saludable y otros indicadores incorporan pulso discreto;
  - tarjeta y nodos reaccionan ligeramente al movimiento del puntero en escritorio.
- Proyectos:
  - glow radial sigue el cursor y conserva feedback mediante `:focus-within`.
- Recorrido de página:
  - el timeline dibuja progresivamente su rail y puntos al entrar en viewport;
  - el stack presenta tecnologías con stagger breve por grupo;
  - contacto incorpora glow ambiental y entrada escalonada de canales;
  - Formación incorpora stagger propio para las cuatro tarjetas;
  - los botones principales y enlaces de contacto responden con movimiento direccional y presión;
  - “Descubrir” permanece visible durante casi todo el Hero y solo se desvanece cerca de la transición hacia Perfil;
  - el header adopta una variante compacta y más definida después de iniciar el scroll.
- FleetPulse:
  - grid interno en movimiento;
  - rutas con señal visual periódica;
  - marcadores con flotación mínima;
  - indicadores online y determinadas métricas muestran actividad sutil.
- Todas las animaciones continúan condicionadas por `prefers-reduced-motion`; el parallax exige puntero fino y “Descubrir” usa un ocultamiento sin desplazamiento cuando el usuario reduce movimiento.
- Se corrigió el fade de “Descubrir”: dejó de depender de un umbral fijo y ahora se mantiene completamente visible hasta ~70% del Hero, desvaneciéndose suavemente hasta ~95% para evitar un vacío visual prematuro.
- Navegación interna unificada: menú, `Explorar proyectos`, `Conocer mi perfil` y `Descubrir` reutilizan el mismo helper de scroll, por lo que aterrizan con el mismo offset visual.
- Tema y renderizado final:
  - el tema guardado se aplica desde `index.html` antes de React para evitar el flash oscuro/claro al recargar;
  - el cambio de tema utiliza View Transitions cuando el navegador lo soporta y un fallback CSS cuando no;
  - el logo `<DG/>` incorpora glow y refuerzo de borde discretos en hover/focus;
  - el titular degradado dejó de depender de `background-clip: text` sobre un span multilínea y ahora conserva la progresión cromática mediante palabras coloreadas de forma estable.
- Formación final:
  - las cuatro tarjetas incorporan iconografía semántica propia;
  - el número 01–04 pasa a ser un detalle secundario;
  - el Técnico en Desarrollo de Software queda integrado naturalmente en la descripción de la Licenciatura, sin pill ni quinta tarjeta.
- Primera validación local confirmó funcionamiento del Hero, proyectos y móvil. Se detectó que timeline, stack, contacto y transiciones generales requerían mayor sutileza; se redujo la distancia de desplazamiento, se aumentaron duraciones y stagger y se adoptó un easing más progresivo. Queda pendiente validar este refinamiento, además de `npm run lint` y `npm run build`.
- Producción continúa aislada en `gh-pages`.

## 2026-10-14 — Identidad visual DG

- Se definió una firma visual `<DG/>` como identidad principal del portafolio, manteniendo `DG` como variante reducida para favicon.
- El símbolo utiliza un contenedor cuadrado redondeado oscuro, borde cian y la firma monoespaciada `<DG/>` en cian, sin introducir un segundo color dentro del logo.
- Se creó el componente reutilizable `BrandMark` para evitar duplicar implementaciones dentro de React.
- Header y firma de perfil utilizan ahora el mismo componente `<DG/>`; el favicon conserva una variante `DG` simplificada para asegurar legibilidad a 16–32 px.
- El favicon anterior “D + barra”, visualmente ambiguo, fue reemplazado por una variante `DG` monocromática coherente con la identidad principal.
- El social preview utiliza la firma `<DG/>` monocromática del sistema de identidad.
- Se eliminó el espacio interno antes de `/>` para lograr una firma más compacta y se aumentó el espaciado óptico de `DG` en el favicon.
- El kicker del Hero se refinó a `BACKEND · FRONTEND · ARCHITECTURE · SYSTEMS INTEGRATION`.
- Producción continúa aislada en `gh-pages`.

## 2026-10-14 — Refinamiento de posicionamiento

- Se refinó el posicionamiento profesional antes de iniciar la Fase 7.
- Hero:
  - el kicker dejó de presentar Java 17, Spring Boot y React como definición principal del perfil;
  - ahora prioriza Backend, Frontend, Architecture y Systems Integration, evitando repetir “Software Engineer” inmediatamente arriba.
- Perfil:
  - se sustituyó “Mi stack principal hoy gira alrededor de...” por una descripción basada en experiencia transversal;
  - tecnologías concretas continúan visibles en Stack, experiencia y proyectos, donde aportan contexto sin limitar la marca personal.
- Social preview y metadata:
  - se reemplazó la enumeración de tecnologías por Backend, Frontend, APIs, Architecture y Systems Integration;
  - description, Open Graph, Twitter Card y JSON-LD se alinearon con el nuevo posicionamiento.
- No se modificó el diseño visual ni la estructura del sitio; el cambio es exclusivamente de narrativa profesional y metadata.
- Producción continúa aislada en `gh-pages`.


## 2026-10-13 — Fase 6

- SEO y metadata:
  - título y descripción profesional refinados;
  - canonical URL, Open Graph, Twitter Card y JSON-LD;
  - favicon propio, manifest, robots y sitemap;
  - social preview vectorial 1200×630.
- Stack tecnológico:
  - logos Devicon cargados como SVG de forma diferida;
  - fallback visual automático si un recurso externo falla;
  - microinteracción sutil en hover sin añadir dependencias al bundle.
- Movimiento:
  - nuevo hook `useRevealOnScroll` basado en `IntersectionObserver`;
  - entrada progresiva para encabezados, experiencia, stack, proyectos, formación y contacto;
  - respeto explícito por `prefers-reduced-motion`.
- Accesibilidad:
  - menú móvil puede cerrarse con Escape;
  - el scroll programático deja de ser suave si el usuario reduce movimiento;
  - enlaces externos describen que abren una nueva pestaña;
  - se mantienen skip link y estados de foco visibles.
- Validación local completada parcialmente: animaciones, navegación por teclado, cierre con Escape, lint y build aprobados.
- `npm audit` detectó inicialmente una vulnerabilidad alta heredada por `sharp`; se actualizó y fijó `sharp` en `0.35.5` y la validación posterior quedó en 0 vulnerabilidades.
- Validación final de Fase 6:
  - `npm install`: 29 paquetes auditados, 0 vulnerabilidades;
  - `npm audit`: 0 vulnerabilidades;
  - `npm run lint`: 0 warnings y 0 errores sobre 22 archivos;
  - `npm run build`: 36 módulos transformados y build de producción exitoso;
  - social preview PNG generado automáticamente en 1200×630 y 75.0 KB;
  - navegación por teclado y cierre del menú móvil con Escape validados;
  - animaciones de entrada y responsive revisados en local.
- La comprobación de cómo renderizan Open Graph/Twitter Card en plataformas externas se trasladará a la Fase 7, cuando el sitio nuevo esté publicado.
- Producción continúa aislada en `gh-pages`.

## 2026-10-10 — Fase 5

- La sección de proyectos dejó de ser una colección de tarjetas genéricas y pasó a presentarse como casos técnicos.
- FleetPulse se estableció como proyecto principal por ser el caso con mayor riqueza visual y técnica y continuar en desarrollo:
  - dashboard de control inspirado en la interfaz real del proyecto;
  - métricas de flota, datos en vivo, mapa, vehículos y rutas representados en el preview;
  - ASP.NET Core, Angular, MQTT, SignalR, PostGIS, Redis y arquitectura orientada a eventos;
  - el repositorio continúa privado y no se enlaza.
- Task Manager pasó a ser un caso técnico complementario:
  - se descartó el uso de la captura como recurso principal porque su interfaz es deliberadamente sencilla;
  - el preview representa el flujo React → Keycloak → Spring Boot → PostgreSQL;
  - autenticación Keycloak/OpenID Connect, API JWT, aislamiento multiusuario, Flyway, Docker Compose, Testcontainers y CI.
- Portafolio Digital se actualizó como proyecto frontend/UX:
  - React, Vite, Material UI, React Router y Framer Motion;
  - navegación responsive, temas y organización de evidencias;
  - enlaces al repositorio público y al sitio en GitHub Pages;
  - preview visual propio sin reutilizar evidencias académicas.
- Los recursos visuales de proyectos quedan sujetos a criterio de valor: se usarán screenshots o demos solo cuando representen bien el trabajo y mejoren la experiencia.
- Se añadió el componente reutilizable `ProjectVisual` para previews de proyecto.
- `ProjectCard` ahora muestra resumen, aportes técnicos, flujo de arquitectura, stack, estado y acciones.
- Se rediseñó el layout: FleetPulse funciona como caso principal y Task Manager + Portafolio Digital como casos complementarios.
- Se añadieron ajustes responsive específicos para esta sección.
- La Fase 4 queda oficialmente completada tras la validación local y los refinamientos de contenido realizados por Daniel.
- Tras una segunda revisión visual se cambió la jerarquía: FleetPulse pasa a liderar la sección y Task Manager deja de apoyarse en una captura poco representativa de su fortaleza técnica.
- Se aplicó un ajuste final de densidad y legibilidad: FleetPulse se resumió a tres aportes clave, se eliminó texto redundante y se aumentó la legibilidad de arquitectura y chips tecnológicos en todas las tarjetas.
- Tras la validación móvil se redujo globalmente el padding vertical de las secciones en pantallas de hasta 680 px para evitar espacios excesivos entre el final de una sección y el inicio de la siguiente, manteniendo intacto el ritmo de escritorio.
- Validación final completada:
  - revisión visual aprobada en escritorio y móvil;
  - ritmo vertical móvil ajustado globalmente;
  - `npm run lint`: 0 warnings y 0 errores sobre 20 archivos;
  - `npm run build`: 34 módulos transformados y build de producción generado correctamente con Vite 8.3.3.
- La Fase 5 queda oficialmente completada.
- Producción continúa aislada en `gh-pages`.

## 2026-10-10 — Fase 4

- Se sustituyó el contenido provisional por el perfil profesional actualizado de 2026.
- Hero actualizado para reflejar el perfil de Software Engineer / Analista Programador con un posicionamiento basado en capacidades: backend, frontend, arquitectura e integración de sistemas.
- Perfil actualizado con enfoque en backend, frontend, microservicios, APIs, RabbitMQ, Keycloak, bases de datos, Docker, arquitectura e integración de sistemas.
- Experiencia profesional actualizada con:
  - ZTECH SOLUTIONS | Grupo ZM S.A. — Analista Programador, junio de 2024 a la actualidad.
  - Tigo Panamá — Analista Programador, 2023 a 2024.
  - Universidad Tecnológica de Panamá — soporte técnico, 2017.
- Las descripciones laborales se mantuvieron a nivel profesional sin exponer nombres internos de proyectos, sistemas o información sensible.
- Stack reorganizado por Backend & APIs, Frontend, Datos & integración y Seguridad & delivery.
- Formación actualizada con Licenciatura en Desarrollo de Software, Profesorado, Especialización y Maestría en Ingeniería de Software y Maestría en Docencia Superior en curso.
- Contacto actualizado para priorizar GitHub, LinkedIn y correo electrónico.
- Se eliminó del contenido visible cualquier texto interno sobre decisiones de privacidad; esas reglas permanecen únicamente documentadas en el roadmap.
- Se precisó el nombre del Profesorado de Segunda Enseñanza con especialización en Desarrollo de Software.
- Se reserva para la Fase 6 la incorporación de logos por tecnología y animaciones/microinteracciones adicionales, después de cerrar la presentación de proyectos en la Fase 5.
- Se mantiene fuera del sitio el número de teléfono, documentos personales y el antiguo CV descargable.
- La cuadrícula de formación se adaptó a cuatro bloques y la de contacto a tres canales.
- Queda pendiente la validación local de contenido, presentación y privacidad antes de cerrar oficialmente la fase.
- Producción continúa aislada en `gh-pages`.

## 2026-10-07 — Fase 3

- Se implementó el primer sistema visual real del nuevo portafolio.
- Se reemplazó la pantalla temporal de validación técnica por la estructura completa del sitio.
- Se añadió navegación sticky con indicador de sección activa y menú responsive.
- Se añadió una barra superior de progreso de lectura.
- Se implementó tema claro/oscuro con persistencia local y respeto por la preferencia del sistema.
- Se implementaron Hero, Sobre mí, Experiencia, Stack, Proyectos, Formación, Contacto y Footer.
- Se añadieron componentes reutilizables para navegación, encabezados de sección, iconografía, chips tecnológicos y tarjetas de proyecto.
- Se añadieron microinteracciones, estados hover/focus, fondos ambientales, cards y movimiento sutil.
- Se mantuvo soporte para `prefers-reduced-motion`.
- Se eliminó la pantalla temporal utilizada para validar la Fase 2.
- El contenido profesional mostrado todavía es provisional y será afinado en las Fases 4 y 5.
- Se aplicó un primer refinamiento visual tras revisión local:
  - mayor contraste y definición en modo claro;
  - reducción moderada del espaciado vertical entre secciones;
  - corrección del posicionamiento al navegar desde el menú para evitar espacios superiores excesivos;
  - segundo ajuste del ritmo vertical para acercar el inicio de cada sección al header sin perder respiración visual;
  - corrección definitiva del scroll por anclas: ahora se calcula la altura real del header y el padding superior de cada sección para posicionar el título visible cerca del menú fijo.
- Queda pendiente la validación local visual, responsive y funcional antes de cerrar oficialmente la fase.
- Validación visual y funcional confirmada por Daniel.
- La Fase 3 queda oficialmente completada.
- Producción continúa aislada en `gh-pages`.

## 2026-10-07 — Fase 2

- Se reemplazó la base Create React App por React + Vite.
- Se actualizó React a 19.3 y Vite a 8.3.
- Se eliminó la dependencia de `react-scripts`, `gh-pages`, Bootswatch, Bootstrap heredado, jQuery, Popper, Animate.css, React Router y archivos plantilla de CRA.
- Se eliminó el `package-lock.json` legacy para no conservar el árbol de 1478 dependencias antiguo; `npm install` generará el lock moderno durante la validación local.
- Se estableció una estructura base con `components`, `sections`, `data`, `styles` y `assets`.
- Se añadió Oxlint como análisis estático siguiendo la plantilla actual de Vite.
- Se añadió una pantalla temporal de validación técnica; no representa el diseño final del portafolio.
- Se definió el requisito de Node: `^20.19.0 || >=22.12.0`.
- Validación local completada correctamente:
  - `npm install`: 24 paquetes, 0 vulnerabilidades.
  - `npm run dev`: Vite levantado correctamente en `http://localhost:5173/`.
  - `npm run lint`: 0 warnings y 0 errores.
  - `npm run build`: build de producción generado correctamente en `dist/`.
- La Fase 2 queda oficialmente completada.
- Producción continúa aislada en la rama `gh-pages`.

## 2026-10-07 — Fase 1

- Se completó la Fase 1 — Preparación del repositorio.
- Se creó `legacy-portfolio-2022` para preservar el estado anterior del portafolio.
- Se creó `feature/portfolio-redesign-2026` como rama activa para construir la nueva versión.
- Ambas ramas se crearon desde el commit `b0d5d942313296d7dd78cfff292c3ca458d92d6c`.
- Se verificó que `gh-pages` continúa apuntando a `f6eec248277541457f900576f32552c3d00d9c4a`.
- No se modificó ningún archivo compilado ni contenido de la rama de producción.
- El siguiente paso es la Fase 2 — Modernización de la base técnica con React + Vite.

## 2026-10-06

- Se revisó el repositorio legacy y su estrategia de despliegue.
- Se confirmó que la implementación actual utiliza Create React App.
- Se confirmó el despliegue mediante `gh-pages -d build`.
- Se confirmaron las ramas `main` y `gh-pages`.
- Se identificaron contenido, metadata, dependencias y proyectos obsoletos.
- Se confirmó que se conservarán el repositorio y la URL pública actual de GitHub Pages.
- Se definió el roadmap inicial del rediseño.
- Se estableció como principio rector que el nuevo portafolio debe ser funcional, sin errores, visualmente sorprendente, agradable y con una experiencia de usuario cuidada.
