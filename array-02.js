// const marvel_heros=["thor","ironman","spiderman"]
// const dc_heros=["batman","superman","joker"]

// // marvel_heros.push(dc_heros) //return same array
// // console.log(marvel_heros);

// // all_heros=marvel_heros.concat(dc_heros) //return new array
// // console.log(all_heros);



// all_newheros=[...marvel_heros,...dc_heros]
// console.log(all_newheros);



// const another_array=[1,2,3,[4,5,6],7,[5,6,[7,8,9]]]
// const real_another_array=another_array.flat(Infinity) //flat return new array
// console.log(real_another_array);




// console.log(Array.isArray("sarthak"));
// console.log(Array.from("sarthak"));


// console.log(Array.from({name:"sarthak"})); //intresting



// let marks1=100
// let marks2=200
// let marks3=300

// console.log(Array.of(marks1,marks2,marks3));



const cities=['pune','nagpur','bangalore','delhi','hyderabad']

cities.map((element)=>{
    console.log(element);
})



const obj={
    cities:['ngp','agra'],
    players:['virat','rohit'],
    numbers:[1,2],
}


cities.forEach((element) => {

    console.log(element);
    
});