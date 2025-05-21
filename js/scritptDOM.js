// function CalcularMedia() {
//     const nomeAluno = document.getElementById("nomeAluno").value;
//     const nota1 = parseFloat(document.getElementById("nota1").value);
//     const nota2 = parseFloat(document.getElementById("nota2").value);
//     const nota3 = parseFloat(document.getElementById("nota3").value);
//     const nota4 = parseFloat(document.getElementById("nota4").value);

const { createElement } = require("react");

//     let media = (nota1 + nota2 + nota3 + nota4) / 4;

//     document.getElementById("mediaAluno").value = media.toFixed(2);

//     if (media >= 7) {
//         document.getElementById("situacaoAluno").value = "Aprovado";
//     } else if (media >= 5) {
//         document.getElementById("situacaoAluno").value = "Em Recuperação";
//     } else {
//         document.getElementById("situacaoAluno").value = "Reprovado";
//     }
// }

function executarTestes() {  
    // Pegar conteudo de um elemento de formulario utilizando ID (o que esta dentro dele, ex: nome = augustinho, ele com o .value vai devolver "augustinho")
    let conteudoImput = document.getElementById("nomeAluno").value;
    
    // Pegar o elemento de formulario utilizando ID (sem o .value, ele vai pegar a tag em si, ou seja, a "box" permitindo assim a gente modificar o tamanho da caixa, cor, etc.)
    let imput = document.getElementById("nomeAluno");
    
    // Pegar conteudo de um elemento de formulario utilizando Classe - nota4 (para descobrir a possição no array do elemento, tag e tals, utilize no console do navegador: document.getElementsByClassName("form__textbox");)
    let nota4 = document.getElementsByClassName("form__textbox")[4].value;

    // Pegar conteudo de um elemento de formulario usando a tag - a nota 2
    let nota2 = document.getElementsByTagName("input")[2].value;

    // Pegar um elemeto da tag - a tag p (value serve apenas para conteudo de formulario, no caso o valor, e para pegar um txt eu uso .textContent ou .innerHTML)

    let conteudoP = document.getElementsByTagName("p")[0].textContent;

    // Mudar o valor de um elemento - nome - colocar Augustinho
    let result = document.getElementById("nomeAluno").value = "Augustinho";

    // Mudar o valor de um elemento tag - a tag p - trocar para "Avaliação final do aluno" 
    let avaliacao = document.getElementsByTagName("p")[0].textContent = "Avaliação final do aluno";

    // inserir <li> em uma <ul> preexistente

    // SUBISTITUIÇÃO
    // const ul = document.getElementById("lista");
    // ul.innerHTML = "<li> first </li>";

    // ACRESCENTAÇÃO
    let ul2 = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.innerHTML = "txt";
    ul2.appendChild(li);

    // Mudar a cor da letra do elemento p - utilizando a propriedade style
    let cor = document.getElementsByTagName("p")[0];
    cor.style.color = "red";

    // Mudar a cor de fundo do formulario - utilizando a propriedade style
    let corFundo = document.getElementById("form");
    corFundo.style.backgroundColor = "blue"

    // document.querySelector("p, .class, #id") pega o primeiro item que possui o item, seja tag. class ou id
    
    //              document.querySelector("tag  .class  #id");

    // document.querySelectorAll("p, .class, #id") pega um arrey dos itens, resumindo, pega tudo relacionado ao itens, seja tag, class ou id, e id n deve haver mais de um no cod

    //              document.querySelectorAll("tag  .class  #id");
}