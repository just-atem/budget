//OBJECT DESTRUCTURING

const person = {
    name: "Vanessa",
    age: 23,
    location:{
        city: "Berlin",
        temp: 89
    }
};
// const { temp, city } = person.location;
// console.log(temp);
// console.log(city);
const { name } = person;
// console.log(name);

//ARRAY DESTUCTURING 
const address = ['490 Hudgens St', 'Berlin', 'Germany', '23TFDS'];
// console.log(address[1]);

const [street, myspot, place, code] = address;
console.log(myspot);