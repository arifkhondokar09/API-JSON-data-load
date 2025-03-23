const loadPost= ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then (Response => Response.json())
    .then (data => {
     showPost (data)
    })
}


const showPost = (posts) => {
   for(let post of posts){
  
    const postContainer= document.getElementById("post-container");

     const para= document.createElement("p");
    para.textContent= post.body;
    postContainer.appendChild(para) ;
    para.classList.add("card")

/* 
    const div= document.createElement("div");
   
    div.innerHTML=`
    <h2>${ post.title}</h2>
    <p>${ post.body}<p/>
    <button> click $n </button>
    `
 
     postContainer.appendChild(div);

    div.classList.add("card")
 */

   }
}

