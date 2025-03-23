const getAlbum = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then( data => {
    showAlbum(data)

    })
}

const showAlbum= (albums) => {
    
    const albumContainer= document.getElementById("album-container");
    for(let album of albums){
     const div= document.createElement("div");
     div.innerHTML=`
     <h2>${album.title} </h2>
     <p> ${album.id} </p>
    
     `
     albumContainer.appendChild(div);
     div.classList.add("card")
    }
}


getAlbum()

