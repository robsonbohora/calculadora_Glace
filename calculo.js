function calcular() {

    let inicial = parseFloat(
        document.getElementById("inicial").value
    );

    let final = parseFloat(
        document.getElementById("final").value
    );


    let ganho = final - inicial;

    let porcentagem = (ganho / inicial) * 100;


    document.getElementById("resultado").innerHTML =
    "Rendimento: " + porcentagem.toFixed(2) + "%<br>" +
    "Ganho: " + ganho.toFixed(3) + " kg";

}