
//  const loadData = async () => {  }
    
async function loadData(){
    console.log('number 1');
    console.log("number 2");

  try {
    const response  =await fetch("https://jsonplaceholder.typicode.com/todos")

    const data=await  response.json();
    console.log(data)
  }
 catch{
    console.log("error")
 }

/* fetch("https://jsonplaceholder.typicode.com/todos")
.then (response => response.json())
.then (data => {
    console.log(data)
}) */


 console.log("number4");
 console.log("number5");

}








const loadData2= async () => {
    console.log("1")

try {
    const response =await fetch ("https://jsonplaceholder.typicode.com/todos")
const data =await  response .json();
console.log(data)
}
catch {
console.log("bhul")
}




    console.log("3")
}

loadData()
loadData2()






