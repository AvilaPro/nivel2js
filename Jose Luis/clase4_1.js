
var notas=[null,true,20,18];
var nombres=["jose luis","miguel","andrea"]
console.log(nombres);
console.log(nombres.toString())
alert(nombres)

for (let i=0;i<=3;i++){
    console.log("nombre: ",nombres[i])
    console.log("Nota:",notas[i])
}
nombres.push("maria");
nombres.shift();
alert("se elimino ",x,". Quedan:"+  nombres)
console.log(notas[0]);