import { useContext } from "react";
import ProyectoContext from "../context/ProyectosProvider";

function useProyectos() {
  return useContext(ProyectoContext)
}

export default useProyectos