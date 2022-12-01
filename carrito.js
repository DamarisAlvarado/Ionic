const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []


ProfuctosTienda.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img   src=${producto.imagen} alt= "">
    <h3 class="Nombre">${producto.nombre}</h3>
    <p>${producto.Descripcion}</p>
    <h5 class="precioProducto">Precio:$ ${producto.precio}</h5>
    <button id="agregar${producto.id}" class="boton-agregar">Comprar Ahora <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
        //
        
    })
})


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    alert("TODOS LOS ELEMENTOS SE ELIMINARAN");
    carrito.length = 0
    actualizarCarrito()
})



const agregarAlCarrito = (prodId) => {

   
    const existe = carrito.some (prod => prod.id === prodId)
    alert("ARTICULO AGREGADO CON EXITO");
    if (existe){ 
        const prod = carrito.map (prod => { 
           
            if (prod.id === prodId){
                prod.cantidad++
                
            }
           
        })
       
    } else { 
        const item = ProfuctosTienda.find((prod) => prod.id === prodId)
        carrito.push(item)
    } 
  
    actualizarCarrito()
    
}


   


const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img class="iamgenC" src=${prod.imagen} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
    })

    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
   
    
}

function ImprimirFactura(){
    window.print();
}


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})

