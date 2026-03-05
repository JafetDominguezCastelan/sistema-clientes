export default function Home() {

  let nombre = "Jafet";
  let edad = 21;
  let mensaje = "";
  let mensaje2 = "";

  if (edad >= 18) {
    mensaje = "mayor de edad";
  } else {
    mensaje = "menor de edad";
  }

  let numeros = [1, 2, 3, 4];

  let nombres = ["Juan", "Maria", "Pedro"];

  let personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Maria", edad: 22 },
    { nombre: "Pedro", edad: 15 }
  ];

  if (personas.length === 1) {
    mensaje2 = "hay una persona registrada";
  } else {
    mensaje2 = "hay " + personas.length + " personas registradas";
  }

  return (
    <div>

      <h1>
        Hola soy {nombre} y tengo {edad} años y soy {mensaje}
      </h1>

      <h2>Números doblados:</h2>
      <ul>
        {numeros.map((numero) => (
          <li key={numero}>{numero * 2}</li>
        ))}
      </ul>

      <h2>Nombres:</h2>
      <ul>
        {nombres.map((persona) => (
          <li key={persona}>Hola soy {persona}</li>
        ))}
      </ul>

      <h2>Personas:</h2>
      <ul>
        {personas.map((personasinfo) => (
          <li key={personasinfo.nombre}>
            {personasinfo.nombre + " es " + (personasinfo.edad >= 18 ? "mayor de edad" : "menor de edad")}
          </li>
        ))}
      </ul>

      <h1>{mensaje2}</h1>



      {personas
        .filter((persona) => persona.edad >= 18)
        .map((persona) => (
          <li key={persona.nombre}>
            {persona.nombre}
          </li>
      ))}

      <ul>
        {personas.map((persona) => (
          <li key={persona.nombre}>
            {persona.nombre} - {persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"}
          </li>
        ))}
      
      </ul>
    </div>
  );
}
