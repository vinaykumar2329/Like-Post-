const cont = document.querySelector('.container')
const love = document.querySelector('i');

function contLike() {
  love.style.transform = 'translate(-50%,-50%) scale(1.5)';
  setTimeout(function () {
    love.style.opacity = 0;
  }, 800);
  setTimeout(function () {
    love.style.transform = 'translate(-50%,-50%) scale(0)';
  }, 900);
}


cont.addEventListener('dblclick', contLike);