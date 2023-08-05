const inputWeigth = document.getElementById("weigth");
const inputHeight = document.getElementById("age");
const btnCalc = document.querySelector(".btn");
const divResult = document.querySelector(".result");

btnCalc.addEventListener("click", () => {
    const weigthData = inputWeigth.value;
    const heightData = inputHeight.value;

    const calcImc = () => {
        const result = weigthData / heightData ** 2;

        return Number(result.toFixed(1));
    };

    const imcResult = calcImc();

    const message = () => {
        if (imcResult <= 18.5) {
            return "abaixo do peso";
        }

        if (imcResult >= 18.6 && imcResult <= 24.9) {
            return "peso ideal (parabéns)";
        }

        if (imcResult >= 25.0 && imcResult <= 29.9) {
            return "levemente acima do peso";
        }
        if (imcResult >= 30.0 && imcResult <= 34.9) {
            return "obesidade grau I";
        }
        if (imcResult >= 35.0 && imcResult <= 39.9) {
            return "obesidade grau II (severa)";
        }

        if (imcResult >= 40) {
            return "obesidade III (mórbida)";
        }
    };

    const infoMessage = message() 

    const showResult = () => {
        divResult.innerHTML = `Seu imc é ${imcResult} ${infoMessage}`;
    };

    showResult();
});
