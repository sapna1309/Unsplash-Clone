document.querySelector("#search-input").addEventListener("click",function(){ 
 document.querySelector("#suggetion").style.display="block";
 document.querySelector("#sdiv").style.backgroundColor="white"; 
 document.querySelector("#search-input").style.backgroundColor="white"; 
 
 let value = document.querySelector("#search-input").value;

 if(value=="background image"){
    window.location.href="https://unsplash.com/backgrounds";
 };
})
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector("#suggetion").style.display="none";
    document.querySelector("#sdiv").style.backgroundColor="#EEEE"; 
 document.querySelector("#search-input").style.backgroundColor="#EEEE"; 
})

let count=0;
   document.querySelector(".like").addEventListener("click",function(event){
    event.preventDefault();
    count++;
    if(count==1){
        document.querySelector(".like").style.backgroundColor="red";
        
    }
    if(count>1){
        document.querySelector(".like").style.backgroundColor="white";
        
    }
    })
   
// image pop up
document.querySelector(".plus").addEventListener("click",function(event){ 
event.preventDefault();
document.querySelector("#show-popup").style.display="block";
});
document.querySelector("#close-btn").addEventListener("click",function(){
document.querySelector("#show-popup").style.display="none";
});


function uploadphoto(){
document.querySelector("#outerbox").style.display="block";
};

document.querySelector("#check").addEventListener("click",function(){
    document.querySelector("#upload").style.backgroundColor="black";  
    document.querySelector("#upload").style.color="white"; 
})
let getdata = JSON.parse(localStorage.getItem("signup-data"));

     getdata.map(function(el){
     let hi = document.querySelector("#hii").innerText;
    document.querySelector("#content>div>h1").innerText=`Hii ${el.First_Name} ${hi}`;
   })

   document.querySelector("#upload").addEventListener("click",function(){
    document.querySelector("#outerbox").style.display="none"; 
   })
   document.querySelector("#threeline").addEventListener("click",function(){
    document.querySelector("#profile").style.display="block";
   })
   
   function logout(){
    document.querySelector("#profile").style.display="none";
    window.location.href="index.html";
   }
