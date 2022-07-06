

function NuevoPassword() {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Reestablece tu contraseña y administra tus{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10 ">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Nueva Contraseña:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Guardar nueva contraseña"
          className="mb-5 bg-sky-700 w-full py-3 text-white uppercase border rounded-md hover:bg-sky-800 font-bold hover:cursor-pointer transition-colors"
        />
      </form>
    </>
  )
}

export default NuevoPassword