let llist=document.getElementById("list");
let request=new XMLHttpRequest();
request.open("GET","https://foodbukka.herokuapp.com/api/v1/restaurant");
request.send();
request.addEventListener("load",function(){
  let restaurant=JSON.parse(request.responseText);
  restaurant.Result.forEach(function(i){
    let ele=document.createElement("h3");
    ele.innerText=i.businessname;
llist.appendChild(ele);
  })
})