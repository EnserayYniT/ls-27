// находит объект на странице 'memory-card' по классу
const cards = document.querySelectorAll(".memory-card");
// обьявление независимых переменных в начале
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
// если переменная 'lockboard' (с значением 'false') возвращается
  if (lockBoard) return;
// если переменная 'firstCard'  с значением 'this'(выполняет код в определённой части где он применён) строго равна то возврощается
  if (this === firstCard) return;
  console.log(this);
// значение 'this' с 'classList' добавленный 'flip'(перевернуть) 
  this.classList.add("flip");
// если '!hasFlipCard' с значением 'true' и 'this' возвращается
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
// 'secondCard' с значением 'this'
  // second click
  secondCard = this;
// объявления функции 
  checkForMatch();
}

function checkForMatch() {
// переменная 'let'='isMatch' с значением внутри, 'firstCard' поиск дата атрибута с помощью 'dataset' имя атрибута 'framework'
// или 'secondCard'  
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// функция на основе 'isMatch' если 'true' то 'disableCards', если 'false' то 'unflipCards' 
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
// 'firstCard' убирается из-за метода 'removeEventListener' по клику с функцией flipCard 
// 'secondCard' тоже по такому принципу 
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
// обьявление функции
  resetBoard();
}

function unflipCards() {
// переменная 'lockBoard' с значением 'true' 
  lockBoard = true;
// таймер функция 
  setTimeout(() => {
// переменная 'firstCard' убирается с значением 'flip'
// тоже самое с переменной secondCard 
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
// объявлние функции 'resetBoard' через 1500 милисекунд
    resetBoard();
  }, 1500);
}

function resetBoard() {
// массив с переменными 'hasFlippedCard' и 'lockBoard' и их значение 'false' 
  [hasFlippedCard, lockBoard] = [false, false];
// массив с переменными firstCad и secondCard равняются нулю 
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
// переменная 'cards' с циклом 'forEach' и параметром 'card'   
  cards.forEach((card) => {
// объявление переменной randomPos с перенятым методом 'Math.floor'(округление вниз) и дочерний метод 'Math.random' умноженный на 12
    let randomPos = Math.floor(Math.random() * 12);
// переменная 'randomPos' была записана в параметр 'card'
    card.style.order = randomPos;
  });
})();
// переменна 'cards' с циклом 'forEach' и параметр 'card' плюс метод 'addEventListener' по клику('click') и функцией flipCard
cards.forEach((card) => card.addEventListener("click", flipCard));
