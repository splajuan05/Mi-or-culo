// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://travelguide-marrakech.com/wp-content/uploads/2020/03/Marrakech-Holiday.jpg",
  "https://cdn-0.thegoodlifewithiq.com/wp-content/uploads/2019/10/Bali-Ubud-51.jpg",
  "https://static.wixstatic.com/media/1078b4_e6eab32c…o/1078b4_e6eab32c64934ae1931363c2fcc32540~mv2.png",
  "	https://shewandersabroad.com/wp-content/uploads/2024/11/Movich-Hotel-Cartagena-1b.jpg",
  "https://www.la-provenza.es/wp-content/uploads/2022/07/montecarlo-monaco-costa.jpg",
  "https://media.digitalnomads.world/wp-content/uploads/2021/03/20120553/tallinn-digital-nomads.jpg",
  "	https://www.santorini-secret.com/wp-content/uploads/2022/09/Santorini_Header.jpg",
  "https://stories.weroad.es/wp-content/uploads/2019/10/Giordania-9.jpg",
  "https://www.discovertravelnews.com/wp-content/uploads/2016/11/reikiavik_1.jpg",
  "https://www.chinawestdrive.com/wp-content/uploads/2024/08/popular-destinations-lhasa-cover.jpg",
  "https://www.destinazioneasia.com/media/images/Chiang%20Mai%203_1.png",
  "https://www.tanzaniatourism.com/images/uploads/Zanzibar_Island_Stone_Town_01.jpg",
  
]

const titulos = [
  "Aries - Marrakech, Marruecos",
  "Tauro – Ubud, Indonesia",
  "Géminis – Hanoi, Vietnam",
  "Cáncer – Cartagena de Indias, Colombia",
  "Leo – Montecarlo, Mónaco",
  "Virgo – Tallin, Estonia",
  "Libra – Santorini, Grecia",
  "Escorpio – Petra, Jordania",
  "Sagitario – Reikiavik, Islandia",
  "Capricornio – Lhasa, Tíbet",
  "Acuario – Chiang Mai, Tailandia",
  "Piscis – Zanzíbar, Tanzania",
];

const frases = [
  "Eres fuego y movimiento, vibras entre mercados caóticos, especias intensas y colores vivos que nunca dejan descansar a la mirada.",

"Respiras calma entre arrozales y templos sagrados, te alimentas de aromas, masajes y la tierra fértil que todo lo nutre.",

"Rápida y ruidosa, llena de voces y motos que se cruzan, tu encanto está en el caos que se transforma en mil historias al mismo tiempo.",

"Eres cálida y nostálgica, guardas recuerdos en tus murallas y acaricias con brisa marina cada rincón pintado de color.",

"Brillas con lujo y exceso, prefieres el oro, las luces y los escenarios donde ser visto es parte de tu esencia.",

"Ordenada y detallista, escondes tu belleza medieval en calles limpias y discretas, observas más de lo que muestras.",

"Eres equilibrio entre el azul profundo y el blanco puro, te mueves al ritmo del romance y la estética perfecta.",

"Guardas secretos en la roca, misteriosa y magnética, revelas tu belleza solo a quienes se atreven a entrar en tus sombras.",

"Eres aventura y naturaleza indomable, brillas con auroras y mares helados donde el viaje nunca termina.",

"Altiva y espiritual, habitas en la cima del mundo, tu fuerza es disciplina, tradición y la calma de las montañas.",

"Alternativa y diversa, respiras entre templos, mercados y comunidades creativas, te reinventas en cada esquina.",

"Eres isla soñadora bañada por aguas turquesa, te pierdes entre especias, arenas suaves y la calma infinita del mar.",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();