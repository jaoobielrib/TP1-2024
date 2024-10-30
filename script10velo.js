function calcular() {
    let velocidade = Number(document.getElementById("velocidade").value)
    let tempo = Number(document.getElementById("tempo").value)
    let velom = velocidade/tempo
    document.getElementById("velom").innerText = `O valor da velocidade média é de ${velom} m/s;`
}