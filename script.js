document.addEventListener("DOMContentLoaded", function() {
    const valorInput = document.querySelector(".Valor");
    const moedaBaseSelect = document.querySelectorAll(".Alternativa")[0];
    const moedaConvertidaSelect = document.querySelectorAll(".Alternativa")[1];
    const resultado = document.querySelector(".resultado");
    const moedaBaseImg = document.querySelectorAll(".Moeda")[0];
    const moedaConvertidaImg = document.querySelectorAll(".Moeda")[1];

    const taxaDeConversao = {
        Real: {
            Real: 1,
            Euro: 0.18,
            Dolar: 0.20,
            Libra: 0.16,
            Bitcoin: 0.0000028
        },
        Euro: {
            Real: 5.41,
            Euro: 1,
            Dolar: 1.08,
            Libra: 0.85,
            Bitcoin: 0.000015
        },
        Dolar: {
            Real: 5.01,
            Euro: 0.93,
            Dolar: 1,
            Libra: 0.79,
            Bitcoin: 0.000014
        },
        Libra: {
            Real: 6.33,
            Euro: 1.17,
            Dolar: 1.26,
            Libra: 1,
            Bitcoin: 0.000018
        },
        Bitcoin: {
            Real: 354495.61,
            Euro: 65536.73,
            Dolar: 70692.70,
            Libra: 56017.60,
            Bitcoin: 1
        }
    };

    function atualizarResultado() {
        const moedaBase = moedaBaseSelect.value;
        const moedaConvertida = moedaConvertidaSelect.value;
        const taxa = taxaDeConversao[moedaBase][moedaConvertida];
        const valor = parseFloat(valorInput.value);
        const valorConvertido = valor * taxa;

        resultado.textContent = `Valor convertido: ${valorConvertido.toFixed(2)} ${moedaConvertida}`;

        // Atualizar imagens
        moedaBaseImg.src = `/img/${moedaBase.toLowerCase()}.png`;
        moedaConvertidaImg.src = `/img/${moedaConvertida.toLowerCase()}.png`;
    }

    valorInput.addEventListener("input", atualizarResultado);
    moedaBaseSelect.addEventListener("change", atualizarResultado);
    moedaConvertidaSelect.addEventListener("change", atualizarResultado);
});