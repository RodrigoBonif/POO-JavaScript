class Carros {

    constructor() {
        this.id = 0
        this.nomeCarro = '';
        this.valor = 0;
    }

    adicionar() {
        alert("Metodo adicionar")
    }
    excluir() {
        alert("Metodo excluir")
    }
}
const carro = new Carros();

document.querySelector('#adicionar').addEventListener('click', () => {
    carro.adicionar()
})
document.querySelector('#excluir').addEventListener('click', () => {
    carro.excluir()
})