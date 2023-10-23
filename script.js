const button = document.querySelector('.btn-task')
const input = document.querySelector('.input-task')
const listcompleta = document.querySelector('.list-task')

let listaItens = []

function adicionarTarefa(){
    listaItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''

    mostrartarefas()
}

function mostrartarefas(){
    let novaLi = ''

    listaItens.forEach((item, index) => {

        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}" >
                <img src="./img/checked.png" alt="check-na-tarela" onClick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="lixo" onClick="deletarItem(${index})">
            </li>
        `
    })

    listcompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(listaItens))
}

function concluirTarefa(index){
    listaItens[index].concluida = !listaItens[index].concluida

    mostrartarefas()

}

function deletarItem(index){
    listaItens.splice(index, 1)

    mostrartarefas()
}

function recarregarTarefas(){
    const tarefaLocalStorage = localStorage.getItem('lista')

    if(tarefaLocalStorage){
        listaItens = JSON.parse(tarefaLocalStorage)
    }

    console.log(tarefaLocalStorage);

    mostrartarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarTarefa)


/* <li class="task">
    <img src="./img/checked.png" alt="check-na-tarela">
    <p>Dar o like...</p>
    <img src="./img/trash.png" alt="lixo">
</li> */