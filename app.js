function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if (quantidade > ateNumero || deNumero > ateNumero) {
        alert('Números inválidos')
        reiniciar();
        alterarStatusBotao()
        return;

    }

    if (quantidade > (ateNumero - deNumero + 1)) {
        alert("A quantidade de números não pode ser maior que o intervalo disponível.");
        reiniciar();
        alterarStatusBotao()
        return;    
    };

    if (isNaN(quantidade) || isNaN(deNumero) || isNaN(ateNumero)) {
        alert('Por favor, preencha todos os campos com valores numéricos.');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(deNumero, ateNumero);
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;


    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');


    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
