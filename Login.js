//JORGE EXPLICAS ESTO TODO 

var inten=3;
var user1="dam";
var pass1=123;
function validate (){
    var username= document.getElementById("username").value;
    var pass= document.getElementById("password").value;

    if(username == user1 && pass == pass1){

        alert("DATOS CORRECTOS");
        window.location="tienda.html";
        return false;
        
    }else{
        inten--;

        alert("Tienes disponible:"+inten+"intentos");
        if(inten == 0){
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
           alert("NO RECURDAS TU CONTRASEÑA DALE CLIC A RECUPERAR CLAVE");
            return false;
        }
        
        }
        
    }

   function MostrarUs(validate){
    x=prompt("Ingresar tu número de celular");
    if(x== 8121714183 | x== 123){
        alert("Tu Username es: \n"+user1 + "\n Tu password es: \n"+pass1);
       
    }else{
        alert("Número no encontrado en la BD intente de nuevo");
    }
   }

 



  // Cookie para guardar Usuario

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Hola" + user);
    } else {
       user = prompt("Ingrese su nombre de usuario:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }