document.querySelectorAll('#curiosidades li').forEach(item => { 
    item.addEventListener('click', () => {
        const extraInfo = item.querySelector('.extra-info');
        if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
        } else {
            extraInfo.style.display = 'block';
        }
    });
});

// Array com várias citações traduzidas
const quotes = [
    "Eu não serei uma estrela do rock. Eu serei uma lenda.",
    "O mais importante é viver uma vida fabulosa. Contanto que seja fabulosa, não me importo com quanto tempo dure.",
    "Você pode fazer qualquer coisa com minha música, mas eu não posso viver sem ela.",
    "Eu sou uma lenda, sou um rei e sou uma rainha.",
    "Não me pare agora, estou me divertindo muito, estou me sentindo incrível."
];

// Função para escolher uma citação aleatória
function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
}

// Chama a função assim que a página for carregada para mostrar uma citação inicial
window.onload = showRandomQuote;

// Muda a citação automaticamente a cada 5 segundos
setInterval(showRandomQuote, 10000);  // 5000 milissegundos = 5 segundos

// Adiciona evento para o botão de nova citação
document.getElementById('new-quote').addEventListener('click', showRandomQuote);

