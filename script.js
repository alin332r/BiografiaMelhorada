<<<<<<< HEAD
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

=======
const nav1 = document.querySelector('nav a:first-child');
const nav2 = document.querySelector('nav a:nth-child(2)');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

nav1.addEventListener('click', (event) => {
  event.preventDefault();
  document.startViewTransition(() => {
    page2.style.display = 'none';
    page1.style.display = 'block';
    nav2.classList.remove('active');
    nav1.classList.add('active');
  });
})

nav2.addEventListener('click', (event) => {
  event.preventDefault();
  document.startViewTransition(() => {
    page1.style.display = 'none';
    page2.style.display = 'block';
    nav1.classList.remove('active');
    nav2.classList.add('active');        
  });      
})    
>>>>>>> 4b087b36fa30277ee1ec37ebaf91ae574d5692f8
