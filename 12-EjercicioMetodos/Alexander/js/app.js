function Recipe1(){
    let mezclar1 = 'Pechugas de pollo: Cocinandola durante 15 minutos a fuego medio'
    document.getElementById('ArrozPollo').style.display='block';
    document.getElementById('PolloRelleno').style.display='none';
    document.getElementById('Shandwich').style.display='none';
    console.log(mezclar1);
}

function Recipe2(){
    let mezclar2 = 'Pollo entero: Precalentamos el horno a 200º C. En un recipiente hondo, preparamos el relleno'
    document.getElementById('ArrozPollo').style.display='none';
    document.getElementById('PolloRelleno').style.display='block';
    document.getElementById('Shandwich').style.display='none';
    console.log(mezclar2);
}

function Recipe3(){
    let mezclar3 = 'Tocino, pechuga de pollo: Cocinamos el tocino hasta dorarlo y la pechuga de pollo durante 5 minutos'
    document.getElementById('ArrozPollo').style.display='none';
    document.getElementById('PolloRelleno').style.display='none';
    document.getElementById('Shandwich').style.display='block';
    console.log(mezclar3);
}
