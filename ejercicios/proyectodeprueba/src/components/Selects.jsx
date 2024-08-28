import { useState } from "react";
import { SelectList } from "./SelectList"

export const Selects = () => { 

  const [departamentos, setDepartamentos] = useState("");
  const [ciudades, setCiudades] = useState("");
  const [informacion, setInformacion] = useState("");

  console.log('Departamento ID', departamentos)
  console.log('Ciudades ID', ciudades)
  console.log('Informacion ID', informacion)

   return (
      <div className="container">
      <SelectList
        title="Departamentos"
        url= {'https://api-colombia.com/api/v1/Department' }
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      <SelectList
        title="Ciudades"
        url={'https://api-colombia.com/api/v1/City' }
        manejadorCambio={(event) => {
          setCiudades(event.target.value);
        }}
      />
      <SelectList
        title="Informacion"
        url={'https://api-colombia.com/api/v1/City/32'}
        manejadorCambio={(event) => {
          setInformacion(event.target.value);
        }}
      />
      {/* // Imprimir info del municipio */}
      
    </div>
   );
};