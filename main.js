class Carros {

    constructor() {
        this.id = 1;
        this.arrayCarros = [];
        this.editId = null
    }

    salvar() {
        let carro = this.lerDados()

        if (this.validaCampo(carro)) {
            if (this.editId == null) {
                this.adicionar(carro)
            }
            else {
                this.atualizar(this.editId, carro)
            }
        }

        this.listaTabela()
        this.cancelar()
    }
    lerDados() {
        let carro = {}

        carro.id = this.id
        carro.nomeCarro = document.getElementById('carro').value
        carro.marca = document.getElementById('marca').value

        return carro
    }
    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for (let i = 0; i < this.arrayCarros.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_carro = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayCarros[i].id;
            td_carro.innerText = this.arrayCarros[i].nomeCarro;
            td_valor.innerText = this.arrayCarros[i].marca;
            
            let edit = document.createElement('span');
            edit.textContent = 'editar';
            edit.setAttribute('onclick', 'carro.preparaEdicao('+ JSON.stringify(this.arrayCarros[i]) +')')

            let del = document.createElement('span');
            del.textContent = 'excluir';
            console.log(del)
            del.setAttribute('onclick', 'carro.deletar('+ this.arrayCarros[i].id +')')

            td_acoes.appendChild(edit);
            td_acoes.appendChild(del);
        }
    }
    adicionar(carro) {
        this.arrayCarros.push(carro)
        this.id++
    }

    atualizar(id, carro) {
        for (let i = 0; i < this.arrayCarros.length; i++) {
            if (this.arrayCarros[i].id == id) {
                this.arrayCarros[i].nomeCarro = carro.nomeCarro
                this.arrayCarros[i].marca = carro.marca
            }
        }
    }

    preparaEdicao(dados) {
        this.editId = dados.id

        document.getElementById('carro').value = dados.nomeCarro;
        document.getElementById('marca').value = dados.marca;

        document.getElementById('salvar').innerText = 'Atualizar'
    }
    validaCampo(carro) {
        let msg = '';
        if (carro.nomeCarro == '') {
            msg += '- Informe o nome do Carro \n'
        }
        if (carro.marca == '') {
            msg += '- Informe o preço do Carro'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }
    cancelar() {
        document.getElementById('carro').value = '';
        document.getElementById('marca').value = '';

        document.getElementById('salvar').innerText = 'Salvar'
        this.editId = null
    }

    deletar(id) {

        if (confirm(`deseja deletar o carro de ID: ${id}`)) {
            
            let tbody = document.getElementById('tbody');
            
            for (let i = 0; i < this.arrayCarros.length; i++) {
                if (this.arrayCarros[i].id == id) {
                    this.arrayCarros.splice(i,1)
                    tbody.deleteRow(i)
                }
            }
        }
    }
}
const carro = new Carros();

document.querySelector('#salvar').addEventListener('click', () => {
    carro.salvar()
})
document.querySelector('#cancelar').addEventListener('click', () => {
    carro.cancelar()
})