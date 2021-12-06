document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'flapjack1',
      img: 'images/flapjack1.jpg',
    },
    {
      name: 'flapjack1',
      img: 'images/flapjack1.jpg',
    },
    {
      name: 'flapjack2',
      img: 'images/flapjack2.jpg',
    },
    {
      name: 'flapjack2',
      img: 'images/flapjack2.jpg',
    },
    {
      name: 'flapjack3',
      img: 'images/flapjack3.jpg',
    },
    {
      name: 'flapjack3',
      img: 'images/flapjack3.jpg',
    },
    {
      name: 'flapjack4',
      img: 'images/flapjack4.jpg',
    },
    {
      name: 'flapjack4',
      img: 'images/flapjack4.jpg',
    },
    {
      name: 'flapjack5',
      img: 'images/flapjack5.jpg',
    },
    {
      name: 'flapjack5',
      img: 'images/flapjack5.jpg',
    },
    {
      name: 'flapjack6',
      img: 'images/flapjack6.jpg',
    },
    {
      name: 'flapjack6',
      img: 'images/flapjack6.jpg',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'All flapjacks found!';
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 400);
    }
  }

  createBoard();
});
