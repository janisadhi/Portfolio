function jan(){
   var a= document.getElementById("details").style.display;
   if(a=="none"){
    document.getElementById("details").style.display="flex";
    document.getElementById("btnn").innerHTML="Hide details<<";

   }
   else{
    document.getElementById("details").style.display="none";
    document.getElementById("btnn").innerHTML="View details>>";


   }
}
function sidebar(){
    var toogle=document.getElementById("sidebar").style.display;
    if(toogle=="none"){
        document.getElementById("sidebar").style.display="flex"
    }
    else{
        document.getElementById("sidebar").style.display="none";
    }
}
