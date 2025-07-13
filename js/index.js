//script para o slider de imagens na página inicial
var radio = document.querySelector('.manual-btn')
var count = 1

document.getElementById('radio1').checked = true // seleciona o primeiro radio button como marcado

setInterval(() => {
    nextImg()
}, 5000) // muda a imagem a cada 5 segundos

function nextImg() {
    count++
    if (count > 3){ // se caso for 4, vai ficar uma img em branco pq só temos 3 imagens
        count = 1 // reseta o contador se passar do número de imagens
    }

    document.getElementById('radio' + count).checked = true
}