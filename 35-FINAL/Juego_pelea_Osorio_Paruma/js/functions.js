function herir({herir1, herir2}) {
    return (
        herir1.ataque.position.x + herir1.ataque.width >= herir2.posicion.x && 
        herir1.ataque.position.x <= herir2.posicion.x + herir2.width && 
        herir1.ataque.position.y + herir1.ataque.height >= herir2.posicion.y && 
        herir1.ataque.position.y <= herir2.posicion.y + herir2.height 
    )
}
function ganadora({jugador,rival}){
    document.getElementById("finjueg").style.display='flex';
    if(jugador.salud===rival.salud){
        document.getElementById("finjueg").innerHTML='EMPATE';
    } else if (jugador.salud>rival.salud){
        document.getElementById("finjueg").innerHTML='Gana Kaguya';
    }else if (rival.salud>jugador.salud){
        document.getElementById("finjueg").innerHTML='Gana Yuzuru';
    }
}