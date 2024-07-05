window.addEventListener('load', function() {
  const userCountElement = document.getElementById('userCount');
  let count = parseInt(localStorage.getItem('userCount'));

  if (isNaN(count)) {
    console.log('Count is NaN, setting it to 2000');
    count = 2000;
  }

  console.log('Initial user count:', count);

  setInterval(() => {
    count += 10;
    console.log('Incrementing count by 10:', count);
    userCountElement.textContent = count.toLocaleString();
    localStorage.setItem('userCount', count);
  }, 3600);

  userCountElement.textContent = count.toLocaleString();
});

window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
