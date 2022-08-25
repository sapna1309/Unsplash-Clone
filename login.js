let getData = JSON.parse(localStorage.getItem("signup-data"));

document.querySelector("form").addEventListener("submit",function(event){
 event.preventDefault();
 
 let email = document.querySelector("#dEmail").value;
 let pswd = document.querySelector("#dPSWD").value;

 if(email==getData.Email && pswd==getData.Password){
    window.location.href="index.html";
 }else{
   alert("Invalid email or password");
 }
})