'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

  
   const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Produto')) ?? []
   const setLocalStorage = (dbProduto) => localStorage.setItem("db_Produto", JSON.stringify(dbProduto))

   const deleteProduto = (index) => {
        const dbProduto = readProduto()
        dbProduto.splice(index, 1)
        setLocalStorage(dbProduto)
   }  

   const updateProduto = (index, Produto) => {
    const dbProduto = readProduto()
    dbProduto[index] = Produto
    setLocalStorage(dbProduto)  
}

    const readProduto = () => getLocalStorage()

    const createProduto = (Produto) => {
        const dbProduto = getLocalStorage()
        dbProduto.push (Produto)
        setLocalStorage(dbProduto)
    }

 const isValidFields = () => {
     return document.getElementById('form').reportValidity()
 } 

 const clearFields = () => {
     const fields = document.querySelectorAll('.modal-field')
     fields.forEach(fields => fields.value = "")
 }

 const saveProduto = () => {
     if (isValidFields()){
         const Produto = {
            id: document.getElementById('id').value,
            imagem: document.getElementById('imagem').value,
            logo_supermercado: document.getElementById('logo-supermercado').value,
            nome: document.getElementById('nome').value,
            descricao: document.getElementById('descricao').value,
            valor: document.getElementById('valor').value,  
         }
         const index = document.getElementById('id').dataset.index
         if (index == 'new'){
            createProduto(Produto)
            updateTable()
            closeModal()
         }else{
             updateProduto(index, Produto)
             updateTable()
             closeModal()
         }
        
     }
 }

 const createRow = (Produto, index) => {
     const newRow = document.createElement('tr')
     newRow.innerHTML = `
   
     <th><img src="${Produto.imagem}" width="120px" height="120px"></td>
    
     <td>${Produto.nome}</td>
     <td>${Produto.descricao}</td>
 
     <td>
          
            <button type="button" class="button red" data-action='delete-${index}'>excluir</button>
     </td> 
    `
    document.querySelector('#tableProduto>tbody').appendChild(newRow)
 }

 const clearTable = () => {
     const rows = document.querySelectorAll('#tableProduto>tbody tr')
     rows.forEach(row => row.parentNode.removeChild(row))
 }

 const updateTable = () => {
     const dbProduto = readProduto()
     clearTable()
     dbProduto.forEach(createRow)
 }

 const fillFields = (Produto) => {
     document.getElementById('id').value = Produto.id
     document.getElementById('imagem').value = Produto.imagem
     document.getElementById('logo-supermercado').value = Produto.logo_supermercado
     document.getElementById('nome').value = Produto.nome
     document.getElementById('descricao').value = Produto.descricao
     document.getElementById('valor').value = Produto.valor
     document.getElementById('id').dataset.index = Produto.index
 }

 const editProduto = (index) =>{
     const Produto = readProduto()[index]
     Produto.index = index
     fillFields(Produto)
     openModal()
 }

const editDelete = (event) =>{
    if (event.target.type == 'button'){
        const [action, index] = event.target.dataset.action.split('-')
       
        if (action == 'edit'){
            editProduto(index)
        }else{
            const Produto = readProduto()[index]
            const response = confirm (`Deseja realmente excluir o produto ${Produto.nome}`)
            if (response){
                deleteProduto(index)
                updateTable()
            }
            
        }
        }
    }
    

updateTable()

document.getElementById('cadastrarProduto')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
   .addEventListener('click', closeModal)

 document.getElementById('salvar')
    .addEventListener('click' , saveProduto)

 document.querySelector('#tableProduto>tbody')
    .addEventListener('click', editDelete)   