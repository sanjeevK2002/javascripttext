// const url = "' https://api.thecatapi.com/v1/images/search?limit=10"
const url = 'https://catfact.ninja/facts';
const alldata = document.querySelector("#text");


async function fetchApi(){
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Netrwork response id not ok');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(`unable to fetch data from api : ${error}`)
    }
}

fetchApi()
.then(result =>{
    console.log(result)
})
