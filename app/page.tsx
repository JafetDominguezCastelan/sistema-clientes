  export default function Home() {

    let nombre = "Jafet";
    let edad = 21;
    let mensaje = "";

    if (edad >= 18) {
      mensaje = "mayor de edad";
    } else {
      mensaje = "menor de edad";
    }

    let numeros = [1, 2, 3, 4];

    let nombres = ["Juan", "Maria", "Pedro"];

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
          {nombres.map((nombre ) => (
            <li key={nombre}>Hola soy {nombre}</li>
          ) )}
        </ul>

      </div>
    );
  }