import { formatearFecha } from '../helpers/fecha.js'

function Tarea({ tarea }) {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className=" mb-2 text-xl">{nombre}</p>
        <p className=" mb-2 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className=" mb-2 text-xl">{formatearFecha(fechaEntrega)}</p>
        <p className=" mb-2 text-gray-600">Prioridad: {prioridad}</p>
      </div>

      <div className="flex gap-2">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer">
          Editar
        </button>

        {estado ? (
          <button className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer">
            Completa
          </button>
        ) : (
          <button className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer">
            Incompleta
          </button>
        )}

        <button className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-3 text-white uppercase font-bold text-sm rounded-lg cursor-pointer">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Tarea;
