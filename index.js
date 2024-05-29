function addPlayer() {
    const playerName = document.getElementById('player-name').value.trim();
    if (!playerName) {
        alert('Por favor, digite o nome do jogador.');
        return;
    }

    const playersContainer = document.getElementById('bingo-players');
    const playerCard = createBingoCard(playerName);
    playersContainer.appendChild(playerCard);

    // Limpar campo de entrada
    document.getElementById('player-name').value = '';
}

// Função para criar uma cartela de Bingo aleatória
function createBingoCard(playerName) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('bingo-card');

    const heading = document.createElement('h3');
    heading.textContent = playerName;
    cardContainer.appendChild(heading);

    const numbers = generateRandomNumbers();
    const ul = document.createElement('ul');
    numbers.forEach(number => {
        const li = document.createElement('li');
        li.textContent = number;
        ul.appendChild(li);
    });

    cardContainer.appendChild(ul);
    return cardContainer;
}

// Função para gerar números aleatórios para a cartela
function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 25) {
        const randomNum = Math.floor(Math.random() * 75) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

// Iniciar jogo (não implementado neste exemplo)
function startGame() {
    alert('Jogo iniciado! Boa sorte!');
}

// Adicionar eventos aos botões
document.getElementById('add-player').addEventListener('click', addPlayer);
document.getElementById('start-game').addEventListener('click', startGame);