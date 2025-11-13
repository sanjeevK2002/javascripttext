for(let i =1;i<=5;i++){
    let row = "";
    row += "  ".repeat(5 - i);
    if(i === 1 || i === 5){
        row += "* ".repeat(2 * i - 1);
    } else {
        row += "* ";
        row += "  ".repeat(2 * i - 3); 
        row += "* ";
    }
    console.log(row);
    
}