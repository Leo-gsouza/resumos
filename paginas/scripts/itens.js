var icone = document.getElementById('icon')
var itens = document.getElementById('itens')

icone.addEventListener('click', function(){
    if (itens.style.display == 'block')
        itens.style.display = 'none'
    else{itens.style.display = 'block'}
})