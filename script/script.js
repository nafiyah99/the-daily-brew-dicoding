//lazyLoad
document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('.lazy');

  const lazyLoad = () => {
    lazyImages.forEach((img) => {
      if (img.getBoundingClientRect().top < window.innerHeight && !img.src) {
        img.src = img.getAttribute('data-src');
      }
    });
  };

  window.addEventListener('scroll', lazyLoad);
});

//fadeIn
window.addEventListener('scroll', function () {
  const articles = document.querySelectorAll('article');
  articles.forEach((article) => {
    const rect = article.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      article.style.opacity = 1;
      article.style.transform = 'translateY(0)';
    }
  });
});

//clock
function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  const formattedTime = `${String(hours % 12 || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${amPm}`;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = daysOfWeek[now.getDay()];
  const date = `${monthsOfYear[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  document.getElementById('time').innerText = formattedTime;
  document.getElementById('day').innerText = day;
  document.getElementById('date').innerText = date;
}

setInterval(updateClock, 1000);

updateClock();
