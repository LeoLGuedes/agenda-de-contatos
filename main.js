const form = document.getElementById('container-form');

const cell = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
})

function adicionaLinha() {
    const inputNome = document.getElementById('input-nome');
    const inputCell = document.getElementById('input-cell');

    if (cell.includes(inputCell.value)) {
        alert(`O número de celular: ${inputCell.value} já foi inserido.`)
    }
    else {
        cell.push(inputCell.value);
        cell.push(parseFloat(inputCell.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputCell.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputCell.value = '';
}

