document.querySelector("input").addEventListener("click",function(){ 
    document.querySelector("#suggetion").style.display="block";
    document.querySelector("#sdiv").style.backgroundColor="white"; 
    document.querySelector("#search-bar").style.backgroundColor="white"; 
    
   })
   document.querySelector("#close").addEventListener("click",function(){
       document.querySelector("#suggetion").style.display="none";
       document.querySelector("#sdiv").style.backgroundColor="#EEEE"; 
    document.querySelector("#search-bar").style.backgroundColor="#EEEE"; 
   })