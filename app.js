const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const btnCalc = document.querySelector(".btn");
const divResult = document.querySelector(".result");

btnCalc.addEventListener("click", () => {
    
    const weightData = inputWeight.value;
    const heightData = inputHeight.value;
    
    const calcImc = () => {
  
        const result = weightData / heightData ** 2;

        return Number(result.toFixed(2));
    };

    let imcResult = calcImc();
    console.log(imcResult)

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

    if (infoMessage === undefined){
        return 
    }

    const showResult = () => {
        divResult.classList.remove("hidden");

        divResult.innerHTML = `<p>Seu IMC é 
                        <span style= "color: #B22222;
                        font-size: 25px;">
                            ${imcResult}
                        </span>
                    </p>
                    <P>${infoMessage}</P>`;
    };

    showResult();
});
