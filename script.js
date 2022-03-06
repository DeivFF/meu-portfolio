function typeWrite(elemento){
    const nomeArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    nomeArray.forEach((nome, index)=> {
        setTimeout(function(){
            elemento.innerHTML += nome;
        }, 80 * index)
    })
}
typeWrite(document.querySelector(".write"))

const botao01 = document.querySelector("#info01")
const botao02 = document.querySelector("#info02")
const botao03 = document.querySelector("#info03")


// função para saber se tal elemento possui alguma classe

Node.prototype.hasClass = function(value) {
    var
        has = true,
        names = String(value).trim().split(/\s+/);

    for(var i = 0, len = names.length; i < len; i++){
        if(!(this.className.search(new RegExp('(?:\\s+|^)' + names[i] + '(?:\\s+|$)', 'i')) > -1)) {
            has = false;
            break;
        }
    }
    return has;
};


function informacao01(){
    document.querySelector("#html-formulario-formulario").textContent = "43,8%"
    document.querySelector(".barra-de-progresso-dentro01").style.width = "43.8%"

    document.querySelector("#css-porcentagem-formulario").textContent = "50,1%"
    document.querySelector(".barra-de-progresso-dentro02").style.width = "51.1%"

    document.querySelector("#js-porcentagem-formulario").textContent = "6.1%"
    document.querySelector(".barra-de-progresso-dentro03").style.width = "6.1%"

    /**document.querySelector("#conteudo").textContent = "Formulário feito em javascript, html + css, com o foco mais na estilização e"**/
}
/**botao01.addEventListener("click", informacao01)*/
botao01.onclick = () => {
    if(botao02.hasClass("fa-xmark") || botao03.hasClass("fa-xmark")){
        botao02.classList.remove("fa-xmark")
        botao03.classList.remove("fa-xmark")
    }
    informacao01()
    document.querySelector(".detalhes").classList.toggle("active")
    botao01.classList.toggle("fa-xmark")
    
}


function informacao02(){
    document.querySelector("#html-formulario-formulario").textContent = "77.5%"
    document.querySelector(".barra-de-progresso-dentro01").style.width = "77.5%"

    document.querySelector("#css-porcentagem-formulario").textContent = "21.3%"
    document.querySelector(".barra-de-progresso-dentro02").style.width = "21.3%"

    document.querySelector("#js-porcentagem-formulario").textContent = "1.2%"
    document.querySelector(".barra-de-progresso-dentro03").style.width = "1.2%"

    /**document.querySelector("#conteudo").textContent = "Formulário feito em javascript, html + css, com o foco mais na estilização e"**/

}
/**botao02.addEventListener("click", informacao02)*/
botao02.onclick = () => {
    if(botao01.hasClass("fa-xmark") || botao03.hasClass("fa-xmark")){
        botao01.classList.remove("fa-xmark")
        botao03.classList.remove("fa-xmark")
    }
    informacao02()
    document.querySelector(".detalhes").classList.toggle("active")
    botao02.classList.toggle("fa-xmark")
}



function informacao03(){
    document.querySelector("#html-formulario-formulario").textContent = "55.8%"
    document.querySelector(".barra-de-progresso-dentro01").style.width = "55.8%"

    document.querySelector("#css-porcentagem-formulario").textContent = "43.5%"
    document.querySelector(".barra-de-progresso-dentro02").style.width = "43.5%"

    document.querySelector("#js-porcentagem-formulario").textContent = "0.7%"
    document.querySelector(".barra-de-progresso-dentro03").style.width = "0.7%"

    /**document.querySelector("#conteudo").textContent = "Formulário feito em javascript, html + css, com o foco mais na estilização e"**/

}
/**botao03.addEventListener("onmouseover", informacao03)*/

botao03.onclick = () => {
    if(botao02.hasClass("fa-xmark") || botao01.hasClass("fa-xmark")){
        botao02.classList.remove("fa-xmark")
        botao01.classList.remove("fa-xmark")
    }
    informacao03()
    document.querySelector(".detalhes").classList.toggle("active")
    botao03.classList.toggle("fa-xmark")
    
}