"use client";

import { useState } from "react";

type Cliente = {
  nombre: string;
  edad: string;
};

export default function Home() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function agregarCliente() {

    const nuevoCliente: Cliente = {
      nombre: nombre,
      edad: edad
    };

    setClientes([...clientes, nuevoCliente]);

    setNombre("");
    setEdad("");
  }

  function eliminarCliente(index: number) {

    const nuevaLista = clientes.filter((_, i) => i !== index);

    setClientes(nuevaLista);
  }

  return (
    <div>

      <h1>Sistema de Clientes</h1>

      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Edad del cliente"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <br /><br />

      <button onClick={agregarCliente}>Agregar cliente</button>

      <h2>Clientes registrados</h2>

      <p>Total de clientes: {clientes.length}</p>

      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>
            {cliente.nombre} - {cliente.edad} años
            {" "}
            <button onClick={() => eliminarCliente(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}