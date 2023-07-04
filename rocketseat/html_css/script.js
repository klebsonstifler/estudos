function toggleMode() {
    const html = document.documentElement

    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}
//}

    html.classList.toggle('light') // faz a mesma função da condição acima

    //pegar a tag img
    const img = document.querySelector('#profile img')
    
    //substituir a image
    if(html.classList.contains('light')) {
    //se tiver light mode, adiciona a image light
        img.setAttribute('src', './assets/avatar-light.png')
    
    } else {
    // se tiver sem light mode, adiciona a image normal
    img.setAttribute('src', './assets/avatar.png')    
    }
}