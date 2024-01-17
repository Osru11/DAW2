document.addEventListener('DOMContentLoaded', function () {
    const icons = [
        'fa-apple',
        'fa-car',
        'fa-bicycle',
        'fa-camera',
        'fa-coffee',
        'fa-heart',
        'fa-music',
        'fa-star',
        'fa-tree',
        'fa-plane'
    ];

    const cards = icons.concat(icons);
    cards.sort(() => Math.random() - 0.5);

    const memoryGame = document.getElementById('memoryGame');

    cards.forEach((iconClass, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = `<i class="fas ${iconClass}"></i>`;

        const back = document.createElement('div');
        back.classList.add('back');

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', () => flipCard(index));
        memoryGame.appendChild(card);
    });

    let flippedCards = [];
    let lockBoard = false;

    function flipCard(index) {
        if (lockBoard || flippedCards.includes(index)) return;

        const card = memoryGame.children[index];
        card.classList.add('flipped');
        flippedCards.push(index);

        if (flippedCards.length === 2) {
            lockBoard = true;
            setTimeout(checkMatch, 1000);
        }
    }

    function checkMatch() {
        const [index1, index2] = flippedCards;

        const card1 = memoryGame.children[index1];
        const card2 = memoryGame.children[index2];

        if (card1.innerHTML === card2.innerHTML) {
            card1.removeEventListener('click', () => flipCard(index1));
            card2.removeEventListener('click', () => flipCard(index2));
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        lockBoard = false;
    }
});
