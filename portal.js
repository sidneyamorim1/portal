const games = [
  {
    name: 'Megamania-Remake',
    description: 'Shmup retrô com ondas misturadas, energia e power-ups.',
    playUrl: 'https://sidneyamorim1.github.io/megamania/',
    accent: 'cyan',
  },
  {
    name: 'Jogo da Cobrinha',
    description: 'Clássico da cobrinha em versão leve para jogar no navegador.',
    playUrl: 'https://sidneyamorim1.github.io/Jogo-da-Cobrinha/',
    accent: 'violet',
  },
];

const gamesGrid = document.getElementById('gamesGrid');
const gameCount = document.getElementById('gameCount');

function createCard(game) {
  const card = document.createElement('article');
  card.className = `gameCard gameCard--${game.accent}`;

  card.innerHTML = `
    <span class="tag">Disponível</span>
    <h4>${game.name}</h4>
    <p>${game.description}</p>
    <div class="cardActions">
      <a class="btn primary" href="${game.playUrl}" target="_blank" rel="noopener noreferrer">Jogar</a>
    </div>
  `;

  return card;
}

games.forEach((game) => gamesGrid.appendChild(createCard(game)));
gameCount.textContent = `${games.length} jogos`;
