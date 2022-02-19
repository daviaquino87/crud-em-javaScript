'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome:"davi",
    email:"davi26031@gmail.com",
    celular:"88998421205",
    cidade:"pereiro"
}



//CRUD - CREATE - READ - UPDATE - DELETE

//CREATE

const createCliente = (client) => {

}


//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)