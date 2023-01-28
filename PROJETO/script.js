function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('lighty')
  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('lighty')){
    // se tiver lighty mode, adicionar a imagem lighty
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    // se tiver sem lighty mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}