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

    let imcResult = calcImc();

    const showMessage = () => {
        if (imcResult <= 18.5) {
            return "abaixo do peso";
        }

        if (imcResult >= 18.6 && imcResult <= 24.9) {
            return "Peso ideal Parabéns!";
        }

        if (imcResult >= 25.0 && imcResult <= 29.9) {
            return "Levemente acima do Peso!";
        }
        if (imcResult >= 30.0 && imcResult <= 34.9) {
            return "Obesidade Grau I!";
        }
        if (imcResult >= 35.0 && imcResult <= 39.9) {
            return "Obesidade Grau II (severa)";
        }

        if (imcResult >= 40) {
            return "Obesidade III (mórbida)";
        }
    };

    const infoMessage = showMessage();

    const showResult = () => {
        divResult.classList.remove("hidden");

        divResult.innerHTML = `<p>Seu IMC é 
                        <span style= "color: #B22222;
                        font-size: 20px;">
                            ${imcResult}
                        </span>
                    </p>
                    <P>${infoMessage}</P>`;
    };

    showResult();
});
