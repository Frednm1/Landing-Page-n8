$(function(){
        $('#hamburger').click(function(){
            menuContent = $('.menu-mobile-content').css('display')
            if(menuContent == "none"){
                $('.menu-mobile-content').fadeIn()
                document.getElementById('hamburger').src = "img/close.png"
            }else{
                $('.menu-mobile-content').fadeOut()
                document.getElementById('hamburger').src = "img/hamburger.png"
            }
        })
    })


    
    function trocaPlano(){
        var select = document.getElementById("select")
        var elemento1 = document.getElementById("elemento-plano1")
        var elemento2 = document.getElementById("elemento-plano2")
        var elemento3 = document.getElementById("elemento-plano3")
        var elemento4 = document.getElementById("elemento-plano4")
        current = select.value
        if (current == 'Plano1'){
            elemento2.classList.remove('visivel')
            elemento3.classList.remove('visivel')
            elemento4.classList.remove('visivel')

            elemento2.classList.add('invisivel')
            elemento3.classList.add('invisivel')
            elemento4.classList.add('invisivel')

            elemento1.classList.add('visivel')
            elemento1.classList.remove('invisivel')
        }else if(current == 'Plano2'){
            elemento1.classList.remove('visivel')
            elemento3.classList.remove('visivel')
            elemento4.classList.remove('visivel')

            elemento1.classList.add('invisivel')
            elemento3.classList.add('invisivel')
            elemento4.classList.add('invisivel')

            elemento2.classList.add('visivel')
            elemento2.classList.remove('invisivel')
        }else if(current =='Plano3'){
            elemento2.classList.remove('visivel')
            elemento1.classList.remove('visivel')
            elemento4.classList.remove('visivel')

            elemento1.classList.add('invisivel')
            elemento2.classList.add('invisivel')
            elemento4.classList.add('invisivel')

            elemento3.classList.add('visivel')
            elemento3.classList.remove('invisivel')
        }else if(current == 'Plano4'){
            elemento2.classList.remove('visivel')
            elemento3.classList.remove('visivel')
            elemento1.classList.remove('visivel')

            elemento2.classList.add('invisivel')
            elemento3.classList.add('invisivel')
            elemento1.classList.add('invisivel')

            elemento4.classList.add('visivel')
            elemento4.classList.remove('invisivel')
        }
    }