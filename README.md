# Informe: Evaluación 2 — Unidad 2

Una página web tipo informe creada con React + Vite y Tailwind CSS, que presenta el análisis de un caso real sobre ciberseguridad. El proyecto convierte una serie de archivos Markdown en secciones navegables y estilizadas.

**Resumen visual:** elegante, legible y optimizada para lectura en escritorio y dispositivos móviles.

---

## ¿Qué incluye este repositorio?

- Contenido académico estructurado en la carpeta `docs_lozlui/` (archivos `.md`): Resumen, Marco normativo, Delitos, Comparación regulatoria, Responsabilidades, Datos, Conclusiones y Prompts.
- Componentes React en `src/components/` que renderizan cada `.md` con estilo Tailwind.
- Un enrutamiento de secciones controlado por estado (botones de navegación) en `src/App.jsx`.
- Estilos globales en `src/index.css` con utilidades Tailwind y reglas personalizadas para tablas y contenido Markdown.

---

## Tecnologías usadas

- React
- Vite (dev server rápido y bundling)
- Tailwind CSS
- react-markdown + remark-gfm + rehype-raw (para renderizar Markdown)
- lucide-react (iconos)

---

## Cómo usarlo (desarrollo)

1. Instala dependencias:

```bash
cd informe_lozlui
npm install
```

2. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

3. Abre http://localhost:5173 en tu navegador.

Consejo: si usas PowerShell y ves un error sobre políticas de ejecución, ejecuta `npm.cmd run dev` o abre la terminal como administrador.

---

## Qué se mejoró en esta versión

- Navegación superior fija y compactable: la barra de navegación permanece visible al hacer scroll y se colapsa mostrando solo los botones para ahorrar espacio.
- Compatibilidad responsive mejorada para tablas: las tablas anchas hacen scroll interno en móviles en lugar de romper el layout.
- Estética de los prompts: cada prompt se renderiza como una tarjeta clara y separada para mejorar la lectura.
- Footer con botón de contacto interactivo y marca de copyright.

---

## Estructura de carpetas

- `docs_lozlui/` — archivos Markdown fuente.
- `src/components/` — componentes React por sección.
- `src/index.css` — estilos globales y utilidades Tailwind.
- `index.html` — plantilla HTML que carga Google Fonts y el bundle.

---

## Notas y recomendaciones

- Para pruebas en dispositivos móviles usa las herramientas de DevTools (Device Toolbar) o abre el servidor desde tu red local usando `npm run dev -- --host`.
- Si planeas publicar, revisa `package.json` y ajusta `build` y `preview` según tu hosting.

---

¿Quieres que genere una versión en PDF del informe o que agregue un tema oscuro opcional? Si quieres, puedo también resumir el contenido de cada `.md` y añadir enlaces rápidos en el README.
