function carregar(){
var lala = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

lala.innerHTML = `Agora são ${hora} horas. `
if (hora>=0 && hora < 12){
    img.src='manha.png'
    document.body.style.background='#e2cd9f'
//bom dia
}else if(hora>=12 && hora < 18){
    img.src='tarde.png'
//boa tarde
} else{
    img.src='noite.png'
//boa noite
 }
   
}