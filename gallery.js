
const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay');
const overlayimg = overlay.querySelector('img');
const overlayclose = overlay.querySelector('.close');

function generatehtml([h,v]){

return `  <div class="item h${h} v${v}">
  <img src="images/${randomnum(12)}.jpg">
  <div class="item-overlay">
  <button > view -> </button>
  </div>
  </div> `;

}
function randomnum(limit){
  return Math.floor(Math.random() * limit + 1)
}
function handle(e){
  const src = e.currentTarget.querySelector('img').src;
  console.log(e.currentTarget)
  overlayimg.src = src;
  overlay.classList.add('open');

}
function close (){
  overlay.classList.remove('open')
}
const digits = Array.from({length:50},() => [randomnum(4),randomnum(4)]).
concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);

const html = digits.map(generatehtml).join('');
gallery.innerHTML = html;
const items = document.querySelectorAll('.item');
items.forEach((item, i) => item.addEventListener('click',handle));
overlayclose.addEventListener('click',close)
