let carroTmp = []
let total = []

function agregarCarro() {
   

    carroTmp = []
    let suma = 0
    lista = document.tipoTexto.size
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
if (eleccion == 0) {
    error()
    
} else {
    carroTmp.push(eleccion)
 
suma= suma+productos[eleccion].precio

    
}


    lista = document.tipoTexto.tipo
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        
    }
    lista = document.tipoTexto.salsa
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.cantidadSalsa
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.queso
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.carne
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.vegetal
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carroTmp.push(eleccion)
    suma= suma+productos[eleccion].precio
        total[0] = suma
  
    }



}


function pagarPedido() {

    agregarCarro()

    Swal.fire({
        title: 'Su pedido es por',
        text: `$ ${total[0]}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¿Desea pagar?'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¿Cómo desea pagar?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Crédito',
                denyButtonText: `Dédito`,
              }).then((result) => {
                 
                if (result.isConfirmed) {
                  Swal.fire('Su pago con crédito a sido aceptado.', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Su pago con débito a sido aceptado.', '', 'success')
                }
              })
          
        }
      })
        
    
    }
  

 
function mostarCarro() {

    agregarCarro()

    const lista = document.querySelector("#carrito");

    let listado = document.createElement("p");
    
    listado.innerHTML = `    ${textoVer[0]} ${productos[carroTmp[0]].nombre}    $ ${productos[carroTmp[0]].precio}<br>
        ${textoVer[1]} ${productos[carroTmp[1]].nombre}    $ ${productos[carroTmp[1]].precio}<br>
        ${textoVer[2]} ${productos[carroTmp[2]].nombre}    $ ${productos[carroTmp[2]].precio}<br>
        ${textoVer[3]} ${productos[carroTmp[3]].nombre}    $ ${productos[carroTmp[3]].precio}<br>
        ${textoVer[4]} ${productos[carroTmp[4]].nombre}    $ ${productos[carroTmp[4]].precio}<br>
        ${textoVer[5]} ${productos[carroTmp[5]].nombre}    $ ${productos[carroTmp[5]].precio}<br>
        ${textoVer[6]} ${productos[carroTmp[6]].nombre}    $ ${productos[carroTmp[6]].precio}<br>
        <h2>Su pedido es por:    $ ${total}.-</h2><br>`
    
      lista.appendChild(listado);
}


 
function error() {

    Swal.fire({
        //position: 'top-end',
        icon: 'error',
        title: 'Su pedido tiene problemas... \n Le faltan ingredientes.',
        showConfirmButton: false,
        timer: 2500
    
})
}
