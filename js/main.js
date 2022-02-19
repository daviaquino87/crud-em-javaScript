'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome:"maria",
    email:"davi26031@gmail.com2",
    celular:"88998421205",
    cidade:"pereiro2"
}



//CRUD - CREATE - READ - UPDATE - DELETE

//CREATE

//minha variavel createCliente recebe um cliente e passa pra uma arrow function que manda para o localstorage
//o local storage usa a função setitem para pega o valor e salvar no local storage no formato de chave e valor
//o json.stringfy esta servindo para pegar nosso objeto que esta vindo em json e transformalo em string 
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem("db_client"));
    console.log(db_client);
    db_client.push(client)
    localStorage.setItem("db_client:",JSON.stringify(db_client));
}


//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)