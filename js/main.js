'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFilds();
    document.getElementById('modal').classList.remove('active');
}

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

const clearFilds = () => {
    const filds = document.querySelectorAll('.modal-field');
    filds.forEach(filds => filds.value = "");
}

const saveCliente = () => {
    if (isValidFields()){
        const client = {
            nome:document.getElementById('name').value,
            email:document.getElementById('email').value,
            celular:document.getElementById('tel').value,
            cidade:document.getElementById('city').value,
        };
        createClient(client);   
        closeModal();
    }
}

//criar linha de usuario
const createRow = (client) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green">editar</button>
        <button type="button" class="button red">excluir</button>
    </td>
    `

    document.querySelector('#tbClient>tbody').append(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbClient>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row))
}


//atualiza a tabela
const updateTable = () => {
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow)
}

updateTable();

//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.querySelector('#salvar')
    .addEventListener('click',saveCliente);