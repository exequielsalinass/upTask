import { formatearFecha } from "../helpers/fecha.js";
import useProyectos from "../hooks/useProyectos.jsx";
import useAdmin from "../hooks/useAdmin.jsx";

function Tarea({ tarea }) {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;

  const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } =
    useProyectos();

  const admin = useAdmin();

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className=" mb-2 text-xl">{nombre}</p>
        <p className=" mb-2 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className=" mb-2 text-sm uppercase">
          {formatearFecha(fechaEntrega)}
        </p>
        <p className=" mb-2 text-gray-600">Prioridad: {prioridad}</p>
      </div>

      <div className="flex gap-2">
        {admin && (
          <button
            onClick={() => handleModalEditarTarea(tarea)}
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer"
          >
            Editar
          </button>
        )}

        <button
            onClick={() => completarTarea(_id)}
            className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer`}
          >
            {estado ? 'Completa' : 'Incompleta'}
        </button>

        {admin && (
          <button
            className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer"
            onClick={() => handleModalEliminarTarea(tarea)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

export default Tarea;
