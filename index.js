const loadUser =()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
    .then(data => {
showUser(data)
    })
}



const showUser = (users)=> {

 for (let user of users){
     
     const li = document.createElement("li");
     li.innerText= user.email ;
     const userContainer= document.getElementById("user-details");
     userContainer.appendChild(li)
 }
}