var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 6) {
    console.log('Boa Madrugada')
} else if (hora >= 6 && hora < 12) {
    console.log('Bom Dia')
} else if (hora >= 12 && hora < 19) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}