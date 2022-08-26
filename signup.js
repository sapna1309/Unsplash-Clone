document.querySelector("form").addEventListener("submit",addDetails);

let dataArr = JSON.parse(localStorage.getItem("signup-data")) || [];
function addDetails(event){
event.preventDefault();

let dataObj = {
    First_Name:document.querySelector("#firstname").value,
    Last_Name:document.querySelector("#lastname").value,
    Email:document.querySelector("#email").value,
    Username:document.querySelector("#username").value,
    Password:document.querySelector("#pswd").value,
}

dataArr.push(dataObj);

localStorage.setItem("signup-data",JSON.stringify(dataArr));

dataArr.map(function(el){
    if(el.Password.length>=8){
    window.location.href="index.html";
    }

})

};