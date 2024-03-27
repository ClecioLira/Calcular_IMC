const valores = {
    'abaixo' : 'Você está abaixo do peso, aumento do risco de doenças relacionadas à desnutrição, como anemia e osteoporose.',

    'normal' : 'Você esta com o peso normal, risco baixo de doenças relacionadas ao peso.',

    'sobrepeso': 'Você esta com sobrepeso, aumento do risco de doenças relacionadas ao peso, como diabetes tipo 2, hipertensão e doenças cardíacas.',

    'obesidadeI': 'Você esta com obesidade do tipo 1, risco moderado de doenças relacionadas ao peso, como diabetes tipo 2, hipertensão e doenças cardíacas.',

    'obesidadeII': 'Você esta com obesidade do tipo 2, risco alto de doenças relacionadas ao peso, como diabetes tipo 2, hipertensão e doenças cardíacas.',

    'obesidadeIII': 'Você esta com obesidade do tipo 3, risco muito alto de doenças relacionadas ao peso, como diabetes tipo 2, hipertensão e doenças cardíacas.'
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const imc = peso / (altura * altura)
    if (imc < 0) alert('ERRO: Valor inválido. Insira um peso e uma altura válidos.')
    else if (isNaN(imc)) alert('ERRO: Valor inválido. Insira um peso e uma altura válidos.')
    return imc
}

function mostrarIMC() {
    const imc = calcularIMC()
    if (imc < 0 || isNaN(imc)) document.getElementById('result').innerText = "Bem Vindo!"
    else document.getElementById('result').innerHTML = imc.toFixed(2)

    if (imc < 0 || isNaN(imc)) document.getElementById('descricao_result').innerText = "Insira o seu peso e a sua altura e veja o resultado do seu IMC aqui!!" 
    else if (imc > 0 && imc < 18.5) document.getElementById('descricao_result').innerHTML = valores['abaixo']
    else if (imc > 18.5 && imc < 24.9) document.getElementById('descricao_result').innerHTML = valores['normal']
    else if (imc > 25 && imc < 29.9) document.getElementById('descricao_result').innerHTML = valores['sobrepeso']
    else if (imc > 30 && imc < 34.9) document.getElementById('descricao_result').innerHTML = valores['obesidadeI']
    else if (imc > 35 && imc < 39.9) document.getElementById('descricao_result').innerHTML = valores['obesidadeII']
    else if (imc > 40) document.getElementById('descricao_result').innerHTML = valores['obesidadeIII']
}

function limparInput() {
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
}

function atualizarIMC() {
    mostrarIMC();
    limparInput();
}