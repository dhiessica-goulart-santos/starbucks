let imagem = document.querySelector(".imagem-copo")
    circulo = document.querySelector(".circulo")

console.log(imagem)

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaCor(cor){
    circulo.style.background = cor
}


