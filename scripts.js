// Carne -- 400 gr por pessoa  + de 6 horas -- 650
// Cerveja -- 1200ml por pessoa + de 6 horas -- 2000ml
// refrigerante -- 1000ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando ....")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdTotalCarne = carnePP(duracao) * adultos + (carnePP (duracao) / 2 * criancas);
    let qdTotalCerveja = cervejaPP(duracao) * adultos;
    let qdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP (duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${qdTotalCarne / 1000} Kg de Carne`
    resultado.innerHTML += `<p>${ Math.ceil (qdTotalCerveja / 350)} Latas de Cerveja`
    resultado.innerHTML += `<p>${Math.ceil(qdTotalBebidas / 2000)} Pet's de 2 litros Bebidas`
 



}


function carnePP(duracao) {
    if (duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
    
}

function cervejaPP(duracao) {
    if (duracao >= 6){
        return 4200;
    }
    else{
        return 2100;
    }
    
}

function bebidasPP(duracao) {
    if (duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
    
}
