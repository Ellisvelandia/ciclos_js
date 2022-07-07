// En el reino del trebol se busca al rey amago y dentro de los siguientes dias , se probaran condiciones para hallar al proximo monarca

var historia =
  "El reino es una región montañosa. está dividido en tres regiones: la región Olvidada, la Común y la Noble.A pesar de que algunos campesinos fueron aceptados en los Caballeros Mágicos,el deseo sus magos es llegar a ser el rey mago.";
var magos = historia.split("");
var fin = "";

for (i in magos) {
  if (magos[i] == "z") {
    break;
  } else {
    fin += magos[i];
  }
}
console.log(fin);

for (i in magos) {
  if (magos[i] == "z") {
    continue;
  } else {
    fin += magos[i];
  }
}
console.log(fin);

// incontables magos se señalan y son tratados como numeros ante la nobleza

for (let i = 0; i < 1; i++) {
  if (i * 2 == 0) {
    console.log("estas a un paso de ser el rey mago");
  } else 1 + 2 == 0;
  console.log("nunca sera el rey mago");
}

// ahora solo quedan 60 dias, es una cuenta regresiva para que el reino del trebol , decida a su proximo soberano

var tiempo = 60;

while (tiempo > 0) {
console.log(tiempo);
tiempo--;
}

console.log("no queda tiempo, quien sera el proximo rey mago");

// Esta historia continuara!¿?
