// Creación de Lista seleccionable de TAMAÑO DE PIZZA en el DOM
for(i = 0; i < arraySize.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arraySize[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arraySize[i].index);
select0.setAttribute("name","size");
select0.setAttribute("onchange","agregar1()")
select0.insertBefore(option,select0.lastChild);
}

// Creación de Lista seleccionable de TIPO DE PIZZA en el DOM
for(i = 0; i < arrayTipo.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayTipo[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayTipo[i].index);
select1.setAttribute("name","tipo");
select1.setAttribute("onchange","agregar2()")
select1.insertBefore(option,select1.lastChild);
}

// Creación de Lista seleccionable de TIPO DE SALSA en el DOM
for(i = 0; i < arraySalsa.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arraySalsa[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arraySalsa[i].index);
select2.setAttribute("name","salsa");
select2.setAttribute("onchange","agregar3()")
select2.insertBefore(option,select2.lastChild);
}

// Creación de Lista seleccionable de la CANTIDAD DE SALSA en el DOM
for(i = 0; i < arrayCantSalsa.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayCantSalsa[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayCantSalsa[i].index);
select3.setAttribute("name","cantidadSalsa");
select3.setAttribute("onchange","agregar4()")
select3.insertBefore(option,select3.lastChild);
}

// Creación de Lista seleccionable de la CANTIDAD DE MOZZARELLA en el DOM
for(i = 0; i < arrayMozzarella.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayMozzarella[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayMozzarella[i].index);
select4.setAttribute("name","queso");
select4.setAttribute("onchange","agregar5()")
select4.insertBefore(option,select4.lastChild);
}

// Creación de Lista seleccionable de la CARNE en el DOM
for(i = 0; i < arrayCarne.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayCarne[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayCarne[i].index);
select5.setAttribute("name","carne");
select5.setAttribute("onchange","agregar6()")
select5.insertBefore(option,select5.lastChild);
}

// Creación de Lista seleccionable de los VEGETALES en el DOM
for(i = 0; i < arrayVegetales.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayVegetales[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayVegetales[i].index);
select6.setAttribute("name","vegetal");
select6.setAttribute("onchange","agregar7()")
select6.insertBefore(option,select6.lastChild);
}

// Creación de Lista seleccionable de los Extras1 en el DOM
for(i = 0; i < arrayExtra1.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayExtra1[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayExtra1[i].index);
select7.setAttribute("name","extra1");
select7.setAttribute("onchange","agregar8()")
select7.insertBefore(option,select7.lastChild);
}
// Creación de Lista seleccionable de los Extras2 en el DOM
for(i = 0; i < arrayExtra2.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayExtra2[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayExtra2[i].index);
select8.setAttribute("name","extra2");
select8.setAttribute("onchange","agregar9()")
select8.insertBefore(option,select8.lastChild);
}
// Creación de Lista seleccionable de los Extras3 en el DOM
for(i = 0; i < arrayExtra3.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayExtra3[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayExtra3[i].index);
select9.setAttribute("name","extra3");
select9.setAttribute("onchange","agregar10()")
select9.insertBefore(option,select9.lastChild);
}
// Creación de Lista seleccionable de los Extras4 en el DOM
for(i = 0; i < arrayExtra4.length; i++)
{
let option = document.createElement("OPTION"),
txt = document.createTextNode(arrayExtra4[i].txtVer);
option.appendChild(txt);
option.setAttribute("value",arrayExtra4[i].index);
select10.setAttribute("name","extra4");
select10.setAttribute("onchange","agregar11()")
select10.insertBefore(option,select10.lastChild);
}
