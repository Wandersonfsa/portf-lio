var menuTop = document.querySelector(".menuTop") //seleciona a classe dentro do html

menuTop.addEventListener("click", function(){ //quando acontecer o evento de click ele vai executar a função
    document.querySelector(".container").classList.toggle("show-menu")//pegar o elemento sidebar a partir da lista de classes fazer uma alteração, adicionar ou remover
})