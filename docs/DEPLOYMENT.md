# Desarrollo y despliegue

Esta guía corresponde al portafolio de [Daniel García](https://danieldge.github.io/) alojado en `DanielDGe/danieldge.github.io`.

## Flujo de trabajo

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/nombre-del-cambio
npm ci
npm run dev
```

Realiza los cambios en una rama de trabajo. Antes de abrir un pull request:

```bash
npm run lint
npm run build
npm run preview
```

Comprueba visualmente los cambios en escritorio y móvil. Sube la rama y abre un PR hacia `main`, revisa las comprobaciones automáticas y realiza el merge solo cuando sean satisfactorias.

## Despliegue automático

Workflow: `.github/workflows/deploy-pages.yml`.

| Evento | Validación | Publicación |
| --- | --- | --- |
| PR hacia `main` | `npm ci`, lint y build | No |
| Push a `main` | `npm ci`, lint y build | Sí |
| Ejecución manual sobre `main` | `npm ci`, lint y build | Sí |
| Ejecución manual sobre otra rama | `npm ci`, lint y build | No |

El workflow genera `public/social-preview.png` durante `prebuild`, prepara `dist/`, sube el artefacto de Pages y lo publica con los permisos `pages: write` e `id-token: write`. GitHub Pages debe estar configurado en **Settings → Pages → Build and deployment → Source: GitHub Actions**. La URL estable es https://danieldge.github.io/.

`package-lock.json` se mantiene versionado para que `npm ci` sea determinista. No se requiere token de acceso personal ni secreto personalizado para el despliegue habitual.

## Comprobaciones en producción

Después de un cambio publicado:

1. Confirma que **Actions → Validate and deploy portfolio** terminó con `success` tanto en `build` como en `deploy`.
2. Abre https://danieldge.github.io/ y realiza una recarga forzada. Revisa tema, navegación por anclas, estilos y funcionalidad responsive.
3. Comprueba los enlaces públicos de GitHub, LinkedIn, correo y proyectos.
4. Comprueba `/favicon.svg`, `/social-preview.png`, `/robots.txt` y `/sitemap.xml` en la URL pública.
5. Si cambió SEO o la imagen social, valida la vista previa en WhatsApp y LinkedIn. LinkedIn puede conservar caché; utiliza su Post Inspector para solicitar nueva lectura de metadatos.

Este portafolio es una sola página basada en anclas, no en rutas de React Router; no necesita reglas adicionales de redirección de rutas para sus secciones.

## Recuperación ante un despliegue defectuoso

- Si falla un job, **no des por válida la publicación**. Inspecciona los logs de Actions.
- Si un cambio ya integrado rompe producción, revierte el commit o el merge problemático en `main` mediante un nuevo commit/PR, valida lint y build y vuelve a desplegar. Así `main` y lo publicado siguen sincronizados.
- Para volver a ejecutar el workflow sin cambios, utiliza `Actions → Validate and deploy portfolio → Run workflow`, seleccionando **`main`**.
- No restaures el sitio antiguo cambiando accidentalmente la fuente de Pages a la rama `gh-pages`. Esa rama es histórica, no una segunda vía activa de publicación.

## Política de ramas históricas

- **Conservar `legacy-portfolio-2022`**: respaldo del sitio anterior.
- **No usar `gh-pages` para desplegar**: GitHub Pages está configurado para GitHub Actions.
- **Eliminar `gh-pages` solo después de verificar estabilidad y, si se decide retirarla, revisar previamente que no quede ningún flujo externo que dependa de esa rama.** La eliminación se realiza en GitHub → Settings → Branches (o en la lista de ramas de GitHub) y no forma parte del workflow.
- La rama histórica `feature/portfolio-redesign-2026` puede conservarse como referencia sin intervenir en producción.

## Archivos generados

- `public/social-preview.svg`: fuente de la imagen social, versionada.
- `public/social-preview.png`: generado por script, ignorado en Git.
- `dist/`: build de producción, ignorado en Git.

No subas archivos `.env`, credenciales ni información privada al repositorio público.
