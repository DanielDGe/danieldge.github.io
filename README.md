# Portafolio profesional — Daniel García

Rediseño 2026 del portafolio profesional publicado en:

https://danieldge.github.io/

## Estado

El proyecto se encuentra en desarrollo sobre la rama:

`feature/portfolio-redesign-2026`

La versión pública anterior permanece aislada en `gh-pages` mientras se construye y valida la nueva versión.

## Stack base

- React 19
- Vite 8
- Oxlint
- CSS moderno sin Bootstrap ni jQuery

## Requisitos

- Node.js `^20.19.0 || >=22.12.0`
- npm compatible con la versión instalada de Node

Comprueba tu versión con:

```bash
node -v
npm -v
```

## Desarrollo local

Después de descargar los cambios de la rama:

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente:

`http://localhost:5173/`

## Validaciones

```bash
npm run lint
npm run build
npm run preview
```

## Nota sobre package-lock.json

El lockfile antiguo de Create React App se eliminó deliberadamente durante la migración. La primera ejecución de `npm install` genera un nuevo `package-lock.json` correspondiente a la base Vite.

## Roadmap

La fuente de verdad del proyecto está en [ROADMAP.md](./ROADMAP.md).
