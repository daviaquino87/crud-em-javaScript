'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome:"graca",
    email:"graca@gmail.com",
    celular:"88998421205",
    cidade:"pereiro"
}

//CRUD - CREATE - READ - UPDATE - DELETE


////////////////////////////////////////////////////////////////////
//DELETE
const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index,1);
    setLocalStorage(dbClient);
}
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
//Update
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}
////////////////////////////////////////////////////////////////////


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

const isValidFields = () => {
    return  document.querySelector('#form').reportValidity()
}



//interação com o layout

const saveCliente = () => {
    if (isValidFields()){
        const client = {
            nome:document.getElementById('nome').nodeValue,
            email:document.getElementById('email').nodeValue,
            celular:document.getElementById('celular').nodeValue,
            cidade:document.getElementById('cidade').nodeValue

        };
        createClient(client);   
    }
}

//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.querySelector('#salvar')
    .addEventListener('click',saveCliente);