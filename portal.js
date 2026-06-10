const games = [
  {
    name: 'Megamania-Remake',
    description: 'Shmup retrô com ondas misturadas, energia e power-ups.',
    playUrl: 'https://sidneyamorim1.github.io/megamania/',
  },
  {
    name: 'Jogo da Cobrinha',
    description: 'Clássico da cobrinha em versão leve para jogar no navegador.',
    playUrl: 'https://sidneyamorim1.github.io/Jogo-da-Cobrinha/',
  },
];

const gamesGrid = document.getElementById('gamesGrid');
const gameCount = document.getElementById('gameCount');

for (const game of games) {
  const card = document.createElement('article');
  card.className = 'gameCard';
  card.innerHTML = `
    <span class="tag">Disponível</span>
    <h4>${game.name}</h4>
    <p>${game.description}</p>
    <div class="cardActions">
      <a class="btn primary" href="${game.playUrl}" target="_blank" rel="noopener noreferrer">Jogar</a>
    </div>
  `;
  gamesGrid.appendChild(card);
}

gameCount.textContent = `${games.length} jogos`;
