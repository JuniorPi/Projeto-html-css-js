/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    
     Passo 1 - paegar o botão mostrar masi no JS  pra poder verificar quando o usuário clicar em cima dele

     Passo 2 - Identificar o clique no botão 

     Passo 3 - adionar a classe "ativo" nos projetos escondidos
     
     Objetivo 2 - esconder o botão de monstrar mais 
     Passo 1 - pagar o botão e esconder ele
*/
//bjetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - paegar o botão mostrar masi no JS  pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {

     mostrarMaisProjetos();

     esconderBotao();

})
function esconderBotao() {
     botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
     projetosInativos.forEach(projetoInativo => {
          projetoInativo.classList.add('ativo');
     });
}

