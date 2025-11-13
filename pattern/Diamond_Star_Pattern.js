// Diamond star pattern

for(let i = 1; i <= 5; i++) {
    let row = "";
    row += "  ".repeat(5 - i);
    row += "* ".repeat(i * 2 - 1);
    console.log(row);
}
for(let i = 4; i >= 1; i--) {
    let row = "";
    row += "  ".repeat(5 - i);
    row += "* ".repeat(i * 2 - 1);
    console.log(row);
}

//         * 
//       * * * 
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *