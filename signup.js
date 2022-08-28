document.querySelector("form").addEventListener("submit",addDetails);

let dataArr = [];
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
  
 if(dataObj.Password.length>=8){
    window.location.href="login.html";
    }
   else{
    document.querySelector("#pswd").style.borderColor="red";
    document.querySelector("#ps").style.color="red";
    document.querySelector("#chr").style.color="red";
  if(dataObj.First_Name==""){
    document.querySelector("#firstname").style.borderColor="red";
    document.querySelector("#fn").style.color="red";
  }
  if(dataObj.Last_Name==""){
    document.querySelector("#lastname").style.borderColor="red";
    document.querySelector("#ln").style.color="red";
  }  
  if(dataObj.Email==""){
    document.querySelector("#email").style.borderColor="red";
    document.querySelector("#em").style.color="red";
  }
  if(dataObj.Username==""){
    document.querySelector("#username").style.borderColor="red";
    document.querySelector("#un").style.color="red";
    document.querySelector("#user").style.color="red";
  }
  
}
};


