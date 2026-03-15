// 1. Evento window.onload (Ensinado na Aula 5/6)
// Garante que o JS só rode depois que a página carregar inteira
window.onload = function() {
    
    // 2. Uso do querySelector e manipulação de estilo (Ensinado na Aula 6)
    // Vamos mudar a cor do seu nome via JavaScript para provar que você sabe manipular o DOM
    let titulo = document.querySelector("#titulo-principal");
    titulo.style.color = "#086bdd"; 
    
    // 3. Uso do getElementById (Ensinado na Aula 6)
    const formulario = document.getElementById('form-contato');

    // 4. Adicionando evento de submit
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        // Capturando valores
        const nome = document.getElementById('nome').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação simples
        if (nome === '' || mensagem === '' || mensagem === 'Sua mensagem...') {
            alert('Por favor, preencha seu nome e escreva uma mensagem válida.');
            return;
        }

        // 5. Manipulação de propriedades do DOM (Ensinado na Aula 6)
        // Vamos alterar o texto e a cor do botão para mostrar que foi enviado
        let botao = document.getElementById('btn-enviar');
        botao.value = "Enviado com sucesso!";
        botao.style.backgroundColor = "green";

        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Nos vemos na estrada!`);

        // Limpa o formulário
        formulario.reset();
        
        // Retorna o botão ao estado original após 3 segundos
        setTimeout(function() {
            botao.value = "Enviar Mensagem";
            botao.style.backgroundColor = "#333333";
        }, 3000);
    });
};