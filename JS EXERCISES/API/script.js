const cep = document.getElementById("cep");
const adr = document.getElementsByClassName("adress");
fetchAPI("viacep.com.br/ws/"+cep+"/json/")


const fetchAPI = (url) =>{
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        
    })
}