function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('campo')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Ano digitado invalido!')
    }else { 
        var fsex = document.getElementsByName('sexof')
        var idades = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idades} anos`

    }

    }
       
        
    
