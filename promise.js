const responce = new Promise((resolve ,reject)=>{
    let name = "Sanjeev";
    console.log(name);
    resolve(name);
})

responce.then((user)=>{
    console.log(`Your response is successful ${user} `);
})
.catch((error)=>{
    console.log("error");
})


const responce2 = new Promise(
    (resolve ,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            console.log("your promise has been resolved");
            resolve({name : "sanjeev" , age : 23 , rollno : 101});
        }else{
            console.log("your promise has not been resolved");
            reject("sorry not fulfilled");
        }
    },1000);}
);
responce2
.then((user)=>{
    console.log(user);
    return user.name;
})
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log("error" ,error);
})