url = "./travel_recmmendation_api.json";

const searchKey = document.getElementById("searchbar-value");
const serchBtn = document.getElementById("search-btn");

let res = {};
async function fetchData() {
  const response = await fetch(url);
  res = await response.json();
  // console.log(res);
}

fetchData();

serchBtn.addEventListener("click", () => {
  const searchKeyWord = searchKey.value.toLowerCase();

  const key = Object.keys(res).filter((value) => {
    const val = value.toLowerCase();
    return val.indexOf(searchKeyWord) > -1;
  });
  const filteredSet = res[key[0]];
  console.log(filteredSet);
});
