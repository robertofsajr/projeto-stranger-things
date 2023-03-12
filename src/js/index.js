/* OBJETIVO - quando clicar no botão mudar a imagem respectivo de cada botão

- passo 1 - dar um jeito de pegar  o elemento HTML dos botões

- passo 2 - dar um jeito de identificar o clique do usuário no botão

- passo 3 -desmarcar o botão selecionado anterior

- passo 4 - marcar o botão clicando como se estivesse selecionado

- passo 5 - esconder a imagem de fundo anteiror

- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');



botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        

        desativarBotaoSelecionado();

        

        selecionarBotaoCarrossel(botao);

       

        esconderImagemAtiva();

      

       
        mostrarImagemDeFundo(indice);
        
        

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
