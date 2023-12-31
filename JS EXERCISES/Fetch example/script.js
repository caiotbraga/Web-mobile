const listaPessoas = document.getElementById("list"); 
const btAnterior = document.getElementById("btPrevious");
const btProxima = document.getElementById("btNext");

const exibirLista = (lista, start) => {
  listaPessoas.innerHTML = "";
  listaPessoas.start = start;
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
    );
    li.appendChild(text);
    listaPessoas.appendChild(li);
  }
};

const configurarBotoes = (data) => {
  const { previous, next } = data;

  btAnterior.disabled = previous === null;
  btAnterior.onclick = () => {
    fetchAPI(previous);
    btAnterior.disabled = true;
  };

  btProxima.disabled = next === null;
  btProxima.onclick = () => {
    fetchAPI(next);
    btProxima.disabled = true;
  };
};

const fetchAPI = (url) => {
  const start = Number(url.split("=")[1]) * 10 - 9;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exibirLista(data.results, start);
      configurarBotoes(data);
    });
};

const fetchAPI2 = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const start = Number(url.split("=")[1]) * 10 - 9;
    console.log("start = ", start);
    exibirLista(data.results, start);
    configurarBotoes(data);
  } catch (error) {
    console.log("error = ", error);
    alert("erro ao se conectar a API");
  }
};

fetchAPI("https://swapi.dev/api/people/?page=1");