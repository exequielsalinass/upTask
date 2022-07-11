import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";

function Proyectos() {
  const { proyectos } = useProyectos();

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>

      <div className="bg-white shadow rounded-lg">
        {proyectos.length ? (
          proyectos.map( proyecto => (
              <PreviewProyecto
                key={proyecto._id}
                proyecto={proyecto}
              />
          ))
        ) : (
          <p className="mt-5 text-center text-gray-600 uppercase p-5">
            No Hay Proyectos
          </p>
        )}
      </div>
    </>
  );
}

export default Proyectos;
