const hero = document.querySelector('.hero');

// change card's backgroundColor
hero.addEventListener('click', function () {
  //random color
  color = Math.floor(Math.random() * 16777215).toString(16);
  hero.style.backgroundColor = `#${color}`;
});

hero.addEventListener('mouseout', function () {
  //random color
  hero.style.backgroundColor = `rgba(245, 245, 245, 0.3)`;
});
