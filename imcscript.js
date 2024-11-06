function incluir() {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let altura2 = altura/100
    let imc = peso/(altura2*altura2)
    document.getElementById("imc").innerText = `O seu IMC é de ${imc}`
}