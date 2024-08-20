function cadastro() {
    // Obter os valores do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let tipo = document.getElementById('tipo').value;

    // Criar um novo documento XML
    let xmlDoc = document.implementation.createDocument(null, "usuarios");

    // Criar elementos e adicionar valores do formulário
    let usuario = xmlDoc.createElement('usuario');

    let nomeElement = xmlDoc.createElement('nome');
    nomeElement.textContent = nome;
    usuario.appendChild(nomeElement);

    let emailElement = xmlDoc.createElement('email');
    emailElement.textContent = email;
    usuario.appendChild(emailElement);

    let tipoElement = xmlDoc.createElement('tipo');
    tipoElement.textContent = tipo;
    usuario.appendChild(tipoElement);

    // Adicionar o usuário ao documento XML
    xmlDoc.documentElement.appendChild(usuario);

    // Converter o documento XML em uma string
    let serializer = new XMLSerializer();
    let xmlString = serializer.serializeToString(xmlDoc);

    // Enviar o XML para o servidor
    let request = new XMLHttpRequest();
    request.open('POST', 'url_do_servidor_para_receber_o_xml', true);
    request.setRequestHeader('Content-Type', 'application/xml');
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status == 200) {
                console.log('Usuário cadastrado com sucesso');
            } else {
                console.log('Erro ao cadastrar usuário');
            }
        }
    };
    request.send(xmlString);
}
