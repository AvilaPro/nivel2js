
var notas=[null,true,20,18];
var nombres=[null,"jose luis","miguel","andrea"]

for (let i=0;i<=3;i++){
    console.log("nombre: ",nombres[i])
    console.log("Nota:",notas[i])
}
nombres.push("maria");
nombres.shift();
alert(nombres);
console.log(notas[0]);