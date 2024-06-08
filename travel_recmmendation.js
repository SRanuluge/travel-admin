url = "./travel_recmmendation_api.json";

const searchKey = document.getElementById("searchbar-value");
const serchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");

let res = {};
async function fetchData() {
  const response = await fetch(url);
  res = await response.json();
}

fetchData();
serchBtn.addEventListener("click", () => {
  const searchKeyWord = searchKey.value.toLowerCase();
  const key = Object.keys(res).filter((value) => {
    const val = value.toLowerCase();
    return val.indexOf(searchKeyWord) > -1;
  });
  document.getElementById("list-container").innerHTML = res[key[0]]
    .map(
      (ele, i) =>
        `<div class="card-container" data-idx="${i}">
          <div class="card-img"><img id="c-img" src="${
            ele?.imageUrl || ele?.cities[0]?.imageUrl
          }" alt="img"/></div>
          <div class="card-disc">
            <h3 id="card-disc-title">${ele?.name || ele?.cities[0]?.name}</h3>
            <p id="card-disc-disc">${
              ele?.description || ele?.cities[0]?.description
            }</p>
            <button id="cardBtn">Visit</button>
          </div>
          </div>`
    )
    .join("");
});

clearBtn.addEventListener("click", () => {
  document.getElementById("list-container").innerHTML = "";
  document.getElementById("searchbar-value").value = "";
});
