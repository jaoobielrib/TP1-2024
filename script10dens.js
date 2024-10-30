function calcular() {
    let velocidade = Number(document.getElementById("massa").value)
    let tempo = Number(document.getElementById("volume").value)
    let densidade = massa/volume
    document.getElementById("densidade").innerText = `O valor da densidade é de ${densidade} g/L;`
}