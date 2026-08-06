// Modo atual
let modo = "glaciamento";

// ==========================
// ALTERA ENTRE AS TELAS
// ==========================

function mostrarGlaciamento() {

    modo = "glaciamento";

    document.getElementById("glaciamento").style.display = "block";
    document.getElementById("acrescimo").style.display = "none";

    document.getElementById("btnGlaciamento").classList.add("ativo");
    document.getElementById("btnAcrescimo").classList.remove("ativo");

    document.getElementById("resultado").innerHTML =
        "Aguardando cálculo...";

}

function mostrarAcrescimo() {

    modo = "acrescimo";

    document.getElementById("glaciamento").style.display = "none";
    document.getElementById("acrescimo").style.display = "block";

    document.getElementById("btnAcrescimo").classList.add("ativo");
    document.getElementById("btnGlaciamento").classList.remove("ativo");

    document.getElementById("resultado").innerHTML =
        "Aguardando cálculo...";

}

// ==========================
// BOTÃO CALCULAR
// ==========================

function calcular() {

    if (modo === "glaciamento") {

        calcularGlaciamento();

    } else {

        calcularAcrescimo();

    }

}

// ==========================
// GLACIAMENTO
// ==========================

function calcularGlaciamento() {

    let inicial = parseFloat(document.getElementById("inicial").value);
    let final = parseFloat(document.getElementById("final").value);

    if (isNaN(inicial) || isNaN(final)) {

        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos.";

        return;

    }

    if (inicial <= 0) {

        document.getElementById("resultado").innerHTML =
            "O peso inicial deve ser maior que zero.";

        return;

    }

    let ganho = final - inicial;
    let porcentagem = (ganho / inicial) * 100;

    let texto = ganho >= 0 ? "Ganho" : "Perda";

    document.getElementById("resultado").innerHTML =

        "<strong>RESULTADO</strong><br><br>" +

        "Peso Inicial: <b>" + inicial.toFixed(3) + " kg</b><br>" +

        "Peso Final: <b>" + final.toFixed(3) + " kg</b><br><br>" +

        "Rendimento: <b>" + porcentagem.toFixed(2) + "%</b><br>" +

        texto + ": <b>" + Math.abs(ganho).toFixed(3) + " kg</b>";

}

// ==========================
// ACRÉSCIMO %
//
// Exemplo:
//
// Quantidade = 10
// Percentual = 12
//
// Acréscimo = 1,2
//
// Total = 11,2
// ==========================

function calcularAcrescimo() {

    let quantidade = parseFloat(document.getElementById("quantidade").value);

    let percentual = parseFloat(document.getElementById("percentual").value);

    if (isNaN(quantidade) || isNaN(percentual)) {

        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos.";

        return;

    }

    let acrescimo = quantidade * (percentual / 100);

    let total = quantidade + acrescimo;

    document.getElementById("resultado").innerHTML =

        "<strong>RESULTADO</strong><br><br>" +

        "Quantidade: <b>" + quantidade.toFixed(3) + " kg</b><br>" +

        "Acréscimo: <b>" + acrescimo.toFixed(3) + " kg</b><br>" +

        "Total: <b>" + total.toFixed(3) + " kg</b>";

}
