let getData = JSON.parse(localStorage.getItem("signup-data"));

document.querySelector("form").addEventListener("submit",function(event){
 event.preventDefault();
 
 let email = document.querySelector("#dEmail").value;
 let pswd = document.querySelector("#dPSWD").value;
 getData.map(function(el){
    
  if(email==el.Email && pswd==el.Password){
    window.location.href="homepage.html";
    document.querySelector(".alert").style.display="none";
 }else{
   document.querySelector(".alert").style.display="flex";
   document.querySelector("#dEmail").style.borderColor="red";
   document.querySelector("#dPSWD").style.borderColor="red";
   document.querySelector("#e").style.color="red";
   document.querySelector("#p").style.color="red";


 }
 })
  document.querySelector("#close").addEventListener("click",function(){
  document.querySelector(".alert").style.display="none";
 })
})