const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

cep.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        c = this.value;
        fetchAPI("https://viacep.com.br/ws/"+c+"/json/")
    }
});

fetchAPI = (url) =>{
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        showAddress(data);
    });
};

const showAddress = (address) => {
    logradouro.textContent = `Rua : ${address.logradouro}`;
    bairro.textContent = `Bairro : ${address.bairro}`;
    localidade.textContent = `Cidade : ${address.localidade}`;
    uf.textContent = `Estado : ${address.uf}`;
}

    

