document.addEventListener('DOMContentLoaded', () => {

    // Seletores gerais

        // Menu de busca
    const searchBar = document.querySelector('#searchInput')
    const searchBtn = document.querySelector('.searchBtn')
        // Menu de filtros
    const filterSelect = document.querySelector('#filterSelect')
    const clearFilter = document.querySelector('#clearFilter')
        // Criação | Edição | Cancelmento
    const divContactBefore = document.querySelector('#newContact-Before')
    const newContact = document.querySelector('#newContact')
    const editBtn = document.querySelector('#editBtn')
    const cancelEditBtn = document.querySelector('#cancelEditBtn')
        // Inputs name, number > Confirm & Cancel Buttons
    const InputName = document.querySelector('.name-contact')
    const InputNumber = document.querySelector('.number-contact')
    const confirmBtn = document.querySelector('.confirmBtn')
    const cancelBtn = document.querySelector('.cancelBtn')
        // Criação do usuario
    const personalContainer = document.querySelector('#personal-contacts-container')

        // Layout Da Div de Usuarios

        /* <div class="personal-contacts">
        <div class="name">name</div>
        <div class="number">number</div>
        <button class="fa-solid fa-pen"></button>
        <button class="fa-solid fa-eraser"></button>
        </div> */

// ------------------------------------------------------------------------

    // Função que reseta o filtro de pesquisa

    clearFilter.addEventListener('click', ()=>{
            filterSelect.value = 'All'
    })    

    // Iniciação do site, apenas com o botão new contact

    const verifyChild = personalContainer.querySelector('.personal-contacts')
    if(verifyChild === null){
        editBtn.classList.add('hide')
        cancelEditBtn.classList.add('hide')
    } 

    // Função de adicionar um contato

    newContact.addEventListener('click', ()=>{
        newContact.classList.add('hide')

            // Cria os elementos para adição do contato
        const dataProfile = document.createElement('div')
        dataProfile.id = 'dataProfile'

        const inputName = document.createElement('input')
        inputName.type = 'text'
        inputName.classList.add('name-contact')
        inputName.placeholder = 'Name *'

        const inputNumber = document.createElement('input')
        inputNumber.type = 'number'
        inputNumber.classList.add('number-contact')
        inputNumber.placeholder = 'Number *'

        const actions = document.createElement('div')
        actions.id = 'actions'

        const confirmBtn = document.createElement('button')
        confirmBtn.classList.add('confirmBtn')
        confirmBtn.textContent = 'Confirm'

        const cancelBtn = document.createElement('button')
        cancelBtn.classList.add('cancelBtn')
        cancelBtn.textContent = 'Cancel'

        divContactBefore.appendChild(dataProfile)
        dataProfile.appendChild(inputName)
        dataProfile.appendChild(inputNumber)
        divContactBefore.appendChild(actions)
        actions.appendChild(confirmBtn)
        actions.appendChild(cancelBtn) 
        
        cancelBtn.addEventListener('click', ()=>{
            dataProfile.remove()
            actions.remove()
            newContact.classList.remove('hide')
        })

            // Confirma a adição com Validação dos inputs
        confirmBtn.addEventListener('click', ()=>{
            if(inputName.value == '' || inputNumber.value == 0 || inputNumber.value.length < 11 || inputName.value.length < 5){
                alert('Por favor, insira dados válidos: o nome deve ter pelo menos 5 letras e o número de contato deve incluir DDD seguido de 9 dígitos')
            } else {
                dataProfile.remove()
                actions.remove()
                newContact.classList.remove('hide')
                editBtn.classList.remove('hide')
                const container = document.getElementById('personal-contacts-container')

                const personalContacts = document.createElement('div')
                personalContacts.classList.add('personal-contacts')

                const nameDiv = document.createElement('div')
                nameDiv.classList.add('name')
                nameDiv.innerHTML = inputName.value

                const numberDiv = document.createElement('div')
                numberDiv.classList.add('number')
                numberDiv.innerHTML = inputNumber.value

                const iconProfile = document.createElement('i')
                iconProfile.classList.add('fa-solid', 'fa-user')

                personalContacts.appendChild(iconProfile)
                personalContacts.appendChild(nameDiv)
                personalContacts.appendChild(numberDiv)
                container.appendChild(personalContacts)
            }
        })
    })
            // Função de edição dos contatos
        editBtn.addEventListener('click', () => {

            editBtn.classList.add('hide')
            newContact.classList.add('hide')
            cancelEditBtn.classList.remove('hide')

            const personalContacts = personalContainer.querySelectorAll('.personal-contacts')
                // Pegando todos os .personal-contacts e adicionando os botoes de edição
            personalContacts.forEach(element => {
                const penBtn = document.createElement('button')
                penBtn.classList.add('fa-solid', 'fa-pen')
                
                const eraseBtn = document.createElement('button')
                eraseBtn.classList.add('fa-solid', 'fa-eraser')
            
                element.appendChild(penBtn)
                element.appendChild(eraseBtn)
            });
        
                // função de cancelar a edição
            cancelEditBtn.addEventListener('click', () => {
                    personalContacts.forEach(element => {
                    const penBtn = element.querySelector('.fa-pen')
                    const eraseBtn = element.querySelector('.fa-eraser')
                    if (penBtn) penBtn.remove()
                    if (eraseBtn) eraseBtn.remove()
                });

                cancelEditBtn.classList.add('hide')
                newContact.classList.remove('hide')
                if (personalContacts.length > 0) {
                    editBtn.classList.remove('hide')
                }
            });
        
            personalContacts.forEach(element => {
                const eraseBtn = element.querySelector('.fa-eraser')
                eraseBtn.addEventListener('click', () => {

                    element.remove()
                        // Se não tiver nenhum .personal-contacts
                    if (personalContainer.querySelector('.personal-contacts') === null) {
                        newContact.classList.remove('hide')
                        cancelEditBtn.classList.add('hide')
                    }   // Se tiver ao menos um .personal-contacts
                    if (personalContainer.querySelector('.personal-contacts') !== null) {
                        editBtn.classList.remove('hide')
                    }
                });
            });
                // Quando clicar no lapis de editar, cria os elementos para edição do user
            personalContacts.forEach(element => {
                const penBtn = element.querySelector('.fa-pen')
                penBtn.addEventListener('click', ()=>{

                    const valueName = document.querySelector('.name')
                    const valueNumber = document.querySelector('.number')

                    cancelEditBtn.classList.add('hide')
                    const dataProfile = document.createElement('div')
                    dataProfile.id = 'dataProfile'
            
                    const inputName = document.createElement('input')
                    inputName.type = 'text'
                    inputName.classList.add('name-contact')
                    inputName.placeholder = 'Name *'
                    inputName.value = valueName.innerHTML
            
                    const inputNumber = document.createElement('input')
                    inputNumber.type = 'number'
                    inputNumber.classList.add('number-contact')
                    inputNumber.placeholder = 'Number *'
                    inputNumber.value = valueNumber.innerHTML
            
                    const actions = document.createElement('div')
                    actions.id = 'actions'
            
                    const confirmBtn = document.createElement('button')
                    confirmBtn.classList.add('confirmBtn')
                    confirmBtn.textContent = 'Confirm'
            
                    const cancelBtn = document.createElement('button')
                    cancelBtn.classList.add('cancelBtn')
                    cancelBtn.textContent = 'Cancel'
            
                    divContactBefore.appendChild(dataProfile)
                    dataProfile.appendChild(inputName)
                    dataProfile.appendChild(inputNumber)
                    divContactBefore.appendChild(actions)
                    actions.appendChild(confirmBtn)
                    actions.appendChild(cancelBtn) 
                        // função do botão de confirmação com validação, remoção e adição de classe + remoção de elementos
                    confirmBtn.addEventListener('click', ()=>{
                        if(inputName.value == '' || inputNumber.value == 0 || inputNumber.value.length < 11 || inputName.value.length < 5){
                            alert('Por favor, insira dados válidos: o nome deve ter pelo menos 5 letras e o número de contato deve incluir DDD seguido de 9 dígitos')
                        } else {
                            dataProfile.remove()
                            actions.remove()
                            newContact.classList.remove('hide')
                            editBtn.classList.remove('hide')
                            personalContacts.forEach(element => {
                                const penBtn = element.querySelector('.fa-pen')
                                const eraseBtn = element.querySelector('.fa-eraser')
                                if (penBtn) penBtn.remove()
                                if (eraseBtn) eraseBtn.remove()
                            })
                            
                            valueName.innerHTML = inputName.value
                            valueNumber.innerHTML = inputNumber.value
                        }
                    })
                        // função do botão de cancelamento
                    cancelBtn.addEventListener('click', () => {
                        personalContacts.forEach(element => {
                            const penBtn = element.querySelector('.fa-pen')
                            const eraseBtn = element.querySelector('.fa-eraser')
                            if (penBtn) penBtn.remove()
                            if (eraseBtn) eraseBtn.remove()
                            dataProfile.remove()
                            actions.remove()
                            newContact.classList.remove('hide')
                            editBtn.classList.remove('hide')
                        })
                    })
                })
            })
        })

        // Filtro + search

        const searchInput = document.getElementById('searchInput');
        const personalContactsContainer = document.getElementById('personal-contacts-container');

        const filterContacts = () => {
            const filterValue = filterSelect.value;
            const contacts = personalContactsContainer.querySelectorAll('.personal-contacts');

            contacts.forEach(contact => {
                const name = contact.querySelector('.name').textContent;
                if (filterValue === 'All' || name.startsWith(filterValue)) {
                    contact.style.display = 'flex';
                } else {
                    contact.style.display = 'none';
                }
            });
        };

        filterSelect.addEventListener('change', filterContacts);

        clearFilter.addEventListener('click', () => {
            filterSelect.value = 'All';
            filterContacts();
        });

        const searchContacts = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const contacts = personalContactsContainer.querySelectorAll('.personal-contacts');

            contacts.forEach(contact => {
                const name = contact.querySelector('.name').textContent.toLowerCase();
                if (name.includes(searchTerm)) {
                    contact.style.display = 'flex';
                } else {
                    contact.style.display = 'none';
                }
            });
        };

        searchBtn.addEventListener('click', searchContacts);

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchContacts();
            }
        });


    
})