const person ={
    age: 10,
    name: 'arif',
    married: true,
    friends:['topu', 'rabbi', "robiul"],
    qualification: {
        graduation: true,
        passingYear:2018,
        job: "web developer"
    }
}



console.log(person)
const newPerson= JSON.stringify(person);
console.log(newPerson);



const newPerson2= JSON.parse(newPerson);
console.log(newPerson2)


const array= [2,4,56,4];
const newArray= JSON.stringify(array);
console.log(newArray)