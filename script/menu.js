


function clicar(botao, efeitoId){
    var botaoId = botao.id
    var efeito = document.getElementById(efeitoId)

    botao.style.background = '#01C38E'
    botao.style.color = '#132D46'
    botao.style.boxShadow = '2px 2px 5px black'
    botao.style.scale = '1.01'
    efeito.play()
    
    if( botaoId == 'botao1'){
        efeito.onended = function(){
            location.href = 'paginas/python3.html'
        }

    }else if( botaoId == 'botao2'){
        efeito.onended = function(){
            location.href = 'paginas/html5.html'
        }
    }else if (botaoId == 'botao3'){
        efeito.onended = function(){
            location.href = 'paginas/css3.html'
        }
    }else if( botaoId == 'botao4'){
        efeito.onended = function(){
            location.href = 'paginas/javaScript.html'
        }
    }
}