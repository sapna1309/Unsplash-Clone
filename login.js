let getData = JSON.parse(localStorage.getItem("signup-data"));

document.querySelector("form").addEventListener("submit",function(event){
 event.preventDefault();
 
 let email = document.querySelector("#dEmail").value;
 let pswd = document.querySelector("#dPSWD").value;
 getData.map(function(el){
    
  if(email==el.Email && pswd==el.Password){
    window.location.href="index.html";
 }else{
   document.querySelector(".alert").style.display="flex";
 }
 })
  document.querySelector("#close").addEventListener("click",function(){
  document.querySelector(".alert").style.display="none";
 })
})