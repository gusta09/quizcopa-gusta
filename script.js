const questionPool = [
    { q: "Em que país aconteceu a primeira Copa do Mundo FIFA de 1930?", options: ["Brasil", "Uruguai", "França"], correct: 1 },
    { q: "Qual seleção ganhou mais títulos da Copa do Mundo FIFA?", options: ["Alemanha", "Argentina", "Brasil"], correct: 2 },
    { q: "Quem é conhecido como “Rei do Futebol”?", options: ["Pelé", "Lionel Messi", "Cristiano Ronaldo"], correct: 0 },
    { q: "Quantos jogadores cada time tem em campo no futebol?", options: ["9", "10", "11"], correct: 2 },
    { q: "Qual país venceu a Copa do Mundo FIFA de 2022?", options: ["França", "Argentina", "Croácia"], correct: 1 },
    { q: "Quem marcou o famoso gol de “Mão de Deus”?", options: ["Diego Maradona", "Zinedine Zidane", "Ronaldinho Gaúcho"], correct: 0 },
    { q: "Em qual país aconteceu a Copa do Mundo FIFA de 2014?", options: ["Alemanha", "África do Sul", "Brasil"], correct: 2 },
    { q: "Qual seleção aplicou o histórico 7x1 no Brasil em 2014?", options: ["Espanha", "Alemanha", "Itália"], correct: 1 },
    { q: "Quem foi o artilheiro da Copa do Mundo FIFA de 2002?", options: ["Ronaldo Nazário", "Rivaldo", "Miroslav Klose"], correct: 0 },
    { q: "Qual jogador tem o recorde de mais gols em Copas do Mundo?", options: ["Pelé", "Miroslav Klose", "Lionel Messi"], correct: 1 },
    { q: "Qual seleção venceu a Copa do Mundo FIFA de 2010?", options: ["Holanda", "Espanha", "Alemanha"], correct: 1 },
    { q: "Qual foi a primeira seleção africana a chegar em uma semifinal de Copa?", options: ["Nigéria", "Camarões", "Marrocos"], correct: 2 },
    { q: "Quem fez dois gols na final da Copa do Mundo FIFA de 2002?", options: ["Ronaldinho Gaúcho", "Kaká", "Ronaldo Nazário"], correct: 2 },
    { q: "Qual país sediou a Copa do Mundo FIFA de 1998?", options: ["Itália", "França", "Alemanha"], correct: 1 },
    { q: "Qual jogador argentino levantou a taça da Copa do Mundo FIFA de 2022?", options: ["Ángel Di María", "Lionel Messi", "Julián Álvarez"], correct: 1 },
    { q: "Qual seleção venceu a Copa do Mundo FIFA de 1994?", options: ["Itália", "Brasil", "Alemanha"], correct: 1 },
    { q: "Qual jogador ficou famoso pelo apelido “Fenômeno”?", options: ["Ronaldo Nazário", "Neymar", "Romário"], correct: 0 },
    { q: "Em que continente foi realizada a Copa do Mundo FIFA de 2010?", options: ["Europa", "África", "Ásia"], correct: 1 },
    { q: "Qual seleção ganhou a Copa do Mundo FIFA de 2018?", options: ["Croácia", "França", "Bélgica"], correct: 1 },
    { q: "Quem é o maior artilheiro da história do Brasil em Copas?", options: ["Pelé", "Ronaldo Nazário", "Neymar"], correct: 1 },
    { q: "Qual país sediou a Copa do Mundo FIFA de 2006?", options: ["França", "Alemanha", "Japão"], correct: 1 },
    { q: "Quem fez o gol do título da Espanha em 2010?", options: ["Andrés Iniesta", "David Villa", "Xavi"], correct: 0 },
    { q: "Quantos títulos mundiais a Itália possui?", options: ["2", "4", "6"], correct: 1 },
    { q: "Qual seleção ficou vice-campeã na Copa do Mundo FIFA de 2022?", options: ["França", "Croácia", "Marrocos"], correct: 0 },
    { q: "Quem foi campeão da Copa do Mundo FIFA de 1986?", options: ["Alemanha", "Brasil", "Argentina"], correct: 2 },
    { q: "Qual país sediou a Copa do Mundo FIFA de 1958?", options: ["Suécia", "Inglaterra", "Chile"], correct: 0 },
    { q: "Quem marcou dois gols na final de 1958 pelo Brasil?", options: ["Pelé", "Garrincha", "Vavá"], correct: 0 },
    { q: "Qual seleção é conhecida como “La Albiceleste”?", options: ["Espanha", "Argentina", "Uruguai"], correct: 1 },
    { q: "Quem foi o técnico do Brasil no penta em 2002?", options: ["Luiz Felipe Scolari", "Tite", "Carlos Alberto Parreira"], correct: 0 },
    { q: "Qual país venceu a Copa do Mundo FIFA de 1970?", options: ["Alemanha", "Itália", "Brasil"], correct: 2 },
    { q: "Quem foi o capitão do Brasil em 2002?", options: ["Cafu", "Ronaldo Nazário", "Rivaldo"], correct: 0 },
    { q: "Em qual país ocorreu a Copa do Mundo FIFA de 1966?", options: ["Alemanha", "Inglaterra", "França"], correct: 1 },
    { q: "Quem ganhou a Bola de Ouro da Copa de 2014?", options: ["Neymar", "Lionel Messi", "Thomas Müller"], correct: 1 },
    { q: "Qual seleção venceu a primeira Copa do Mundo?", options: ["Brasil", "Uruguai", "Itália"], correct: 1 },
    { q: "Qual jogador francês ficou famoso pelo cabeceio na final de 2006?", options: ["Thierry Henry", "Kylian Mbappé", "Zinedine Zidane"], correct: 2 },
    { q: "Qual país sediou a Copa do Mundo FIFA de 1978?", options: ["México", "Argentina", "Espanha"], correct: 1 },
    { q: "Quem é o maior artilheiro da história das Copas?", options: ["Miroslav Klose", "Pelé", "Just Fontaine"], correct: 0 },
    { q: "Qual seleção perdeu a final de 1950 para o Uruguai?", options: ["Argentina", "Brasil", "Itália"], correct: 1 },
    { q: "Quem marcou o gol do título da Alemanha em 2014?", options: ["Mario Götze", "Thomas Müller", "Miroslav Klose"], correct: 0 },
    { q: "Qual seleção ganhou a Copa do Mundo FIFA de 1938?", options: ["Itália", "Hungria", "Brasil"], correct: 0 },
    { q: "Qual país sediou a Copa do Mundo FIFA de 1990?", options: ["Alemanha", "Itália", "Espanha"], correct: 1 },
    { q: "Quem foi eleito melhor jogador da Copa de 2022?", options: ["Kylian Mbappé", "Lionel Messi", "Luka Modrić"], correct: 1 },
    { q: "Qual seleção eliminou o Brasil em 1998 na final?", options: ["França", "Alemanha", "Holanda"], correct: 0 },
    { q: "Qual goleiro foi campeão mundial com a Itália em 2006?", options: ["Iker Casillas", "Gianluigi Buffon", "Manuel Neuer"], correct: 1 },
    { q: "Qual seleção venceu a Copa do Mundo FIFA de 1962?", options: ["Brasil", "Tchecoslováquia", "Uruguai"], correct: 0 }
];


let quizData = [];
let startTime;
let timerInterval;
let timerStarted = false;
let timeElapsed = 0;

function loadQuiz() {
    // Resetar variáveis de tempo ao recarregar
    timerStarted = false;
    timeElapsed = 0;
    clearInterval(timerInterval);
    
    quizData = [...questionPool]
        .sort(() => Math.random() - 0.5)
        .slice(0, 15);

    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    quizData.forEach((data, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `q-block-${index}`;
        questionDiv.style.animationDelay = `${index * 0.15}s`;
        
        let optionsHTML = data.options.map((opt, i) => `
            <label class="option-label">
                <input type="radio" name="question${index}" value="${i}" onchange="startTimerOnFirstClick()">
                <span class="option-card-text">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span class="option-name">${opt}</span>
                </span>
            </label>
        `).join('');

        questionDiv.innerHTML = `
            <span class="question-text">${index + 1}. ${data.q}</span>
            <div class="options">${optionsHTML}</div>
        `;
        container.appendChild(questionDiv);
    });
}

// Função que inicia o cronômetro apenas uma vez
function startTimerOnFirstClick() {
    if (!timerStarted) {
        timerStarted = true;
        startTime = Date.now();
        
        // Atualiza o contador na tela a cada segundo (Opcional)
        timerInterval = setInterval(() => {
            timeElapsed = Math.floor((Date.now() - startTime) / 1000);
            updateTimerUI(timeElapsed);
        }, 1000);
    }
}

// Função para exibir o tempo (Crie uma <div id="timer"></div> no seu HTML)
function updateTimerUI(seconds) {
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.innerText = `Tempo: ${seconds}s`;
    }
}

function processQuiz() {
    const nomeJogador = document.getElementById('playerName')?.value?.trim();
    if (!nomeJogador) {
        alert("Por favor, digite seu nome antes de enviar!");
        return;
    }

    // Para o cronômetro imediatamente
    clearInterval(timerInterval);
    const tempoFinal = Math.floor((Date.now() - startTime) / 1000);

    let acertos = 0;
    const form = document.getElementById('quizForm');

    quizData.forEach((data, index) => {
        const selected = form.querySelector(`input[name="question${index}"]:checked`);
        const qBlock = document.getElementById(`q-block-${index}`);
        form.querySelectorAll(`input[name="question${index}"]`).forEach(inp => inp.disabled = true);
        
        if (selected && parseInt(selected.value) === data.correct) {
            acertos++;
            qBlock.classList.add('correct-answer');
        } else {
            qBlock.classList.add('wrong-answer');
        }
    });

    // --- LÓGICA DE PONTUAÇÃO COM TEMPO ---
    // Base: 100 pontos por acerto
    const pontosBase = acertos * 100;
    
    // Bônus: Começa em 1000 e perde 10 pontos por segundo gasto
    // Se demorar mais de 100 segundos, o bônus é 0.
    const bonusTempo = Math.max(0, 1000 - (tempoFinal * 10));
    
    // Só ganha bônus de tempo se tiver acertado pelo menos uma questão
    const pontosTotais = acertos > 0 ? pontosBase + bonusTempo : 0;

    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').innerText = "Salvando...";

    fetch('/api/salvar_pontuacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            usuario: nomeJogador, 
            pontuacao: pontosTotais,
            tempo: tempoFinal // Enviando o tempo para o banco caso queira usar depois
        })
    })
    .then(() => {
        mostrarResultado(acertos, quizData.length, pontosTotais, tempoFinal);
        carregarRanking();
    })
    .catch(erro => {
        console.error("Erro:", erro);
        mostrarResultado(acertos, quizData.length, pontosTotais, tempoFinal);
    });
}

function mostrarResultado(score, total, pontosTotais, tempo) {
    const resultArea = document.getElementById('result-area');
    resultArea.style.display = 'block';
    const percentage = Math.round((score / total) * 100);
    
    resultArea.innerHTML = `
        <h2>Resultado Final</h2>
        <p>Você acertou <strong>${score}</strong> de <strong>${total}</strong>!</p>
        <p>Tempo total: <strong>${tempo} segundos</strong></p>
        <p style="font-size: 1.4rem;">Pontuação Total: <strong style="color: var(--primary);">${pontosTotais} pts</strong></p>
        <p><small>(Incluindo bônus de agilidade)</small></p>
        
        <div id="ranking-area" style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; text-align: left; margin-top: 30px;">
            <h4 style="color: var(--secondary); text-align: center; margin-bottom: 20px;"><i class="fa-solid fa-trophy"></i> TOP 10 GLOBAL</h4>
            <ol id="lista-ranking" style="color: white; padding-left: 20px; line-height: 1.8;">
                <em>Carregando ranking oficial...</em>
            </ol>
        </div>
    `;
    
    resultArea.style.backgroundColor = percentage >= 70 ? 'rgba(24, 210, 110, 0.1)' : 'rgba(244, 197, 66, 0.1)';
    resultArea.style.border = `2px solid ${percentage >= 70 ? '#18D26E' : '#F4C542'}`;

    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'inline-block';
    window.scrollTo({ top: resultArea.offsetTop - 50, behavior: 'smooth' });
}


// 6. Função para bater na Vercel e puxar o Top 10
function carregarRanking() {
    const lista = document.getElementById('lista-ranking');

    fetch('/api/ranking')
        .then(res => res.json())
        .then(dados => {
            lista.innerHTML = "";
            dados.forEach((jogador, index) => {
                let icone = "";
                if(index === 0) icone = "🥇 ";
                if(index === 1) icone = "🥈 ";
                if(index === 2) icone = "🥉 ";
                
                lista.innerHTML += `<li style="margin-bottom: 8px;">${icone}<strong>${jogador.nome}</strong> - <span style="color: var(--primary);">${jogador.pontuacao} pts</span></li>`;
            });
        })
        .catch(erro => {
            lista.innerHTML = "<li style='color:red;'>Erro ao carregar ranking.</li>";
            console.error("Erro no ranking:", erro);
        });
}

window.onload = loadQuiz;
