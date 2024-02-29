const chat = window.document.getElementById('chat')
const mensagem = window.document.getElementById('text')
let pergunta = ''
function enviarMensagem(){
    if(text.value == null || text.value == undefined || text.value == ""){
        return
    }else{
        lancarPergunta(text.value)
    }
}

function lancarPergunta(text){
    pergunta = text
    const mostrarPergunta = document.createElement('p')
    mostrarPergunta.textContent = pergunta
    chat.appendChild(mostrarPergunta)
    mensagem.value = ''

    deduzirPergunta(pergunta)
}

function deduzirPergunta(pergunta){
    let palavrasPergunta
    if(pergunta[pergunta.length -1] === "?"){
        pergunta = pergunta.slice(0,-1)
        palavrasPergunta = pergunta.toLowerCase().split(" ")
    }
    palavrasPergunta = pergunta.toLowerCase().split(" ")
    
    compararTodos(palavrasPergunta)

}

function compararPergunta(banco, palavrasPergunta){
    const tamanhoBanco = banco.probablyWords.length
    for(let i = 0; i < tamanhoBanco; ++i){
        palavrasPergunta.forEach((palavra) =>{
            if(banco.probablyWords[i] === palavra){
                banco.matched++
            }
        })
    }
}

function compararTodos(palavrasPergunta){
    compararPergunta(palavrasFutebol, palavrasPergunta)
    compararPergunta(palavrasMundialPalmeiras, palavrasPergunta)
    compararPergunta(palavrasRegras, palavrasPergunta)
    compararPergunta(palavrasTimeGosta, palavrasPergunta)
    compararPergunta(papoFurado, palavrasPergunta)
    mostProbablyQuestion()
}

function mostProbablyQuestion(){
    let matches = [
        papoFurado.matched, 
        palavrasRegras.matched, 
        palavrasTimeGosta.matched,
        palavrasMundialPalmeiras.matched, 
        palavrasFutebol.matched
    ]

    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}

const palavrasFutebol = {
    probablyWords: ["que", "q", "é", "e", "futebol", "me", "explica", "diga", "sabe", "dizer", "o"],
    matched: 0,
}

// Quais as regras do futebol?
const palavrasRegras = {
    probablyWords: ["quais", "as", "regras", "do", "futebol", "sao", "como", "funciona", "o"],
    matched: 0,
}

// Que time ele mais gosta?
const palavrasTimeGosta = {
    probablyWords: ["que", "mais", "gosta", "qual", "você", "torce", "preferido", "clube", "coração", "do", "time", "vc"],
    matched: 0,
}

// Palmeiras tem mundial?
const palavrasMundialPalmeiras = {
    probablyWords: ["palmeiras", "tem", "mundial", "copa", "do", "mundo", "campeão", "rio"],
    matched: 0,
}

//Não tem haver
const papoFurado = {
    probablyWords: ["oi", "tudo", "bem", "quem", "é", "você", "vc", "piada", "idade", "sua", "onde", "mora", "gosta", "de", "que"],
    matched: 0,
}

function showAnswer(index) {
    limparMatches()
    const mostrarResposta = document.createElement('p')
    mostrarResposta.setAttribute('class', 'resposta')
    if(index === 0){
        mostrarResposta.textContent = ">Só sei falar de futebol meu amigo, se não for isso, tchau"
        return chat.appendChild(mostrarResposta)
    }
    if(index === 1){
        mostrarResposta.textContent = ">Algumas regras do futebol seria: não pode agressão, não pode gol contra"
        return chat.appendChild(mostrarResposta)
    }
    if(index === 2){
        mostrarResposta.textContent = ">Eu torço para o Guarani"
        return chat.appendChild(mostrarResposta)
    }
    if(index === 3){
        mostrarResposta.textContent = ">O palmeiras não tem mundial, mas tem copa RIO, mas eles falam que tem né, fazer oq"
        return chat.appendChild(mostrarResposta)
    }
    if(index === 4){
        mostrarResposta.textContent = ">O futebol é o esporte mais conhecido do mundo e mais difundido em todos os países, sendo o Brasil e a Europa os maiores!"
        return chat.appendChild(mostrarResposta)
    }
}

function limparMatches(){
    palavrasFutebol.matched = 0 
    palavrasRegras.matched = 0 
    palavrasTimeGosta.matched = 0
    palavrasMundialPalmeiras.matched = 0
    papoFurado.matched = 0
}
