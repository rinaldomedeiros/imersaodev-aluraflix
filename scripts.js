function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if(validaLink(filmeFavorito)){
    listaFilmesNaTela(filmeFavorito)
  }    
  campoFilmeFavorito.value = ""
}

function listaFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = atualizaLink(filme)
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function atualizaLink(link){
  var linkAtualizado = "https://www.youtube.com/embed/"
  linkAtualizado = linkAtualizado + link.substr(32)
  console.log(linkAtualizado)
  var filme = '<iframe width="560" height="315" src="' + linkAtualizado + '" title="YouTubevideo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  return filme
}
  
function validaLink(link) {
  if(link.startsWith("https://www.youtube.com/watch?v=")){
    return true
  }else{
    alert("Link Inválido!")
    return false
  }
} 
