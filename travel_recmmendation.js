url = "./travel_recmmendation_api.json"

const searchKey = document.getElementById("searchbar-value")
const serchBtn = document.getElementById("search-btn")


async function fetchData () {
  const response = await fetch(url);
  const reccomentaions = await response.json();
  console.log(reccomentaions);
}

fetchData()
serchBtn.addEventListener("click",()=>{
    const searchKeyWord = searchKey.value.toLowerCase()
    console.log(searchKeyWord);
    
})
console.log(searchKey);