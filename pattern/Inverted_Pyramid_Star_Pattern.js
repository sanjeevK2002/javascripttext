for(let i= 5; i>=1 ; i--){
    let row = "";
    row += "  ".repeat(5-i);
    row += "* ".repeat(i * 2 - 1);
    console.log(row);
    
}