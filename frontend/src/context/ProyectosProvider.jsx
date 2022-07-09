import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const ProyectoContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState([]);

  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);

    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const submitProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Contente-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/proyectos", proyecto, config);
      console.log(data);

      setAlerta({
        msg: "Proyecto Creado Correctamente",
        error: false,
      });

      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta,
        submitProyecto,
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectoContext;
