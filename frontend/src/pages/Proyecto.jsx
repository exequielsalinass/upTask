import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";

function Proyecto() {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;

  return cargando ? (
    <div class="border border-sky-500 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2">Cargando</div>
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-between">
      <h1 className="font-black text-4xl">{nombre}</h1>
      <div className="flex items-center gap-2 text-gray-400 hover:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <Link to={`/proyectos/editar/${params.id}`} className='uppercase font-bold'>Editar</Link>
      </div>
    </div>
  );
}

export default Proyecto;
