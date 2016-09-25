var cards = ['queen', 'egg','king', 'egg','queen', 'king'];
			
var cardsInPlay = []; 

var board = document.getElementById('game-board');


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);

	}
}


function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));

		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='root/king_card.png'>";
		} else if (this.getAttribute('data-card') === 'queen') {
			this.innerHTML = "<img src='root/queen_card.png'>"; 
		} else {
			this.innerHTML = "<img src='http://www.amusingtime.com/images/019/funny-easter-egg.jpg'>";
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();
