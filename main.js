const endDate = "01 junuary 2023 12:00 AM";

document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input") ;
const  clock =()=>{
const end = new Date(endDate);
const now = new Date();
const diff = (end - now)/ 1000
if (diff<0) return;    
inputs[0].value = Math.floor(diff/ 3600 /24);
inputs[1].value = Math.floor(diff/ 3600) % 24;
inputs[2].value = Math.floor(diff/ 60)%60;
inputs[3].value = Math.floor(diff)%60;
}
 setInterval(
    () =>{
       clock()
    },1000
 );