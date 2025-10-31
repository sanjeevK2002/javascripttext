function name1(){
    let name = "sanjeev";
    function displayName(){
        console.log(name);
    }
    return displayName
}

name1()();