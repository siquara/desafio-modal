const button = document.getElementById('openModal')
const divEsc = document.querySelector('.modal-wrapper')
console.log(divEsc)


button.onclick = function tiraBotaClasse(){
    divEsc.classList.toggle('invisible')
}

document.addEventListener( 'keydown', function( event ){
    const Esc = event.key === 'Escape' 
    if(Esc){
        divEsc.classList.toggle('invisible')
    }
})