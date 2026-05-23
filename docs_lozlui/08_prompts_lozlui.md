"Dame ejemplos de casos reales en todo el mundo sobre ciberseguridad: incidentes nacionales o internacionales (por ejemplo, brechas de datos, ransomware a empresas, fraudes informáticos, filtraciones masivas). Además añade un link para buscar la información, debe ser una fuente confiable"
Este prompt se utilizó en gemini al principio del proyecto para elegir el caso a analizar. La IA proporcionó 4 casos distintos donde el caso de Yahoo fue el seleccionado.

"Extrae la información de este link: https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html y haz un resumen ejecutivo del caso explicando: que pasó, cuando pasó, quienes participaron y cual fue el impacto que tuvo, genera la información en formato markdown"
Este prompt fue utilizado en gemini para realizar el primer resumen del caso. En relación a la respuesta de la IA, se realizaron cambios en algunos titulos y se acortó la información para que la información fuera más concisa.

"Dame más información sobre este caso y dame los links para leer la información"
Este prompt fue utilizado en gemini para investigar el caso más a profundidad.

"En relación con el caso, analiza 4 marcos normativos que apliquen, explica por que y además justifica con referencia textual a un hecho concreto del caso con la información proporcionada, la información debe ser sacada de fuentes confiables y reales con link incluido"
Este prompt fue utilizado en gemini para completar la información sobre los marcos normativos y en complemento se utilizó otro prompt "¿El marco GDPR aplica en este caso?". De acuerdo a la respuesta de la IA se cambiaron algunas palabras y se acortaron textos ya que la respuesta no correspondía tanto a lo pedido. Por lo demás se acepto la respuesta debido al desconocimiento de las leyes internacionales.

"Se sabe si la información filtrada fue revelada públicamente o se hizo algún uso ilegal de esta información o de que manera fue extraída, dame los links de donde saques la información"
Este prompt fue utilizado en gemini para investigar a profundidad y analizar el caso para determinar los delitos que cometieron los ciberdelincuentes, en base a fuentes confiables.

"Que articulos aplican a este caso de la ley 21459 de delitos informaticos en chile y mapea cada acción del atacante del atacante al articulo correspondiente. Algunos articulos que relacioné fueron el 2 y el 7."
Este prompt fue utilizado en gemini para mapear las acciones de los ciberdelincuentes en la sección de delitos, en base a una suposición con la información obtenida, además se le propocionó a la IA algunos articulos analizados manualmmente de acuerdo a la documentación académica. A la respuesta proporcionada por la IA se eliminaron algunos párrafos que no correspondían a lo pedido, además la información se modificó para que correspondiera con el informe.

"Haz una tabla comparativa en formato markdown con 3 marcos regulatorios por industria y 3 ejes (p. ej. alcance, sanción, sujeto regulado, jurisdicción). Incluye columna explícita de aplicabilidad al caso."
Este prompt fue utilizado en gemini para generar el cuadro comparativo en relación a la información y se aceptó todo lo proporcionado.

"Identifica 3 actores (p. ej. atacante, empresa, ejecutivos, terceros) y, para cada uno,
distingue 2 tipos de responsabilidad (penal, civil o administrativa). Cita artículo o
norma para cada atribución." 
Este prompt fue i¿utilizado en gemini para la sección de responsabilidades, se aceptó la respuesta y fueron cambiadas algunas palabras.

"Según los datos comprometidos en el caso, distingue datos personales de datos sensibles. Analiza 3 derechos ARCO afectados (de los 4: Acceso, Rectificación, Cancelación, Oposición) con cita textual de la Ley 19.628."
Este prompt fue utilizado en gemini para la sección de datos, se modificaron algunas partes de la respuesta para que corresponda con el informe y se estructuró la información de forma concisa.

"Para concluir, dame algunas recomendaciones de seguridad"
Este prompt fue utilizado en gemini para agregar recomendaciones de seguridad en la conclusión para complementar, solo se modificaron algunos párrafos.


prompt chat copilot github para modificacion de aplicación web con visuales: 
"Modifica el archivo App.jsx con la información de la carpeta docs_lozlui para hacer una página web con react vite tipo informe para los visuales utiliza tailwind"
Este prompt se utilizo en el chat copilot github integrado en el VS Code para cambiar el código 


prompt gemini para leyes de ciberseguridad: En relación con normas de ciberseguridad internacionales, que leyes y regulaciones se pueden aplicar en este caso

prompt para marcos normativos: En relación con el caso, que marcos normativos nacionales e internacionales aplican, explica por que y además justifica con referencia textual a un hecho concreto del caso con la información proporcionada, la información debe ser sacada de fuentes confiables y reales con link incluido

prompt para delitos: Que articulos aplican a este caso de la ley 21459 de delitos informaticos en chile y mapea cada acción del atacante del atacante al articulo correspondiente. Algunos articulos que relacione fueron el 2 y el 7.

prompt para cuadro comparativo: Haz una tabla comparativa en formato markdown con 3 marcos regulatorios por industria y 3 ejes (p. ej. alcance, sanción, sujeto regulado, jurisdicción). Incluye columna explícita de aplicabilidad al caso.

Crea un componente react con jsx para cada archivo .md en la carpeta docs_lozlui llamados de la siguiente forma: Resumen.jsx, Marco.jsx, Delitos.jsx, Comparacion.jsx, Responsabilidades.jsx, Datos.jsx, Conclusiones.jsx, Prompts.jsx. Guarda los archivos jsx en una carpeta llamada components en src. Usa tailwind css para los estilos y un icono de lucide react para el titulo

Ahora importa esos archivos en el archivo src/App.jsx para que se puedan visualizar en la pagina

La aplicación debe leer los archivos .md, deben ser importados correctamente y el contenido debe estar estilizado

“En src/components/MarkdownRenderer.jsx aparece el error [plugin:vite:import-analysis] Failed to resolve import "remark-gfm" from "src/components/MarkdownRenderer.jsx". Does the file exist?. Revisa el archivo y corrige manteniendo la estructura y los estilos Tailwind actuales

Los titulos no se ven en formato markdown y el cuadro comparativo tampoco tiene lineas, arreglalo 

Quiero que al correr la página se visualicen los saltos de linea correctamente luego de los titulos y que el texto no se vea tan pegado sin usar tanto <br> para hacer los saltos