class Atleta {
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia(){
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, -1);
        let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma/notasValidas.length;
    }

    exibirAtletaInfo(){
        let notasOrdenadas = [...this.notas].sort((a, b) => b - a);
        console.log(`Atleta: ${this.nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadas.join(', ')}`);
        console.log(`Média Válida: ${this.calcularMedia()}`);
        console.log("");
    }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function processarAtletas(lista) {
    lista.forEach(item => {
        const atleta = new Atleta(item.nome, item.notas);
        atleta.exibirAtletaInfo();
    });
}
processarAtletas(atletas);