function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        //BOM DIA
        img.src = 'manha-site.png'
        document.body.style.background = '#80bdee'
    } else if (hora < 18) {
        //BOA TARDE
        img.src = 'tarde-site.png'
        document.body.style.background = '#e07622'
    } else {
        //BOA NOITE
        img.src = 'noite-site.png'
        document.body.style.background = '#352844'
    }
}