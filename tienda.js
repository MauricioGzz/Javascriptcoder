let carrito=[];

let lista=document.getElementById("lista");
    
render();

function render() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
        <h3> ID: ${producto.id} </h3>
        <img src=${producto.foto} width="250" height="360">
        <p> Producto: ${producto.nombre}</p>
        <p><strong> $ ${producto.precio} </strong></p>
        <button class='btn btn-primary' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }
    //eventos boton
    productos.forEach(producto=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
            agregarAlCarrito(producto);
        });
    });
}

function agregarAlCarrito(productoNuevo){
    carrito.push(productoNuevo);
    console.log(carrito);
    let final=0;


    document.getElementById("tablacarrito").innerHTML+=`
        <tr>
            <td>${productoNuevo.id}</td>
            <td>${productoNuevo.nombre}</td>
            <td id="precios">${productoNuevo.precio}</td>
        </tr>
`



const sum = carrito.reduce((accumulator, object) => {
    return accumulator + object.precio;
  }, 0);

console.log(sum)

let total = document.getElementById("cuenta")
                        cuenta.innerText = ("Tu cuenta hasta el momento: " + sum)

    localStorage.setItem("carrito",JSON.stringify(carrito));
    }

