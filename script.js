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