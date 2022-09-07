
function Calcular() {
    const monto = document.querySelector("#monto").value;

    const tasaInteres = document.querySelector("#tasaInteres").value;

    const meses = document.querySelector("#meses").value;
    const intereses = (monto * (tasaInteres * 0.01)) / meses;
    const total = ((monto / meses) + intereses).toFixed(2)

    document.querySelector("#total")
    .innerHTML = "Total cuotas: ($)" + total;
}