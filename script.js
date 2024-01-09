function CreateObj(name , age , gender) {
    return {
name: name , 
age: age , 
gender: gender 


}
}

setTimeout(() => {
    console.log("loading..."); 
}, 10);


let nm = prompt("name")
let ae = prompt("age")
let gd = prompt("gender")



setTimeout(() => {
    
    console.log(CreateObj(nm, ae, gd ));
}, 2000);