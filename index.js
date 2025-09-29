//4rd
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
// result = words.filter((word)=> word.length >6);
// console.log(result);


//6rd
const people = [
    {name: "Anna", age:17},
    {name: "Karen", age: 20},
    {name: "Ella", age:12},
    {name:"Erik" age:30},
]
result = people.find((person) =>person.age > 18 );
result =people.filter((person) => person.age >= 18);
result = people.map((person) => person.name);