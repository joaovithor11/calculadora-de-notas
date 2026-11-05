
function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        document.getElementById("resultado").innerText = "Aprovado! Média: " + media.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Reprovado! Média: " + media.toFixed(2);
    }
}

