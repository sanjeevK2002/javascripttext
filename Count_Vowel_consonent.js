// count vowwel and consonent

const countVowelandConsonent = (str)  =>{
       const vowels = "aeiouAEIOU";
       let voweCount = 0;
       let consonenstCount = 0;

       const map =new Map();
       for(let i =0; i<str.length ; i++){
              const char = str[i];
              if(vowels.includes(char)){
                voweCount++;
              }else if(char.toLowerCase() !== char.toUpperCase()){
                consonenstCount++;
              }
              
              // Count occurrences of each character
              map.set(char, (map.get(char) || 0) + 1);
       }
       return {
              voweCount,
              consonenstCount,
              map
       };
}

const result = countVowelandConsonent("sanjeev");
console.log(result);