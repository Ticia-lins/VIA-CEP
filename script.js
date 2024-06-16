function buscarCEP() {
    var cep = document.getElementById('cep').value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }
        document.getElementById('rua').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('estado').textContent = data.uf;
        document.getElementById('resultado').classList.add('visible');
    })
    .catch(error => {
        alert("Erro ao buscar o CEP.");
        console.error(error);
    });
}
