let producto=prompt("Introduzca el nombre de la/s bikini/s que desee agregar al carrito (x-salir)");
let precio=0;
while(producto!="x"){
    switch (producto){
        case "bikini nicole":
        console.log("bikini nicole $3800");
        precio=precio+3800;
        break;
        case "bikini serena":
        console.log("bikini serena $4500");
        precio=precio+4500;
        break;
        case "bikini raquel":
        console.log("bikini raquel $2700");
        precio=precio+2700;
        break;
        case "bikini mili":
        console.log("bikini mili $3550");
        precio=precio+3550;
        break;
        case "bikini sara":
        console.log("bikini sara $2890");
        precio=precio+2890;
        break;
        case "bikini mara":
        console.log("bikini mara $3450");
        precio=precio+3450;
        break;
    }
    producto=prompt("Si desea agregar otra bikini introduzca el nombre (x-salir)");
}
alert("Total a pagar $" +precio);