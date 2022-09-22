let carro1 = []
let carro2 = []
let carro3 = []
let carro4 = []
let carro5 = []
let carro6 = []
let carro7 = []
let suma = 0

function agregar1() {
  carro1 = []
  let opcion = document.getElementById("size").value;
carro1.push(opcion)

ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))

let valor1 = Number(`${productos[recuDato[0]].precio}`)
document.getElementById("item1").innerHTML =`  ${productos[recuDato[0]].nombre}`
document.getElementById("valor1").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor1)
suma = suma+ Number(`${productos[recuDato[0]].precio}`)
document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar2() {
  carro2 = []
  let opcion = document.getElementById("tipo").value;
carro2.push(opcion)

ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor2 = Number(`${productos[recuDato[1]].precio}`)
document.getElementById("item2").innerHTML =`  ${productos[recuDato[1]].nombre}`
document.getElementById("valor2").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor2)
suma = suma+ Number(`${productos[recuDato[1]].precio}`)
document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar3() {
  carro3 = []
  let opcion = document.getElementById("salsa").value;
carro3.push(opcion)

ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor3 = Number(`${productos[recuDato[2]].precio}`)
document.getElementById("item3").innerHTML =`  ${productos[recuDato[2]].nombre}`
        document.getElementById("valor3").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor3)
        suma = suma+ Number(`${productos[recuDato[2]].precio}`)
        document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar4() {
  carro4 = []
  let opcion = document.getElementById("cantidadSalsa").value;
carro4.push(opcion)

ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor4 = Number(`${productos[recuDato[3]].precio}`)
document.getElementById("item4").innerHTML =`  ${productos[recuDato[3]].nombre}`
        document.getElementById("valor4").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor4)
        suma = suma+ Number(`${productos[recuDato[3]].precio}`)
        document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar5() {
  carro5 = []
  let opcion = document.getElementById("queso").value;
carro5.push(opcion)
ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor5 = Number(`${productos[recuDato[4]].precio}`)
document.getElementById("item5").innerHTML =`  ${productos[recuDato[4]].nombre}`
        document.getElementById("valor5").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor5)
        suma = suma+ Number(`${productos[recuDato[4]].precio}`)
        document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar6() {
  carro6 = []
  let opcion = document.getElementById("carne").value;
carro6.push(opcion)
ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor6 = Number(`${productos[recuDato[5]].precio}`)
document.getElementById("item6").innerHTML =`  ${productos[recuDato[5]].nombre}`
document.getElementById("valor6").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor6)
suma = suma+ Number(`${productos[recuDato[5]].precio}`)
document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)
}

function agregar7() {
  carro7 = []
  let opcion = document.getElementById("vegetal").value;
carro7.push(opcion)
ok()
let recuDato = JSON.parse(localStorage.getItem("pedido"))
let valor7 = Number(`${productos[recuDato[6]].precio}`)
document.getElementById("item7").innerHTML =`  ${productos[recuDato[6]].nombre}`
document.getElementById("valor7").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(valor7)
suma = suma+ Number(`${productos[recuDato[6]].precio}`)
document.getElementById("suma").innerHTML =Intl.NumberFormat('es-CL', {minimumFractionDigits: 0}).format(suma)

}

function ok() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Ok...su eleción fue agregada.'
      })

storageTmp()

}

function error() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'warning',
        title: 'Ups... te faltan ingredientes.'
      })

}

function storageTmp() {
c1 = carro1
c2 = carro2
c3 = carro3
c4 = carro4
c5 = carro5
c6 = carro6
c7 = carro7
let carro0 = [c1,c2,c3,c4,c5,c6,c7]

  const storageDatos = JSON.stringify(carro0)
  
  localStorage.setItem("pedido" , storageDatos)
  
}
