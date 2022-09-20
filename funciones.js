
let carroTmp = []

let total = []

const botonPagar = document.querySelector("#pagar")
botonPagar.onclick= function() {
 
pagarPedido()

}
const botonVer = document.querySelector("#ver")
botonVer.onclick= function() {
 
    mostarCarro()

}


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
    
        
        for (i=0 ; i<= 6 ; i++) {
    
        const lista = document.querySelector("#carrito");
    
        let listado = document.createElement("div");
        
        listado.innerHTML = `    ${textoVer[i]}     ${productos[carroTmp[i]].nombre}    $ ${productos[carroTmp[i]].precio} <br>`
        
          lista.appendChild(listado);
    
        }
    
        const lista = document.querySelector("#carrito");
    
        let listado = document.createElement("div");
        
        listado.innerHTML = `<h2>Su pedido es por:    $ ${total}.-</h2><br>`
        
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
