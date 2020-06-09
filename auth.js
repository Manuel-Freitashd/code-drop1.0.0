var email = document.querySelector("#email")
var pass = document.querySelector("#pass")

function auth(){
    validEmail()
     validPass()
}
function validEmail(){
    var emails=email.value
    var  valid = /\w+@\w+\.\w{2,3}/.test(emails)
    
    if(valid===true)
        {
            alert("valido")
        }
    else
        {
            alert("invalido")
        }
  
    
} 
function validPass(){
    var vpass = pass.value
    if (vpass.lenght>=6 && vpass.lenght<=10) {
        alert("serto")
    }else{
        alert("errado")
    }

  alert(vpass.lenght)
}
var email = document.querySelector("#email")
var rmail = document.querySelector("#rmail")
var pass = document.querySelector("#pass")
var rpass = document.querySelector("#rpass")

function auth(){
     
    validEmail()

   validPass()
}
function validEmail(){
    var emails=email.value
    var  valid = /\w+@\w+\.\w{2,3}/.test(emails)
     var span = rmail
    var error ="Apalavra pass de conter 6 ou mais caracteris!!"
    var serto ="Pass correta, seva bem-vindo!!"
    if(valid===true)
        {
            span.append(serto)
        }
    else
        {
            span.append(error)
        }
  
    
} 
function validPass(){
    var vpass = pass.value
    var span = rpass
    var error ="Apalavra pass de conter 6 ou mais caracteris!!"
    var serto ="Pass correta, seva bem-vindo!!"
    if (vpass.lenght>=6 && vpass.lenght<=10){
        span.append(serto)
    }else{
       span.append(error)
    }
}


