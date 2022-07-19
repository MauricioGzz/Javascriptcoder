function obtenerJson(){
    const URLJSON="/anime.json";
    document.querySelector("#animes").innerHTML='<button id="cargarAnimes">Cargar animes en el catalogo y su cantidad de episodios</button>';
    document.querySelector("#cargarAnimes").onclick=()=>{
        fetch(URLJSON)
            .then((respuesta)=>respuesta.json())
            .then((data)=>{
                // console.log(data);
                let animes=data.anime;
                for(const ani of animes){
                    document.querySelector("#animes").innerHTML+=`
                    <div>
                        <h3>${ani.titulo}</h3>
                        <p>${ani.capitulos}</p>
                    </div>
                    `;
                }
            })
    }
}


obtenerJson();
//DOM
let generoElegido = document.getElementById("P1");
let acabadoAni = document.getElementById("P2");
let capElegido = document.getElementById("P3");
let botonJugar = document.getElementById("jugar");
let botonAleatorio = document.getElementById("aleatorio");
let resultadofinal = document.getElementById("resultadoFinal")
botonAnterior = document.getElementById("anterior");




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


// botonJugar.addEventListener("click", empezarJuego);

function obtenerJsonAnime() {
    const URLJSON="/anime.json";
    document.querySelector("#jugar2").innerHTML='<button id="jugar2Anime">Resultados</button>';
    document.querySelector("#jugar2Anime").onclick=()=>{
        fetch(URLJSON)
            .then((respuesta)=>respuesta.json())
            .then((data)=>{
                // console.log(data);
                let anime=data.anime;
                    let generoElegido = document.getElementById("P1").value.toLowerCase();
                    let acabadoAni = document.getElementById("P2").value.toLowerCase();
                    let capElegido = document.getElementById("P3").value.toLowerCase();
                    if (generoElegido == "" || acabadoAni == "" || capElegido == "") {
                        Swal.fire("Favor de contestar bien todas las preguntas")
                    } else {
                        const seleccion = anime.filter(animes => {
                            return animes.genero == generoElegido && animes.acabado == acabadoAni && animes.capitulos <= capElegido
                        });
                        console.log(seleccion)
                        let resultadofinal = document.getElementById("resultadoFinal")
                        resultadofinal.innerText = ("El anime que se te recomienda seria: " + seleccion[0].titulo)
                    }
            })
        }
    }

obtenerJsonAnime();


botonAnterior.addEventListener("click",  e =>{ 
    resultadofinal.innerText = ("El anime que se te recomendo la ultima vez que estuviste en esta pagina fue: " + localStorage.getItem("anterior"))
    Swal.fire("El anime que se te recomendo la ultima vez que estuviste en esta pagina fue: " + localStorage.getItem("anterior"))})