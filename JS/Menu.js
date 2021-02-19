var  nav = document.getElementById('nav');
//getElementById por el Id del nav
window.onscroll = function(){

    if(screen.width < 810){
        if (window.pageYOffset >= 0) {
            nav.style.background = "rgba(44, 40, 40, 0.863)";  
            nav.style.boxShadow = "0px 2px 6px black";
        }    
    }
    if(screen.width >= 810){
        if (window.pageYOffset >40) {
            nav.style.background = "rgba(44, 40, 40, 0.863)";  
            nav.style.boxShadow = "0px 2px 6px black";
        }   
        else{
            nav.style.background = "transparent";    
            nav.style.boxShadow = "none";        
        }
    }    
}
