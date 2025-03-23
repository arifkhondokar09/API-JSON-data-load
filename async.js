/* const handleUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
  
    .then(response => response.json())
    .then ( data => console.log(data))

    .catch(error => console.log("hello"))
}

handleUser()


console.log(10);
console.log(100)



/* 

const handleUser2 =async () => {
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data)
}
handleUser2() */






/* 
const handleUser2 =async () => {
   try{
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    console.log(data)
    

   }
   catch{

    console.log("tumar kothao  bhul hoise")
   }
}

handleUser2()

 */ 



const  handleData = async () => {
    console.log("number 1")
    console.log("number 2")
  
 try{const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await  response.json();
    console.log("data", data);

 }
catch{
console.log("error")
}
 


    console.log("number 4")
}

handleData ()