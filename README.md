# Portafolio profesional · Daniel García

Portafolio personal de ingeniería de software: experiencia, arquitectura e integración de sistemas, stack tecnológico, proyectos y formación académica.

**Sitio en producción:** https://danieldge.github.io/

## Tecnologías

- React 19 y Vite 8
- JavaScript y CSS propio, sin frameworks de estilos ni librerías de animación
- Oxlint para análisis estático
- Node.js y Sharp para generar la imagen Open Graph
- GitHub Actions y GitHub Pages para CI/CD

## Requisitos

- Node.js `^20.19.0 || >=22.12.0` (CI utiliza Node.js 22).
- npm compatible con tu versión de Node.js.

## Desarrollo local

```bash
git clone https://github.com/DanielDGe/danieldge.github.io.git
cd danieldge.github.io
npm ci
npm run dev
```

Vite suele abrir en `http://localhost:5173/`.

## Validación y compilación

```bash
npm run lint
npm run build
npm run preview
```

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia Vite y genera la imagen social mediante `predev`. |
| `npm run lint` | Analiza el código fuente con Oxlint. |
| `npm run build` | Genera la imagen social mediante `prebuild` y construye `dist/`. |
| `npm run preview` | Sirve el build generado para una comprobación local. |

La fuente editable de la imagen social es `public/social-preview.svg`; `scripts/generate-social-preview.mjs` produce `public/social-preview.png` (1200 × 630). El PNG generado y `dist/` están ignorados por Git; el workflow los genera en cada despliegue. **No necesitas subirlos manualmente.**

## Estructura

```text
.github/workflows/     Validación y despliegue a Pages
public/                Favicon, manifest, robots, sitemap y social preview SVG
scripts/               Generación de imagen social PNG
src/
  components/          Componentes reutilizables
  data/                Contenido público del portafolio
  hooks/               Tema, scroll y movimiento
  sections/            Secciones del sitio
  styles/              Sistema visual responsive
  utils/               Funciones compartidas
index.html             Metadata SEO, Open Graph y punto de entrada
vite.config.js         Configuración de Vite para dominio raíz
```

## Publicación

El sitio se publica automáticamente desde `main` con el workflow `.github/workflows/deploy-pages.yml`:

1. Los pull requests hacia `main` ejecutan instalación reproducible (`npm ci`), lint y build, sin desplegar.
2. Un push o una ejecución manual **sobre `main`** realiza los mismos controles y publica `dist/` mediante GitHub Actions.
3. GitHub Pages debe conservar `Settings → Pages → Source: GitHub Actions`.

El repositorio es un sitio de usuario: `danieldge.github.io`; por eso Vite utiliza `base: '/'`.

Consulta [la guía de desarrollo, despliegue y recuperación](./docs/DEPLOYMENT.md) para el proceso completo, comprobaciones post-publicación y rollback.

## Historial y continuidad

- `main`: código del portafolio actual, fuente de producción.
- `legacy-portfolio-2022`: respaldo histórico del portafolio anterior; **no eliminar**.
- `gh-pages`: antigua rama de despliegue, obsoleta desde el paso a Actions; conservar hasta finalizar la limpieza segura.
- `feature/portfolio-redesign-2026`: rama histórica del rediseño terminado.

La evolución y los criterios de aceptación están documentados en [ROADMAP.md](./ROADMAP.md).
