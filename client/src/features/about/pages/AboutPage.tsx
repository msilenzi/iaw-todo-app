import Stack from 'react-bootstrap/Stack'

export default function AboutPage() {
  return (
    <>
      <h2 className="mb-5">Acerca de la Aplicación de "Todos"</h2>

      <Stack gap={4}>
        <section>
          <h3 className="mb-3">¿Qué es esta aplicación?</h3>
          <p>
            Esta es una aplicación básica de gestión de tareas (también conocida
            como "todos"), diseñada para ayudarte a organizar tus actividades.
            Con esta aplicación, puedes agregar tareas, ver una lista de todas
            ellas, marcarlas como completadas o eliminarlas si ya no son
            necesarias.
          </p>
        </section>

        <section>
          <h3 className="mb-3">¿Por qué usar una aplicación de "todos"?</h3>
          <p>
            Las aplicaciones de "todos" son herramientas sencillas pero
            poderosas que permiten:
          </p>
          <ul>
            <li>Mantener un seguimiento claro de las tareas pendientes.</li>
            <li>Aumentar la productividad al tener un plan de acción claro.</li>
            <li>
              Priorizar tareas importantes y delegar otras menos urgentes.
            </li>
            <li>Organizar tanto proyectos personales como profesionales.</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3">¿Qué podés hacer con esta aplicación?</h3>
          <ol>
            <li>
              <strong>Agregar nuevas tareas:</strong> Puedes crear un nuevo
              "todo" con solo escribir la descripción de la tarea y añadirla a
              la lista.
            </li>
            <li>
              <strong>Marcar tareas como completadas:</strong> Una vez que
              termines una tarea, puedes marcarla como completada para llevar un
              registro
            </li>
            de lo que ya has hecho.
            <li>
              <strong>Eliminar tareas:</strong> Si ya no necesitas realizar una
              tarea, puedes eliminarla fácilmente.
            </li>
          </ol>
        </section>
      </Stack>
    </>
  )
}
