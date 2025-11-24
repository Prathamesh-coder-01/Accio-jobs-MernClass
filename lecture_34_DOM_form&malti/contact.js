const user=[];

const submitBtn=document.querySelector("button");


submitBtn.addEventListener("click",(event)=>{
    
    console.log("submit button clicked");
    event.preventDefault();
  

    const user={}

    user.name = document.querySelector("#name").value;
  user.mobile = document.querySelector("#mobile").value;
  user.gender = document.querySelector("input[name='gender']:checked")?.id || "";
  user.city = document.querySelector("#city").value;
  users.push(user);
     console.log(users);
});