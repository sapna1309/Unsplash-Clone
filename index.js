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
   let count=0;
   document.querySelector(".likes").addEventListener("click",function(event){
    event.preventDefault();
    count++;
    if(count==1){
        document.querySelector(".likes").style.backgroundColor="red";
    }
    if(count>1){
        document.querySelector(".likes").style.backgroundColor="white";
    }
    })
   