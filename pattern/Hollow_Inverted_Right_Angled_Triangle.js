let n = 5;

for(let i = n; i >= 1; i--) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        // Border and last row stars
        if(j === 1 || j === i || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}



// * * * * * 
// *     * 
// *   *
// * *
// *