var card =document.getElementById("card");

function openRegister(){
    card.style.transform ="rotateY(0deg)"
}
function openLogin(){
    card.style.transform ="rotateY(-180deg)"
}


var email=document.forms['Lf']['em'];
var password=document.forms['Lf']['ps'];
function val(e){
    e.validateDefault();
    
}
document.querySelectorAll('#Lf input').forEach(e => {
    e.addEventListener('keyup',function(event){
        if(!email.validity.valid || !password.validity.valid){
            btn1.setAttribute('disabled',true)


    }
    else{
        btn1.removeAttribute('disabled',true);
    }
})
    
});