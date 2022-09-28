//Productos
let select0 = document.getElementById("size"),arraySize = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "Falta el tamaño de la pizza", precio: 0, valida:0},
    {index: 1, familia: "sizeMasa" , txtVer: "$ 1.000. Mediana", nombre: "Mediana", precio: 1000, valida:1},
    {index: 2, familia: "sizeMasa" , txtVer: "$ 2.000. Familiar", nombre: "Familiar", precio: 2000, valida:1},
    {index: 3, familia: "sizeMasa" , txtVer: "$ 3.000. Extra Grande", nombre: "Extra Grande", precio: 3000, valida:1},
]

let select1 = document.getElementById("tipo"),arrayTipo = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "Falta el tipo de masa", precio: 0, valida:0},
    {index: 1, familia: "tipoMasa" , txtVer: "Gratis Delgada", nombre: "Delgada", precio: 0, valida:1},
    {index: 2, familia: "tipoMasa" , txtVer: "Gratis Tradicional", nombre: "Tradicional", precio: 0, valida:1},
    {index: 3, familia: "tipoMasa" , txtVer: "$    300. A la Piedra", nombre: "A la Piedra", precio: 300, valida:1}
]

let select2 = document.getElementById("salsa"),arraySalsa = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "", precio: 0, valida:1},
    {index: 1, familia: "tipoSalsa" , txtVer: "$   500. Salsa de Tomates", nombre: "Salsa de Tomates", precio: 500, valida:1},
    {index: 2, familia: "tipoSalsa" , txtVer: "$   700. Salsa BBQ", nombre: "Salsa BBQ", precio: 700, valida:1},
    {index: 3, familia: "tipoSalsa" , txtVer: "$   800. Salsa Alfredo", nombre: "Salsa Alfredo", precio: 800, valida:1},
    {index: 4, familia: "tipoSalsa" , txtVer: "Sin Salsa", nombre: "Sin Salsa", precio: 0, valida:1},
]

let select3= document.getElementById("cantidadSalsa"),arrayCantSalsa = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "", precio: 0, valida:1},
    {index: 1, familia: "cantidadSalsa" , txtVer: "Gratis Salsa Regular", nombre: "Salsa Regular", precio: 0, valida:1},
    {index: 2, familia: "cantidadSalsa" , txtVer: "Gratis Poca Salsa", nombre: "Poca Salsa", precio: 0, valida:1},
    {index: 3, familia: "cantidadSalsa" , txtVer: "$   400. Salsa Extra", nombre: "Salsa Extra", precio: 400, valida:1},
    {index: 4, familia: "cantidadSalsa" , txtVer: "Sin Salsa", nombre: "Sin Salsa", precio: 0, valida:1},
]

let select4= document.getElementById("queso"),arrayMozzarella = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "", precio: 0, valida:1},
    {index: 1, familia: "queso" , txtVer: "$   500. Mozzarella Base", nombre: "Mozzarella Base", precio: 500, valida:1},
    {index: 2, familia: "queso" , txtVer: "Sin Mozzarella", nombre: "Sin Mozzarella", precio: 0, valida:1},
    {index: 3, familia: "queso" , txtVer: "$   400. Poco Mozzarella", nombre: "Poco Mozzarella", precio: 400, valida:1},
    {index: 4, familia: "queso" , txtVer: "$   700. Mozzarella Extra", nombre: "Mozzarella Extra", precio: 700, valida:1},
]

let select5= document.getElementById("carne"),arrayCarne = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "", precio: 0, valida:1},
    {index: 1, familia: "carne" , txtVer: "$ 1.000. Carne", nombre: "Carne", precio: 1000, valida:1},
    {index: 2, familia: "carne" , txtVer: "$ 1.500. Tocino", nombre: "Tocino", precio: 1500, valida:1},
    {index: 3, familia: "carne" , txtVer: "$ 1.000. Salchicha Italiana", nombre: "Salchicha Italiana", precio: 1000, valida:1},
    {index: 4, familia: "carne" , txtVer: "$ 1.000. Pepperoni", nombre: "Pepperoni", precio: 1000, valida:1},
    {index: 5, familia: "carne" , txtVer: "$ 1.000. Pollo", nombre: "Pollo", precio: 1000, valida:1},
    {index: 6, familia: "carne" , txtVer: "$ 2.000. Lomito Canadiense", nombre: "Lomito Canadiense", precio: 2000, valida:1},
]

let select6= document.getElementById("vegetal"),arrayVegetales = [
    {index: 0, familia: "" , txtVer: "-- Elige tu opción --", nombre: "", precio: 0, valida:1},
    {index: 1, familia: "vegetal" , txtVer: "$   500. Tomates Cherry", nombre: "Tomates Cherry", precio: 500, valida:1},
    {index: 2, familia: "vegetal" , txtVer: "$   300. Champiñones", nombre: "Champiñones", precio: 300, valida:1},
    {index: 3, familia: "vegetal" , txtVer: "$   300. Maíz", nombre: "Maíz", precio: 300, valida:1},
    {index: 4, familia: "vegetal" , txtVer: "$   400. Piñas", nombre: "Piñas", precio: 400, valida:1},
    {index: 5, familia: "vegetal" , txtVer: "$ 1.000. Tomates", nombre: "Tomates", precio: 1000, valida:1},
    {index: 6, familia: "vegetal" , txtVer: "$   300. Pimientos Verdes", nombre: "Pimientos Verdes", precio: 300, valida:1},
    {index: 7, familia: "vegetal" , txtVer: "$   250. Cebollas Caramelizadas", nombre: "Cebollas Caramelizadas", precio: 250, valida:1},
    {index: 8, familia: "vegetal" , txtVer: "$   250. Aceitunas Negras", nombre: "Aceitunas Negras", precio: 250, valida:1},
    {index: 9, familia: "vegetal" , txtVer: "$   250. Pepinillos", nombre: "Pepinillos", precio: 250, valida:1},
    ]

    let select7= document.getElementById("extra1"),arrayExtra1 = [
        {index: 0, familia: "" , txtVer: "--  Extra Carne --", nombre: "", precio: 0},
        {index: 1, familia: "carne" , txtVer: "$ 2.000. Lomito Canadiense", nombre: "Lomito Canadiense", precio: 2000},
        {index: 2, familia: "carne" , txtVer: "$ 1.000. Pepperoni", nombre: "Pepperoni", precio: 1000},
        {index: 3, familia: "carne" , txtVer: "$ 1.500. Tocino", nombre: "Tocino", precio: 1500},

        ]

        let select8= document.getElementById("extra2"),arrayExtra2 = [
            {index: 0, familia: "" , txtVer: "-- Extra Vegetal --", nombre: "", precio: 0},
            {index: 1, familia: "vegetal" , txtVer: "$   250. Cebollas Caramelizadas", nombre: "Cebollas Caramelizadas", precio: 250},
            {index: 2, familia: "vegetal" , txtVer: "$   250. Aceitunas Negras", nombre: "Aceitunas Negras", precio: 250},
            {index: 3, familia: "vegetal" , txtVer: "$   750. Jalapeños", nombre: "Jalapeños", precio: 750},
    
            ]

           let select9= document.getElementById("extra3"),arrayExtra3 = [
                {index: 0, familia: "" , txtVer: "-- Extra Queso --", nombre: "", precio: 0},
                {index: 1, familia: "queso" , txtVer: "$ 1.000. Queso Romado", nombre: "Queso Romano", precio: 1000},
                {index: 2, familia: "queso" , txtVer: "$ 1.000. Queso Parmesano", nombre: "Queso Parmesano", precio: 1000},
                {index: 3, familia: "queso" , txtVer: "$ 1.500. Queso Azul", nombre: "Queso Azul", precio: 1500},
        
                ]

         let select10= document.getElementById("extra4"),arrayExtra4 = [
                    {index: 0, familia: "" , txtVer: "-- ¿Algo para tomar? --", nombre: "", precio: 0},
                    {index: 1, familia: "bebida" , txtVer: "$ 1.000. Cocacola 1 lt.", nombre: "Cocacola 1 lt.", precio: 1000},
                    {index: 2, familia: "bebida" , txtVer: "$ 1.000. Fanta 1 lt.", nombre: "Fanta 1 lt.", precio: 1000},
                    {index: 3, familia: "bebida" , txtVer: "$ 1.000. Sprite 1 lt.", nombre: "Sprite 1 lt.", precio: 1000},
                    {index: 4, familia: "bebida" , txtVer: "$ 1.500. Cerveza", nombre: "Cerveza", precio: 1500},
                                ]


  let textoVer = [
    "Tamaño de Pizza :" , 
    "Tipo de Masa :" , 
  "Tipo de Salsa :" , 
  "Cantidad de Salsa :" , 
  "Cantidad de Queso :" , 
  "Tipo de carne : " , 
  "Tipo de vegetales :",
  "Extra 1",
  "Extra 2",
  "Extra 3",
  "Extra 4",
]

