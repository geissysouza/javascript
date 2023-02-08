function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos`

if(hora>= 0 && hora < 12){
    //BOM DIA!
    img.src = 'imagens/manhã.jpg'
    document.body.style.background = '#588157'
} else if (hora>= 12 && hora <18) {
//BOA TARDE! 
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#dda15e'
} else {
    // BOA NOITE!
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#14213d'
}
   

}