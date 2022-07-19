function Anime(ni, titulo, genero, capitulos, anios, acabado){
    this.ni=ni;
    this.genero=genero;
    this.capitulos=capitulos;
    this.anios=anios;
    this.acabado=acabado;
}

let anima={};

function creatAnime(){
    anima.push(Anime())
}
const shokugeki = new Anima()


const animes = [{
    ni: "0",
    titulo: "Ousama Ranking",
    genero: "fantasia",
    capitulos: 24,
    anio: 2022,
    acabado: "no"
},
{
    ni: "1",
    titulo: "Mushoku Tensei",
    genero: "fantasia",
    capitulos: 23,
    anio: 2021,
    acabado: "no"
},
{
    ni: "2",
    titulo: "Fullmetal Alchimist: Brotherhood",
    genero: "fantasia",
    capitulos: 64,
    anio: 2009,
    acabado: "si"
},
{
    ni: "3",
    titulo: "Bleach",
    genero: "accion",
    capitulos: 366,
    anio: 2016,
    acabado: "si"
},
{
    ni: "4",
    titulo: "One Piece",
    genero: "aventura",
    capitulos: 1000,
    anio: 1997,
    acabado: "no"
},
{
    ni: "5",
    titulo: "Toradora!",
    genero: "romance",
    capitulos: 26,
    anio: 2008,
    acabado: "si"
},
{
    ni: "6",
    titulo: "Kaguya-sama",
    genero: "romance",
    capitulos: 36,
    anio: 2021,
    acabado: "no"
},
{
    ni: "7",
    titulo: "Asessination Classroom",
    genero: "comedia",
    capitulos: 24,
    anio: 2015,
    acabado: "si"
},
{
    ni: "8",
    titulo: "Konosuba",
    genero: "comedia",
    capitulos: 26,
    anio: 2011,
    acabado: "no"
},
{
    ni: "9",
    titulo: "Boku no hero Academia",
    genero: "accion",
    capitulos: 113,
    anio: 2016,
    acabado: "no"
},
{
    ni: "10",
    titulo: "HunterXHunter",
    genero: "aventura",
    capitulos: 140,
    anio: 2011,
    acabado: "si"
},
];


let generoElegido = document.getElementById("P1");
let acabadoAni = document.getElementById("P2");
let capElegido = document.getElementById("P3");
generoElegido.oninput = () => {
if (!isNaN(generoElegido.value)) {
    generoElegido.style.color = "red";
} else {
    generoElegido.style.color = "black";
}
}

acabadoAni.oninput = () => {
if (!isNaN(acabadoAni.value)) {
    acabadoAni.style.color = "red";
} else {
    acabadoAni.style.color = "black";
}
}



let botonJugar = document.getElementById("jugar");
botonJugar.addEventListener("click", empezarJuego);

function empezarJuego() {
let generoElegido = document.getElementById("P1").value.toLowerCase();
let acabadoAni = document.getElementById("P2").value.toLowerCase();
let capElegido = document.getElementById("P3").value.toLowerCase();
if (generoElegido == "" || acabadoAni == "" || capElegido == "") {
    alert("Favor de contestar bien todas las preguntas")
} else {
    const seleccion = animes.filter(anime => {
        return anime.genero == generoElegido && anime.acabado == acabadoAni && anime.capitulos <= capElegido
    });
    let resultadofinal = document.getElementById("resultadoFinal")
    resultadofinal.innerText = ("El anime que se te recomienda seria: " + seleccion[0].titulo)
    localStorage.setItem("anterior", JSON.stringify(seleccion[0].titulo))
    const resultadoFinalAleatorio = JSON.parse(localStorage.getItem("seleccion[0].titulo"))
}
}


let botonAleatorio = document.getElementById("aleatorio");
botonAleatorio.addEventListener("click", empezarAleatorio);

function empezarAleatorio() {
resultado = Math.round(Math.random() * 20)
const animeRandom = animes.filter(anime => {
    return anime.ni == resultado
});
localStorage.setItem("anterior", JSON.stringify(animes[resultado].titulo))
const resultadoFinalAleatorio = JSON.parse(localStorage.getItem("animes[resultado].titulo"));
let resultadofinal = document.getElementById("resultadoFinal")
resultadofinal.innerText = ("El anime que se te recomienda seria: " + animes[resultado].titulo)
}

botonAnterior = document.getElementById("anterior");
botonAnterior.addEventListener("click", ("click", e =>{ let resultadofinal = document.getElementById("resultadoFinal")
resultadofinal.innerText = ("El anime que se te recomendo la ultima vez que estuviste en esta pagina fue: " + localStorage.getItem("anterior"))}))


/*
function Anime(ni, titulo, genero, capitulos, anios, acabado){
    this.ni=ni;
    this.genero=genero;
    this.capitulos=capitulos;
    this.anios=anios;
    this.acabado=acabado;
}

let anima={};

function creatAnime(){
    anima.push(Anime())
}

 class Anima {

    constroctor(){

    }
    method1()

}

function Anima(){
    this...
}

const shokugeki = new Anima()*/

// const animes = [    {
//     "ni": "1",
//     "titulo": "Mushoku Tensei",
//     "genero": "fantasia",
//     "capitulos": 23,
//     "anio": 2021,
//     "acabado": "no"
// },
// {
//     "ni": "2",
//     "titulo": "Fullmetal Alchimist: Brotherhood",
//     "genero": "fantasia",
//     "capitulos": 64,
//     "anio": 2009,
//     "acabado": "si"
// },
// {
//     "ni": "3",
//     "titulo": "One Piece",
//     "genero": "aventura",
//     "capitulos": 1000,
//     "anio": 1997,
//     "acabado": "no"
// },
// {
//     "ni": "4",
//     "titulo": "Toradora!",
//     "genero": "romance",
//     "capitulos": 26,
//     "anio": 2008,
//     "acabado": "si"
// },
// {
//     "ni": "5",
//     "titulo": "Kaguya-sama",
//     "genero": "romance",
//     "capitulos": 36,
//     "anio": 2021,
//     "acabado": "no"
// },
// {
//     "ni": "6",
//     "titulo": "HunterXHunter",
//     "genero": "aventura",
//     "capitulos": 140,
//     "anio": 2011,
//     "acabado": "si"
// }
// ];

// function obtenerJson(){
//     const URLJSON="/anime.json";
//     document.querySelector("#animes").innerHTML='<button id="cargarAnimes">Cargar animes en el catalogo y su cantidad de episodios</button>';
//     document.querySelector("#cargarAnimes").onclick=()=>{
//         fetch(URLJSON)
//             .then((respuesta)=>respuesta.json())
//             .then((data)=>{
//                 console.log(data);
//                 let animes=data.anime;
//                 for(const ani of animes){
//                     document.querySelector("#animes").innerHTML+=`
//                     <div>
//                         <h3>${ani.titulo}</h3>
//                         <p>${ani.capitulos}</p>
//                     </div>
//                     `;
//                 }
//             })
//     }
// }

// console.log(animes)

// obtenerJson();
// //DOM
// let generoElegido = document.getElementById("P1");
// let acabadoAni = document.getElementById("P2");
// let capElegido = document.getElementById("P3");
// let botonJugar = document.getElementById("jugar");
// let botonAleatorio = document.getElementById("aleatorio");
// let resultadofinal = document.getElementById("resultadoFinal")
// botonAnterior = document.getElementById("anterior");




// generoElegido.oninput = () => {
// if (!isNaN(generoElegido.value)) {
//     generoElegido.style.color = "red";
// } else {
//     generoElegido.style.color = "black";
// }
// }

// acabadoAni.oninput = () => {
// if (!isNaN(acabadoAni.value)) {
//     acabadoAni.style.color = "red";
// } else {
//     acabadoAni.style.color = "black";
// }
// }


// botonJugar.addEventListener("click", empezarJuego);

// function empezarJuego() {
// let generoElegido = document.getElementById("P1").value.toLowerCase();
// let acabadoAni = document.getElementById("P2").value.toLowerCase();
// let capElegido = document.getElementById("P3").value.toLowerCase();
// if (generoElegido == "" || acabadoAni == "" || capElegido == "") {
//     Swal.fire("Favor de contestar bien todas las preguntas")
// } else {
//     const seleccion = animes.filter(anime => {
//         return anime.genero == generoElegido && anime.acabado == acabadoAni && anime.capitulos <= capElegido
//     });
//     let resultadofinal = document.getElementById("resultadoFinal")
//     resultadofinal.innerText = ("El anime que se te recomienda seria: " + seleccion[0].titulo)
//     localStorage.setItem("anterior", JSON.stringify(seleccion[0].titulo))
//     const resultadoFinalAleatorio = JSON.parse(localStorage.getItem("seleccion[0].titulo"))
//     Swal.fire("El anime que se te recomienda seria: " + seleccion[0].titulo)
// }
// }



// botonAleatorio.addEventListener("click", e =>{resultado = Math.round(Math.random() * 6+1)
//     const animeRandom = animes.filter(anime => {
//         return anime.ni == resultado
//     });
//     localStorage.setItem("anterior", JSON.stringify(animes[resultado].titulo))
//     const resultadoFinalAleatorio = JSON.parse(localStorage.getItem("animes[resultado].titulo"));
//     resultadofinal.innerText = ("El anime que se te recomienda seria: " + animes[resultado].titulo)
//     Swal.fire("El anime que se te recomienda seria: " + animes[resultado].titulo)});

// botonAnterior.addEventListener("click",  e =>{ 
// resultadofinal.innerText = ("El anime que se te recomendo la ultima vez que estuviste en esta pagina fue: " + localStorage.getItem("anterior"))
// Swal.fire("El anime que se te recomendo la ultima vez que estuviste en esta pagina fue: " + localStorage.getItem("anterior"))})

