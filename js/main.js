'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome:"roberto",
    email:"roberto@gmail.com",
    celular:"88998421205",
    cidade:"pereiro"
}

//CRUD - CREATE - READ - UPDATE - DELETE

////////////////////////////////////////////////////////////////////
//Update

const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}






////////////////////////////////////////////////////////////////////
//READ
const readClient = () =>  getLocalStorage();
////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
//CREATE
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) =>  localStorage.setItem("db_client",JSON.stringify(dbClient));

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}
////////////////////////////////////////////////////////////////////


//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)