import React from 'react'
import './index.css'

const resumen = `Resumen Ejecutivo: Hackeo Masivo a Yahoo (3 Mil Millones de Usuarios)

Basado en el reporte de The New York Times (3 de octubre de 2017)

Yahoo sufrió una brecha de seguridad masiva en la que ciberdelincuentes extrajeron información personal de sus bases de datos. Los datos robados incluían nombres, direcciones de correo electrónico, números de teléfono, fechas de nacimiento, contraseñas (cifradas/hash) y, en algunos casos, preguntas y respuestas de seguridad. El ataque original ocurrió en agosto de 2013 y la revelación final en 2017 indicó que fueron 3.000 millones de cuentas afectadas.`

const marco = `Marco legal de la ciberseguridad

Según un análisis aplicado al marco legal chileno se identifica el concepto de acceso ilícito (art. 2 de ley 21459). Además, en este caso no se cumplió con principios de GDPR relativos a integridad y confidencialidad.`

const prompts = `Prompts usados y fuentes:
- Fuente: https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html
- Prompt: Extrae la información de este link y haz un resumen ejecutivo del caso.`

function NavItem({ href, children }) {
  return (
    <a href={href} className="block py-2 px-3 rounded hover:bg-slate-100">
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Informe: Caso Yahoo - Resumen</h1>
          <nav className="text-sm text-slate-600">Generado con React + Vite + Tailwind</nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Contenido</h2>
          <nav className="text-sm">
            <NavItem href="#resumen">Resumen Ejecutivo</NavItem>
            <NavItem href="#marco">Marco Legal</NavItem>
            <NavItem href="#delitos">Delitos Identificados</NavItem>
            <NavItem href="#comparacion">Comparación</NavItem>
            <NavItem href="#responsabilidades">Responsabilidades</NavItem>
            <NavItem href="#datos">Datos</NavItem>
            <NavItem href="#conclusiones">Conclusiones</NavItem>
            <NavItem href="#prompts">Prompts / Fuentes</NavItem>
          </nav>
        </aside>

        <main className="md:col-span-3">
          <section id="resumen" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Resumen Ejecutivo</h2>
            <p className="text-sm text-slate-600 mb-4">Caso: Hackeo masivo a Yahoo — ~3.000 millones de cuentas afectadas.</p>
            <div className="prose max-w-none">
              {resumen.split('\n\n').map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
          </section>

          <section id="marco" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Marco Legal</h2>
            <div className="prose max-w-none">
              {marco.split('\n\n').map((block, i) => (
                <p key={i}>{block}</p>
              ))}
            </div>
          </section>

          <section id="delitos" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Delitos Identificados</h2>
            <p className="text-slate-600">(Sección vacía en los documentos originales — puede completarse con análisis forense/legal.)</p>
          </section>

          <section id="comparacion" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Comparación</h2>
            <p className="text-slate-600">(Sección vacía — compare con otros incidentes similares si se requiere.)</p>
          </section>

          <section id="responsabilidades" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Responsabilidades</h2>
            <p className="text-slate-600">(Sección vacía — asignar responsabilidades técnico-legales según investigación.)</p>
          </section>

          <section id="datos" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Datos</h2>
            <p className="text-slate-600">(Sección vacía — aquí podrían incluirse tablas o estadísticas extraídas de las fuentes.)</p>
          </section>

          <section id="conclusiones" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Conclusiones</h2>
            <p className="text-slate-600">(Sección vacía — resumir lecciones aprendidas y recomendaciones.)</p>
          </section>

          <section id="prompts" className="mb-8 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Prompts y Fuentes</h2>
            <div className="prose max-w-none">
              {prompts.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-sm text-slate-500">Documento generado desde los archivos en la carpeta <span className="font-medium">docs_lozlui</span>.</div>
      </footer>
    </div>
  )
}
