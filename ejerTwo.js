function coloresIguales(lista1,lista2){
const colorIgual=lista1.filter(color=>lista2.includes(color));
return colorIgual;
}

/* llamados de uso! */

let lista1=['rojo','azul','amarillo'];
let lista2=['blanco','negro','rojo'];
let resul=coloresIguales(lista1,lista2);
console.log(resul);

let lista3=[4,3,true,'manzana'];
let lista4=['pera',3,false,true,3,true];
let resul2=coloresIguales(lista3,lista4);
console.log(resul2);
