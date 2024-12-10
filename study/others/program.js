let results = [];

const inputEl = document.querySelector("input");

inputEl?.addEventListener("keydown", (e) => {
  const search = e.target.value?.toLowerCase();
  const filtered = results.filter((x) => x.toLowerCase().match(search));
  bindData(filtered);
});

const fetchData = async () => {
  await fetch("https://swapi.dev/api/planets")
    .then((data) => data.json())
    .then((data) => (results = data.results.map((x) => x.name)));
  bindData(results);
};

const bindData = (results) => {
  const selectEl = document.querySelector("select");
  selectEl.innerHTML = "";
  console.log(results);
  results.forEach((name) => {
    let optionEl = new Option(name);
    selectEl.appendChild(optionEl);
  });
};

fetchData();

const mockedData = ["Abc", "cde"];

describe("Fetch api", () => {
  window.fetch = () => mockedData;
  it("verify fetcgh", async () => {
    fetch("url");
    screen.findElementByText("Abc").toBe();
  });
});


// interface Person<T> {
//     name: T 


// }


// Person('string')

tsconfig
// git hook
// mono repo

//ada 
render components, asyc and defer 