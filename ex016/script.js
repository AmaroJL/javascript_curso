function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //Atribuindo um id para img

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img) //Adiciona a img na div
    }
}