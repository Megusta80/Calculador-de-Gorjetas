function calculateTip(event) {

    event.preventDefault(); /* Para de recarregar a página 
    quando enviamos os dados. */

    /* Pegando as informações do dados
        inseridos nos campos HTML */
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;


    if(bill == '' | serviceQual == 0){
        alert('Preencha os valores')
        return;
    }
    
    if(numOfPeople == '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = 'block';
    }

    const button = document.getElementById("button");
        button.addEventListener("click", function (e) {

        button.innerHTML = "Calculando..."; // muda o texto do botão
        
        setTimeout(function () {
            button.innerHTML = "Enviado!";
            let total = (bill * serviceQual) / numOfPeople;
            total = total.toFixed(2);
            document.getElementById('tip').innerHTML = total;
            document.getElementById('totalTip').style.display = "block";
        }, 1500); // muda o texto do botão após dois segundos
    });

}


document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
