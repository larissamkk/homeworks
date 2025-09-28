let person = {
    name: "Larissa",
    age: 17,
    city: "Yerevan",
}
person.isStudent = true;
delete person.city;
console.log("age" in person);


// erkrord
function undefined(object){
    for(key in obj){
        if(obj[key]===undefined){
            delete obj[key];
        }
    }
}
  let  obj = {
        key1: 'hello',
        key2: undefined,
        key3: 123,
        key4: undefined,

    }
let und = undefined(obj);
console.log(und);