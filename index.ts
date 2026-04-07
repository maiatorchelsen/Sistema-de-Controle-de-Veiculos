import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();
console.log("+------------------+")
console.log('|Criação de veículo|');
const carro: Veiculo = criaVeiculo();
console.log("+------------------+")

while(true){
    console.log("########### MENU ###########");
    console.log("Veículo: " + carro.marca + " " + carro.modelo);
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Parar veículo");
    console.log("6 - Imprimir dados do veículo");
    console.log("7 - Dar ré")
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
    
        default:
            break;
    }
}

console.table(carro);

function dar_re(veiculo: Veiculo): void{
    if (veiculo.velocidade === 0 || veiculo.marchaAtual === -1) {
        veiculo.marchaAtual = -1; 
        veiculo.velocidade += veiculo.potencia * 0.05; 
        console.log(`Dando ré... Velocidade atual: ${veiculo.velocidade.toFixed(2)}`);
    } else {
        console.log("⚠️ Reduza a velocidade para 0 antes de dar ré!");
    }
}

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}
function frear(veiculo: Veiculo): void{
    if(veiculo.velocidade > 0){
        veiculo.velocidade -= veiculo.potencia*0.1;
        console.log(veiculo.velocidade);
    }
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.cor = teclado('Cor: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    veiculo.marca = teclado('↳Marca: ');
    veiculo.modelo = teclado('↳Modelo: ');
    veiculo.potencia = +teclado('↳Potência: ');
    veiculo.numeroMarchas = +teclado('↳Número de marchas: ');
    return veiculo;
}