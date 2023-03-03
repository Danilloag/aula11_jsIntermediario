let nameCustomer = document.querySelector('#name')
let phone = document.querySelector('#phone')
let email = document.querySelector('#email')
let registeredCustomers = document.querySelector('#registeredCustomers')
let saveButton = document.querySelector('#saveButton')
let finishButton = document.querySelector('#finishButton')
let form = document.querySelector('#form')
let containerRegisteredcustomers = document.querySelector('#containerRegisteredcustomers')

//Array para armazenar meus clientes
let customersList = []

function validateInput() {
    if (nameCustomer.value.trim() !== '' && phone.value.trim() !== '' && email.value.trim() !== '') {
        insertList();
    } else {
        alert('Existem campos em branco!')
    }
}

function validateButtonFinish() {
    if (customersList.length !== 0) {
        showList()
    } else {
        alert('Nenhum cliente cadastrado!')
    }
}

function insertList() {
    let saveCustomer = {
        numeroCliente: customersList.length+1,
        nome: nameCustomer.value,
        telefone: phone.value,
        email: email.value
    }
    customersList.push(saveCustomer);
    nameCustomer.value = ''
    phone.value = ''
    email.value = ''
}

function insertHtml(numero, nome, telefone, email) {
    registeredCustomers.innerHTML += `
    <div class="my-3">
        <ul>Cliente ${numero}: </ul> 
        <li>Nome: ${nome}</li>
        <li>Telefone: ${telefone}</li>
        <li>E-mail: ${email}</li>
    </div>
        `
}

function showList() {
    for (let customer of customersList) {
        insertHtml(customer.numeroCliente, customer.nome, customer.telefone, customer.email);
    }
    form.setAttribute('hidden', '')
    containerRegisteredcustomers.removeAttribute('hidden')
}

saveButton.addEventListener("click", validateInput)
finishButton.addEventListener("click", validateButtonFinish)