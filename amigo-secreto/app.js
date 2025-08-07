// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []; // creamos un array para agregar los nombres aqui dentro

// para evitar que se repitan nombres que ya salieron haremos otro array para los nombres restantes
let amigosPorSortear = []; // se guardaran los nombres que aun no han salido


const inputNombre = document.querySelector("#amigo");
const contenedorLista = document.querySelector("#listaAmigos");
const contenedorResultado = document.querySelector("#resultado");

// funcion para recibir los nombres de amigos
function agregarAmigo() {
  const nombre = inputNombre.value.trim(); // OJO: "trim" elimina los espacios adelante y atras " ana "

  if (nombre === "") {
    alert("Por favor ingrese un nombre válido."); // para tener en cuenta que no reciba nombres vacios
    return;
  }

  listaAmigos.push(nombre);
  amigosPorSortear.push(nombre);
  mostrarLista();
  inputNombre.value = "";
}

// funcion q nos muestra todos los nombres agregados
function mostrarLista() {
  contenedorLista.innerHTML = "";

  listaAmigos.forEach(function(amigo) {
    const li = document.createElement("li");
    li.textContent = amigo;
    contenedorLista.appendChild(li);
  });
}

// funcion para sortear un amigo que no se repita
function sortearAmigo() {
  contenedorResultado.innerHTML = ""; // limpia nuestros resultados anteriores

  if (amigosPorSortear.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Se han sorteado todos los nombres agregados";
    contenedorResultado.appendChild(li);
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigosPorSortear.length);
  const amigoElegido = amigosPorSortear[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = amigoElegido;
  contenedorResultado.appendChild(li);

  amigosPorSortear.splice(indiceAleatorio, 1);
}