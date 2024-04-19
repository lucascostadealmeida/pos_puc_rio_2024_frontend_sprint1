function showHome() {
    document.getElementById('cadOfWinesContent').classList.add('hidden');
    document.getElementById('listOfWinesContent').classList.add('hidden');
    document.querySelector('.sidebar a.active').classList.remove('active');
    document.querySelector('.sidebar a[href="#home"]').classList.add('active');
}

function showListOfWines() {
    document.getElementById('cadOfWinesContent').classList.add('hidden');
    document.getElementById('listOfWinesContent').classList.remove('hidden');
    document.querySelector('.sidebar a.active').classList.remove('active');
    document.querySelector('.sidebar a[href="#list_vinho"]').classList.add('active');
    fetchWines();
}

function showCadOfWines() {
    document.getElementById('listOfWinesContent').classList.add('hidden');
    document.getElementById('cadOfWinesContent').classList.remove('hidden');
    document.querySelector('.sidebar a.active').classList.remove('active');
    document.querySelector('.sidebar a[href="#cad_vinho"]').classList.add('active');
}

function submitRegisterWine() {
    var nomeVinhoRe = document.getElementById('nomeVinhoReInput').value;
    var uvaRe = document.getElementById('uvaReInput').value;
    var safraRe = document.getElementById('safraReInput').value;
    if ((nomeVinhoRe != '') && (uvaRe != '') && (safraRe != '')) {
        axios.post('http://localhost:5000/vinho',
            { vinho: nomeVinhoRe, uva: uvaRe, safra: safraRe })
            .then(function (response) {
                alert("Vinho cadastrado com sucesso!");
            })
            .catch(function (error) {
                alert("Aconteceu um erro:" + error);
            });
    } else {
        alert('Informe todas as informações para cadastrar o vinho')
    }
}

function fetchWines() {
    axios.get('http://localhost:5000/vinhos')
        .then(function (response) {
            if (response.data && response.data.Vinhos) {

                const tableBody = document.getElementById('wineTableBody');
                tableBody.innerHTML = '';
                response.data.Vinhos.forEach(function (vinho) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                                <td>${vinho.vinho}</td>
                                <td>${vinho.uva}</td>
                                <td>${vinho.safra}</td>
                              `;
                    tableBody.appendChild(row);
                });
            } else {
                alert("Resposta inválida do servidor:" + response);
            }
        })
        .catch(function (error) {
            alert("Erro ao buscar vinhos:" + error);
        })
}