import Image from "next/image";

export default function Home() {

  let nombre = "Jafet";
  let edad = 21;
  let mensaje = "";
  
  if (edad >= 18) {
    mensaje = " mayor de edad";
  } else {
    mensaje = " menor de edad";
  }
  return (
  <div>
    <h1>Hola soy {nombre} y tengo {edad} años y soy {mensaje}</h1>
    <p>Este es mi primer proyecto con Next.js</p>
  </div>
);

}
