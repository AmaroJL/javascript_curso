var valores = []
var num = document.getElementById('txtn')
var tab = document.getElementById('selnum')
var res = document.getElementById('res')

function adicionar() {    
    var item = document.createElement('option')

    if (num.value.length == 0 || valores.indexOf(Number(num.value)) != -1 || num.value < 1 || num.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista!')
        num.value = ''
    } else {
        var n = Number(num.value)
        valores.push(n)
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        num.value = ''
        res.innerHTML = ''
    }
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<br>Ao todo, foram ${valores.length} valores cadastrados.<br><br>
        O maior valor informado foi ${maior(valores)}.<br><br>
        O menor valor informado foi ${menor(valores)}.<br><br>
        Somando todos os valores, temos ${soma(valores)}.<br><br>
        A média dos valores digitados é ${media(valores)}.`
    }
}

function maior(array) {
    let mai = 0
    for (let pos in array) {
        if (array[pos] > mai) {
            mai = array[pos]
        }
    }
    return mai
}

function menor(array) {
    let men = 0
    for (let pos in array) {
        if (array[pos] < men || men == 0) {
            men = array[pos]
        }
    }
    return men
}

function soma(array) {
    let s = 0
    for (let pos in array) {
        s += array[pos]
    }
    return s
}

function media(array) {
    let s = 0
    for (let pos in array) {
        s += array[pos]
    }
    return s/array.length
}
