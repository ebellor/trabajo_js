let carro = []
let carroTmp = []

function agregarCarro() {
    carro = []
let suma = 0
    lista = document.tipoTexto.size
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
if (eleccion == 0) {
    error()
    
} else {
    carro.push(productos[eleccion].nombre,productos[eleccion].precio)
suma= suma+productos[eleccion].precio
    
}


    lista = document.tipoTexto.tipo
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio
        
    }
    lista = document.tipoTexto.salsa
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.cantidadSalsa
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.queso
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.carne
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio
        
    }

    lista = document.tipoTexto.vegetal
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    eleccion = eval(`${opcion.value}`)
    if (eleccion == 0) {
        error()
        
    } else {
        carro.push(productos[eleccion].nombre,productos[eleccion].precio)
    suma= suma+productos[eleccion].precio

    Swal.fire({
        title: 'Su pedido es por',
        text: `$ ${suma}`,
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
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Su pago con crédito a sido aceptado.', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Su pago con débito a sido aceptado.', '', 'success')
                }
              })
          
        }
      })
        
    }
   
  
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

