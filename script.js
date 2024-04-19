function repositorio(url) {
    window.open(url, '_blank')
}

function demo(url) {
    window.open(url, '_blank')
}

function enviar_Email() {
    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const assunto = document.getElementById('assunto').value
        const mensagem = document.getElementById('mensagem').value
        const alert = document.getElementById('alert')

        const corpoMensagem = `
            Nome: ${nome}
            Email: ${email}
            Assunto: ${assunto}
            
            Mensagem:
            ${mensagem}`

        
        alert.innerHTML = 'Mensagem enviada com sucesso!!'
        // alert(`Email Enviado com Sucesso!!\n\n ${corpoMensagem}`)

        document.getElementById('nome').value = ''
        document.getElementById('email').value = ''
        document.getElementById('assunto').value = ''
        document.getElementById('mensagem').value =''
    })
}