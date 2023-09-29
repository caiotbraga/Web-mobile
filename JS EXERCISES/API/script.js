const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

var c = cep.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        c = this.value;
    }
});

const fetchAPI = (url) =>{
    fetch(url)
    .then((response) => {
        console.log(response)
    })
}

// const showAdress = (adress) => {
//     logradouro = document.createTextNode(`Rua : ${adress.lagradouro}`)
//     bairro = document.createTextNode(`Bairro : ${adress.bairro}`)
//     localidade = document.createTextNode(`Cidade : ${adress.localidade}`)
//     uf = document.createTextNode(`Estado : ${adress.uf}`)
// }

fetchAPI("viacep.com.br/ws/"+c+"/json/")